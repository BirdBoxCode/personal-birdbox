import type { Metadata } from "next";
import { Geist, Geist_Mono, Jura } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "BirdBox Code",
  description: "BirdBox Code and Design",
  icons: {
    icon: "https://res.cloudinary.com/depkh8amy/image/upload/v1680126141/BirdBox%20Code/BirdBox_dgn3ja.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jura.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
