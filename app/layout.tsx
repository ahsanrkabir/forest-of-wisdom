import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { PT_Sans } from "next/font/google";

import Navbar from "@/components/shared/Navbar";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Forest of Wisdom",
  description:
    "A blog app that talks about spirituality, philosophy, and wisdom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} ${ptSans.variable} relative antialiased`}
      >
        <div className="texture" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
