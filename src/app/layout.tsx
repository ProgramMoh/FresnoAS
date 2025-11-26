import type { Metadata } from "next";
import { Manrope } from "next/font/google"; 
import "./globals.css";
import Footer from "@/components/Footer";

const manrope = Manrope({ 
  subsets: ["latin"], 
  variable: "--font-manrope",
  display: "swap" 
});

export const metadata: Metadata = {
  title: "Fresno Auto Sales | First-Time Buyer Specialists",
  description: "Affordable cars for students in Fresno. No hidden fees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* MASTER RULE: 
        1. bg-slate-50: Sets the global background to soft gray.
        2. text-slate-900: Sets global text to dark gray.
        3. antialiased: Makes fonts look sharp.
      */}
      <body className={`${manrope.variable}`}>
        {children}
      <Footer />
      </body>
    </html>
  );
}