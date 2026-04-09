import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Bebas_Neue } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nicholas' Personal Website",
  description: "My Personal Website",
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
      <body className={`${playfair.className} ${bebas.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
