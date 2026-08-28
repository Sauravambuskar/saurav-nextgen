import type { Metadata } from "next";
import { Providers } from "./providers";
import "@/index.css";

const SITE_URL = "https://saurav-nx.vercel.app";
const SOCIAL_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/pMSt7AwpKQhLXxSuEAm2VvVodsC3/social-images/social-1774812354028-1000130344.webp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Saurav Ambuskar | DevOps Engineer – AWS, Kubernetes, CI/CD",
  description:
    "Saurav Ambuskar – DevOps Engineer with 3+ years of experience in AWS, Kubernetes, Terraform, CI/CD pipelines & cloud infrastructure. 17+ production projects across industries.",
  keywords: [
    "DevOps Engineer",
    "AWS",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Cloud Infrastructure",
    "Docker",
    "Saurav Ambuskar",
    "Pune",
    "India",
  ],
  authors: [{ name: "Saurav Ambuskar" }],
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://saurav-nextgen.lovable.app/",
    title: "Saurav Ambuskar | DevOps Engineer – AWS, Kubernetes, CI/CD",
    description:
      "DevOps Engineer with 3+ years experience in AWS, Kubernetes, CI/CD, and Infrastructure Automation. 17+ production projects.",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurav Ambuskar | DevOps Engineer – AWS, Kubernetes, CI/CD",
    description:
      "DevOps Engineer with 3+ years experience in AWS, Kubernetes, CI/CD, and Infrastructure Automation. 17+ production projects.",
    images: [SOCIAL_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saurav Ambuskar",
  jobTitle: "DevOps Engineer",
  url: "https://saurav-nextgen.lovable.app",
  sameAs: [
    "https://github.com/Sauravambuskar",
    "https://www.linkedin.com/in/sauravambuskar/",
  ],
  email: "saurava581@gmail.com",
  telephone: "+918830306901",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressCountry: "IN",
  },
  knowsAbout: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "Cloud Infrastructure", "DevOps"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: browser extensions (e.g. grammar checkers) inject
    // attributes like data-lt-installed onto <html> before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Next.js hoists link/meta/script tags rendered anywhere in the tree into <head>. */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
