import type { Metadata } from "next";
import "./globals.css";
import { Inter, Bebas_Neue } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bebas",
});

import CursorTrail from "@/components/CursorTrail";

export const metadata: Metadata = {
  title: "Nicholas — Frontend Web Developer",
  description:
    "Personal portfolio of Nicholas, a frontend web developer crafting impactful websites and memorable digital journeys.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://vercel.live" />
      </head>
      <body
        className={`${inter.variable} ${bebas.variable} antialiased`}
        suppressHydrationWarning
      >
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
