import type { Metadata, Viewport } from "next";
import { Bitter, Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";
import "./chrome.css";

const serif = Bitter({ subsets: ["latin"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const DESCRIPTION = "Learn HTML, CSS, JavaScript, Python, SQL, Java, C++, and more for free. Short lessons, live online compilers, flashcards, quizzes, and certificates.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: { default: "akademy. Learn to code, one lesson at a time", template: "%s · akademy." },
  description: DESCRIPTION,
  openGraph: { type: "website", siteName: SITE_NAME, title: "akademy. Learn to code, one lesson at a time", description: DESCRIPTION, url: "/", locale: "en_PH" },
  twitter: { card: "summary_large_image" },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : undefined,
};

export const viewport: Viewport = { themeColor: "#162e20" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
