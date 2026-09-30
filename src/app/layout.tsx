import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://matteo-portfolio-sage.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Matteo Facchini | Backend & Infrastructure Software Engineer",
    template: "%s | Matteo Facchini",
  },

  description:
    "Portfolio of Matteo Facchini, a Computer Science student and undergraduate systems researcher at Stony Brook University focused on backend engineering, infrastructure, distributed systems, and AI systems.",

  keywords: [
    "Matteo Facchini",
    "software engineer",
    "backend engineer",
    "infrastructure engineer",
    "computer science",
    "Stony Brook University",
    "distributed systems",
    "FastAPI",
    "PostgreSQL",
    "Python",
    "CI/CD",
    "ForgeCI",
    "CourseLens AI",
    "GPU systems",
  ],

  authors: [
    {
      name: "Matteo Facchini",
      url: siteUrl,
    },
  ],

  creator: "Matteo Facchini",

  applicationName: "Matteo Facchini Portfolio",

  category: "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Matteo Facchini",
    title: "Matteo Facchini | Backend & Infrastructure Software Engineer",
    description:
      "Computer Science student and systems researcher building backend infrastructure, developer tools, and AI systems.",
  },

  twitter: {
    card: "summary",
    title: "Matteo Facchini | Software Engineer",
    description:
      "Backend, infrastructure, systems, and AI engineering projects by Matteo Facchini.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matteo Facchini",
  url: siteUrl,
  sameAs: [
    "https://github.com/facchinimat",
    "https://www.linkedin.com/in/matteo-facchini-b14667352/",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Stony Brook University",
  },
  knowsAbout: [
    "Backend Engineering",
    "Software Infrastructure",
    "Distributed Systems",
    "Artificial Intelligence",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Linux",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}