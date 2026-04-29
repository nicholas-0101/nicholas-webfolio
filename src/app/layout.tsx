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
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Nicholas' Portfolio",
  description:
    "Personal portfolio of Nicholas, who turns complexity into elegant solutions.",
  icons: {
    icon: "/favicon.ico",
  },
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
        <LoadingScreen />
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
