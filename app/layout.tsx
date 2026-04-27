import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeuralWeave Solutions LLP | Intelligent Survey Operations & AI-Powered Market Research",
  description:
    "NeuralWeave Solutions LLP delivers expert survey programming, data processing, data engineering, and dashboarding — backed by 20+ years of market research experience and a growing suite of AI-powered tools.",
  keywords:
    "survey programming, data processing, data engineering, dashboarding, market research, AI survey tools, survey operations, New Delhi",
  authors: [{ name: "NeuralWeave Solutions LLP" }],
  openGraph: {
    title: "NeuralWeave Solutions LLP",
    description:
      "Intelligent survey operations for the modern research era. Expert market research services + AI-powered automation tools.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#0d1117] text-[#f0f6fc]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
