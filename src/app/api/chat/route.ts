import { SYSTEM_PROMPT, GROQ_MODEL } from "@/lib/chat-prompt";

// Streams tokens back to the browser, so it must not be statically evaluated.
export const dynamic = "force-dynamic";

type Msg = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error("GROQ_API_KEY is not set — the chat route cannot reach Groq.");
    return Response.json({ error: "AI service is not configured" }, { status: 500 });
  }

  let messages: Msg[];
  try {
    ({ messages } = await req.json());
    if (!Array.isArray(messages)) throw new Error("messages must be an array");
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Cap history so a long conversation can't blow up the context or the bill.
  const recent = messages.slice(-12);

  let groqRes: Response;
  try {
    groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...recent],
        temperature: 0.7,
        max_completion_tokens: 512,
        stream: true,
      }),
    });
  } catch (err) {
    console.error("Could not reach Groq:", err);
    return Response.json({ error: "AI service unreachable" }, { status: 502 });
  }

  if (!groqRes.ok || !groqRes.body) {
    const detail = await groqRes.text().catch(() => "");
    console.error("Groq API error:", groqRes.status, detail);

    if (groqRes.status === 429) {
      return Response.json(
        { error: "Rate limited. Please try again in a moment." },
        { status: 429 }
      );
    }
    // 401/404 are config problems, not outages — say which one in the logs so
    // this doesn't get misread as a transient failure again.
    if (groqRes.status === 401 || groqRes.status === 403) {
      console.error("Groq auth failed — check the GROQ_API_KEY env var.");
    } else if (groqRes.status === 404) {
      console.error(
        `Groq model "${GROQ_MODEL}" unavailable — likely retired. List current ` +
          "models with GET https://api.groq.com/openai/v1/models and update GROQ_MODEL."
      );
    }
    return Response.json({ error: "AI service error" }, { status: 500 });
  }

  // Pass the SSE stream straight through; the client already parses this shape.
  return new Response(groqRes.body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
