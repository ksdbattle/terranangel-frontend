import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Solar System Explorer",
  description: "A cyberpunk-themed solar system explorer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vt323.className}>{children}</body>
    </html>
  );
}
