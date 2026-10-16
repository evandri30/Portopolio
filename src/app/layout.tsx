import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import MotionProvider from "@/components/layout/MotionProvider";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { profile } from "@/data/profile";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["wdth", "opsz"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const title = `${profile.name} — Data Engineer & Software Engineer`;
const description =
  "Portfolio of Evandri Ridho Hasmono: Informatics graduate and certified Associate Data Engineer building internal data tools, APIs, and full-stack web applications with SQL, Python, PHP, and TypeScript.";

// Vercel sets this at build time; resolves absolute URLs for the Open Graph image.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: profile.name }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${jetbrains.variable} font-sans antialiased`}>
        <MotionProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}
