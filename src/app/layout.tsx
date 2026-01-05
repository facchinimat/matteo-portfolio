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

export const metadata: Metadata = {
  title: "Matteo Facchini | Full-Stack Developer & CS Student",
  description: "Full-stack software engineer and CS student at Stony Brook University. Specializing in Next.js, React, TypeScript, and backend development. Building scalable web applications.",
  keywords: "full-stack developer, Next.js, React, TypeScript, software engineer, CS student",
  authors: [{ name: "Matteo Facchini" }],
  openGraph: {
    title: "Matteo Facchini | Full-Stack Developer",
    description: "Explore my portfolio, projects, and experience in full-stack development.",
    url: "https://matteofacchini.dev",
    siteName: "Matteo Facchini",
    locale: "en_US",
    type: "website",
  },
  
  robots: {
    index: true,
    follow: true,
  },
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
      </body>
    </html>
  );
}
