import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMiniXMark, HiMiniPaperAirplane } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa6";

const profileImg = "/profile.jpg";

const WHATSAPP_NUMBER = "918830306901";
const WHATSAPP_MARKER = "[WHATSAPP_CONNECT]";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/chat`;

const GREETING_MESSAGES = [
  "👋 Hi! Ask me about Saurav's skills & projects!",
  "🚀 Need a DevOps expert? Let's chat!",
  "💬 Got questions about my services?",
];

const BUBBLE_SOUND_URL = "https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3";

const playBubbleSound = () => {
  try {
    const audio = new Audio(BUBBLE_SOUND_URL);
    audio.volume = 0.3;
    audio.play().catch(() => {});
  } catch {}
};

const playDoubleSound = () => {
  playBubbleSound();
  setTimeout(() => playBubbleSound(), 600);
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hey! 👋 I'm Saurav's AI assistant. Ask me anything about his skills, projects, or services!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [nudgeText, setNudgeText] = useState("");
  const [showNudge, setShowNudge] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Sound + nudge pattern: 2 sounds at 3s, then every 10s with 2 sounds
  useEffect(() => {
    if (open) {
      setShowNudge(false);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    let idx = 0;

    const showNudgeWithSound = () => {
      setNudgeText(GREETING_MESSAGES[idx % GREETING_MESSAGES.length]);
      setShowNudge(true);
      playDoubleSound();
      idx++;
      const hideTimer = setTimeout(() => setShowNudge(false), 4000);
      timers.push(hideTimer);
    };

    // First nudge at 3s
    const first = setTimeout(() => {
      showNudgeWithSound();
      // Second nudge at 3s after first (6s total)
      const second = setTimeout(() => {
        showNudgeWithSound();
        // Then every 10s, show 2 nudges with 3s gap
        const recurring = setInterval(() => {
          showNudgeWithSound();
          const secondInCycle = setTimeout(() => {
            showNudgeWithSound();
          }, 3000);
          timers.push(secondInCycle);
        }, 10000);
        timers.push(recurring as unknown as ReturnType<typeof setTimeout>);
      }, 3000);
      timers.push(second);
    }, 3000);
    timers.push(first);

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [open]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const userMsg: Msg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    let assistantSoFar = "";
    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!resp.ok || !resp.body) {
        throw new Error("Failed to get response");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantSoFar += content;
              const captured = assistantSoFar;
              setMessages((prev) => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant" && prev.length > 1 && prev[prev.length - 2]?.role === "user") {
                  return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: captured } : m));
                }
                return [...prev, { role: "assistant", content: captured }];
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I'm having trouble connecting. Please try again!" },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages]);

  return (
    <>
      {/* Nudge bubble */}
      <AnimatePresence>
        {showNudge && !open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="fixed bottom-24 right-4 sm:right-6 z-[999] max-w-[220px] bg-card border border-border rounded-2xl rounded-br-sm px-4 py-3 shadow-xl cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <p className="text-xs sm:text-sm text-foreground font-medium">{nudgeText}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button - hidden on mobile when chat is open */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[1000] w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-primary shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow ${open ? "hidden sm:flex" : "flex"}`}
      >
        {open ? (
          <div className="w-full h-full bg-primary flex items-center justify-center">
            <HiMiniXMark className="text-primary-foreground" size={24} />
          </div>
        ) : (
          <img src={profileImg} alt="Chat with Saurav's AI" className="w-full h-full object-cover object-top" />
        )}
      </motion.button>

      {/* Chat window - fullscreen on mobile, floating on desktop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed z-[999] bg-card border border-border shadow-2xl flex flex-col overflow-hidden
              inset-0 rounded-none
              sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[380px] sm:h-[520px] sm:rounded-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center gap-3 px-4 py-3 border-b border-border bg-card safe-area-top">
              <div className="relative">
                <img src={profileImg} alt="Saurav" className="w-9 h-9 rounded-full object-cover object-top border border-primary/30" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-foreground">Saurav's AI Assistant</p>
                <p className="text-[10px] text-green-500 font-medium">Online • Ready to help</p>
              </div>
              <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg hover:bg-muted transition-colors">
                <HiMiniXMark className="text-muted-foreground" size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
              {messages.map((msg, i) => {
                const hasWhatsApp = msg.role === "assistant" && msg.content.includes(WHATSAPP_MARKER);
                const displayContent = hasWhatsApp ? msg.content.replace(WHATSAPP_MARKER, "").trim() : msg.content;
                return (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <img src={profileImg} alt="AI" className="w-6 h-6 rounded-full object-cover object-top flex-shrink-0 mt-1 border border-primary/20" />
                  )}
                  <div className="flex flex-col gap-2 max-w-[80%]">
                    <div
                      className={`px-3 py-2 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-muted text-foreground rounded-bl-sm"
                      }`}
                    >
                      {displayContent}
                    </div>
                    {hasWhatsApp && (
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Saurav%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all hover:scale-105"
                        style={{ backgroundColor: "#25D366", color: "#fff" }}
                      >
                        <FaWhatsapp size={18} />
                        Chat on WhatsApp
                      </a>
                    )}
                  </div>
                </div>
                );
              })}
              {loading && !messages[messages.length - 1]?.content && (
                <div className="flex gap-2">
                  <img src={profileImg} alt="AI" className="w-6 h-6 rounded-full object-cover object-top flex-shrink-0 mt-1" />
                  <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex items-center gap-2 px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] border-t border-border bg-card"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects..."
                className="flex-1 bg-muted/50 border border-border rounded-xl px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 disabled:opacity-40 transition-all flex-shrink-0"
              >
                <HiMiniPaperAirplane size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
