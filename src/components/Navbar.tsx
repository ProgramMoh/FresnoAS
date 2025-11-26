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
          
          {/* ANIMATED BORDER BUTTON */}
          <Link
            href="/inventory"
            className="relative px-5 py-2.5 rounded-lg font-bold text-sm text-white 
                        shadow-md hover:shadow-lg
                        transition-all duration-300
                        hover:scale-105
                        group
                        overflow-hidden /* IMPORTANT: Contains the giant spinning background */
                        
                        /* 1. BOTTOM LAYER: The Spinning Conic Gradient */
                        /* We make it huge (-inset-[500%]) so corners don't clip when spinning */
                        before:absolute before:-inset-[500%] 
                        /* Conic gradient repeated so the start/end flow smoothly */
                        before:bg-[conic-gradient(from_0deg,theme(colors.purple.500),theme(colors.pink.500),theme(colors.red.500),theme(colors.purple.500))]
                        before:animate-spin-slow
                        before:opacity-0 group-hover:before:opacity-100 
                        before:transition-opacity before:duration-500
                        before:-z-20 

                        /* 2. MIDDLE LAYER: The Slate Background Mask */
                        /* Inset by 2px to create the border width */
                        after:absolute after:inset-[2px] after:rounded-lg after:bg-slate-900 
                        after:-z-10"
          >
            {/* 3. TOP LAYER: The Text Content */}
            <span className="relative z-10">View Cars</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}