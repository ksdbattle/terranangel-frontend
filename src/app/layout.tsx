import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TerranAngel™",
  description: "Angel on Earth, guarding dreams and creativity.",
  icons: {
    icon: '/favicon.ico',
    apple: '/icon-192.png',
    other: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
