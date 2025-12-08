"use client";

import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false);        

  const linkClasses = (path: string) =>
    `block py-3 md:py-0 text-lg md:text-base transition-colors hover:text-pink-500 ${
      pathname === path
        ? "font-bold text-slate-900"
        : "font-medium text-slate-600"
    }`;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 min-h-[80px] flex justify-between items-center relative z-50 bg-white">
        
        {/* --- LOGO AREA --- */}
        <Link href="/" className="flex items-center shrink-0 py-2" onClick={handleLinkClick}>
          <img 
            src="/FASlogo.png" 
            alt="Fresno Auto Sales Logo" 
            className="h-12 md:h-16 w-auto object-contain hover:opacity-90 transition-opacity" 
          />
        </Link>

        {/* --- DESKTOP LINKS --- */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className={linkClasses("/")}>Home</Link>
          <Link href="/inventory" className={linkClasses("/inventory")}>Inventory</Link>
          <Link href="/financing" className={linkClasses("/financing")}>Financing</Link>
          <Link href="/about" className={linkClasses("/about")}>About Us</Link>
          <Link href="/contact" className={linkClasses("/contact")}>Contact</Link>
        </div>

        {/* --- ACTIONS AREA --- */}
        <div className="flex items-center gap-3 md:gap-4">
          
          {/* Desktop Phone Number */}
          <a
            href="tel:+15592332001"
            className="hidden lg:flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition"
          >
            <Phone size={18} />
            <span className="text-sm">(559) 233-2001</span>
          </a>
          
          {/* GLOW BUTTON (Responsive) */}
          <Link
            href="/pre-qualify"
            onClick={handleLinkClick}
            className="relative inline-flex h-9 md:h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-transform duration-300"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6d31f7_0%,#fa419c_50%,#ff3131_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 md:px-6 py-1 text-[10px] md:text-sm font-bold text-white backdrop-blur-3xl whitespace-nowrap">
              Get Pre-Qualified
            </span>
          </Link>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN & BACKDROP --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 1. The Menu Content */}
            <motion.div
              key="menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              // Changed 'top-20' to 'top-[100%]' so it always sits exactly below the navbar, regardless of navbar height
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden absolute w-full left-0 top-[100%] shadow-xl z-50"
            >
              <div className="px-6 py-6 flex flex-col space-y-2">
                <Link href="/" onClick={handleLinkClick} className={linkClasses("/")}>Home</Link>
                <Link href="/inventory" onClick={handleLinkClick} className={linkClasses("/inventory")}>Inventory</Link>
                <Link href="/financing" onClick={handleLinkClick} className={linkClasses("/financing")}>Financing</Link>
                <Link href="/about" onClick={handleLinkClick} className={linkClasses("/about")}>About Us</Link>
                <Link href="/contact" onClick={handleLinkClick} className={linkClasses("/contact")}>Contact</Link>
                
                {/* Mobile Phone Link */}
                <a href="tel:+15592332001" className="flex items-center gap-3 py-3 text-slate-600 font-medium border-t border-slate-100 mt-4 pt-4">
                  <div className="bg-slate-100 p-2 rounded-full">
                      <Phone size={18} />
                  </div>
                  Call Dealership
                </a>
              </div>
            </motion.div>

            {/* 2. The Backdrop (Click Outside to Close) */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[80px] z-40 bg-black/20 backdrop-blur-[2px] md:hidden"
            />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}