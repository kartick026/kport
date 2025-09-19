import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kartick Sharma - Computer Science Student & Developer",
  description: "Portfolio of Kartick Sharma, B.Tech CSE student at VIT Vellore specializing in AI/ML, web development, and 3D visualization.",
  keywords: ["developer", "portfolio", "react", "python", "ai", "ml", "vit", "student", "3d", "visualization"],
  authors: [{ name: "Kartick Sharma" }],
  creator: "Kartick Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kartick.dev",
    title: "Kartick Sharma - Computer Science Student & Developer",
    description: "Portfolio of Kartick Sharma, B.Tech CSE student at VIT Vellore specializing in AI/ML, web development, and 3D visualization.",
    siteName: "Kartick Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartick Sharma - Computer Science Student & Developer",
    description: "Portfolio of Kartick Sharma, B.Tech CSE student at VIT Vellore specializing in AI/ML, web development, and 3D visualization.",
  },
};

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
