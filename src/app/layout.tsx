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
  metadataBase: new URL("https://nicholassamuel.vercel.app"),
  title: {
    default: "Nicholas Samuel — Fullstack Developer & UI/UX Designer",
    template: "%s | Nicholas Samuel",
  },
  description:
    "Portfolio of Nicholas Samuel — a multidisciplinary Fullstack Developer, UI/UX Designer, and Graphic Designer with 3+ years of experience building modern, responsive web experiences using Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "Nicholas Samuel",
    "Fullstack Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Web Developer Indonesia",
    "Portfolio",
  ],
  authors: [
    { name: "Nicholas Samuel", url: "https://nicholassamuel.vercel.app" },
  ],
  creator: "Nicholas Samuel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nicholassamuel.vercel.app",
    siteName: "Nicholas Samuel",
    title: "Nicholas Samuel — Fullstack Developer & UI/UX Designer",
    description:
      "Multidisciplinary developer and designer who turns complexity into elegant solutions. Specializing in Next.js, TypeScript, and Tailwind CSS.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nicholas Samuel — Fullstack Developer & UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicholas Samuel — Fullstack Developer & UI/UX Designer",
    description:
      "Multidisciplinary developer and designer who turns complexity into elegant solutions.",
    images: ["/og-image.jpg"],
    creator: "Nicholas Samuel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "https://nicholassamuel.vercel.app",
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
