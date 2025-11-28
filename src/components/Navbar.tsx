"use client";
import Link from 'next/link';
import { Car, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `transition-colors hover:text-pink-500 ${
      pathname === path
        ? "font-bold text-slate-800"
        : "font-medium text-slate-600"
    }`;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-2 rounded-xl text-white transform group-hover:rotate-12 transition-transform duration-300">
            <Car size={24} />
          </div>
          <span className="font-bold text-2xl text-slate-900 tracking-tight">
            Fresno<span className="text-red-600">Auto</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className={linkClasses("/")}>Home</Link>
          <Link href="/inventory" className={linkClasses("/inventory")}>Inventory</Link>
          <Link href="/financing" className={linkClasses("/financing")}>Financing</Link>
          <Link href="/about" className={linkClasses("/about")}>About Us</Link>
          <Link href="/contact" className={linkClasses("/contact")}>Contact</Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+15592332001"
            className="hidden md:flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition"
          >
            <Phone size={18} />
            <span className="text-sm">(559) 233-2001</span>
          </a>
          
          {/* --- HERO UI GLOW BUTTON --- */}
          <Link
            href="/pre-qualify"
            className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-transform duration-300"
          >
            {/* 1. The Spinning Gradient Background */}
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6d31f7_0%,#fa419c_50%,#ff3131_100%)]" />

            {/* 2. The Inner Content Mask */}
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-bold text-white backdrop-blur-3xl">
              Get Pre-Qualified
            </span>
          </Link>
          
        </div>
      </div>
    </nav>
  );
}