import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "../components/Navigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Podcast Studio - Professional Recording Space",
  description: "Professional podcast recording studio with state-of-the-art equipment and soundproof rooms in the heart of the city.",
  keywords: ["podcast studio", "recording studio", "professional audio", "podcast equipment", "soundproof rooms"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
