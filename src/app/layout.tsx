import type { Metadata } from "next";
import { Inter, Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "OBSIDIAN // SPIDER-MAN",
  description: "A high-fidelity immersive visual engine inspired by obsidianassembly.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-background selection:bg-spider-red selection:text-white">
      <body
        className={`${inter.variable} ${playfair.variable} ${ibmPlexMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
