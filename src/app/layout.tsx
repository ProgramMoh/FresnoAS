import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google"; 
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

const manrope = Manrope({ 
  subsets: ["latin"], 
  variable: "--font-manrope",
  display: "swap" 
});
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase: new URL('https://fresnoautosales.com'), // domain
  title: {
    default: "Fresno Auto Sales | Value without Compromise",
    template: "%s | Fresno Auto Sales", // e.g. "Inventory | Fresno Auto Sales"
  },
  description: "Premium used vehicles in Fresno, CA. We offer inspected quality, transparent pricing, and stress-free financing for all budgets.",
  keywords: ["Used Cars Fresno", "Auto Sales Fresno", "Car Dealership", "Bad Credit Financing", "Used Honda", "Used Toyota"],
  authors: [{ name: "Fresno Auto Sales" }],
  openGraph: {
    title: "Fresno Auto Sales",
    description: "Value without Compromise. Premium vehicles at prices you'll love.",
    url: 'https://fresnoautosales.com',
    siteName: 'Fresno Auto Sales',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="SjjVVTK58aD-B-q4Xo77WfFH8usgQVwUZQsO9gQ2G7Y" />
      </head>
      {/* MASTER RULE: 
        1. bg-slate-50: Sets the global background to soft gray.
        2. text-slate-900: Sets global text to dark gray.
        3. antialiased: Makes fonts look sharp.
      */}
      <body className={`${manrope.variable}`}>
        {children}
                <Analytics />
      <Footer />
      </body>
    </html>
  );
}