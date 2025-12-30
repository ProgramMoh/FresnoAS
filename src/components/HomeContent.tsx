"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, MapPin, BadgeCheck, Wallet } from 'lucide-react';
import Navbar from '@/components/Navbar';
import CarImageWithFrame from "@/components/CarImageWithFrame"; // Add import at top

// --- CONFIGURATION ---
const HERO_IMAGES = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
  "/hero4.png"
];

// Receive cars as a prop from the Server
export default function HomeContent({ cars }: { cars: any[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cycle Background Images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-luxury-black min-h-screen text-white overflow-x-hidden">
      <Navbar />
      
      {/* --- CINEMATIC HERO --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0 bg-black">
           <AnimatePresence mode='popLayout'>
             <motion.img
               key={currentImageIndex}
               src={HERO_IMAGES[currentImageIndex]}
               alt="Luxury Car Background"
               initial={{ opacity: 0, scale: 1.1 }}
               animate={{ opacity: 0.4, scale: 1 }} 
               exit={{ opacity: 0 }}
               transition={{ duration: 1.5 }}
               className="absolute inset-0 w-full h-full object-cover"
             />
           </AnimatePresence>
           
           <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center max-w-4xl px-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-luxury-silver uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">
              Value Without Compromise
            </span>
            {/* SEO UPDATE: Keywords in H1 */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Fresno's Premier <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Used Auto Sales.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
              We define the new standard for pre-owned vehicles in the Central Valley. Experience transparent pricing, rigorous inspections, and dignified service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/pre-qualify" className="rounded-sm bg-white text-black px-10 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors duration-300">
                Get Pre-Qualified
              </Link>
              <Link href="/contact" className="rounded-sm border border-white/30 text-white px-10 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- REPUTATION / TRUST SECTION --- */}
      <section className="bg-zinc-50 py-20 border-b border-gray-100 text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} fill="#EAB308" className="text-yellow-500" />
              ))}
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-slate-900">
              5 Years. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">100% 5-Star Reviews.</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
              Our reputation isn't just a number, it's a promise kept. Since restructuring our business in 2020, we have maintained a flawless 5-star rating on Google.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INVENTORY SHOWCASE --- */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex justify-between items-end mb-16">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Arrivals</h2>
                <div className="h-1 w-20 bg-black"></div>
             </motion.div>
             
             <Link href="/inventory" className="hidden md:flex items-center gap-2 font-semibold uppercase tracking-widest text-sm hover:opacity-60 transition">
                Full Inventory <ArrowRight size={16} />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
            {cars.length === 0 && (
                [1,2,3].map(i => (
                    <div key={i} className="animate-pulse">
                        <div className="bg-gray-200 aspect-video mb-4"></div>
                        <div className="h-6 bg-gray-200 w-3/4 mb-2"></div>
                    </div>
                ))
            )}

            {cars.map((car, index) => (
              <motion.div 
                key={car._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/inventory/${car.slug?.current}`}>
                <div className="mb-6 relative aspect-video group">
                  <CarImageWithFrame 
                    src={car.imageUrl} 
                    alt={car.name} 
                    className="w-full h-full"
                  />
                </div>
                  <div className="flex justify-between items-start border-b border-gray-200 pb-4">
                    <div>
                        <h3 className="text-xl font-bold mb-1">{car.name}</h3>
                        <p className="text-gray-500 text-sm">{car.mileage?.toLocaleString()} Miles</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-bold">${car.price?.toLocaleString()}</p>
                        <span className="text-xs text-gray-400 uppercase tracking-wider">Cash Price</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEO CONTENT BLOCK (THE ANCHOR) --- */}
      <section className="bg-[#080808] border-t border-white/10 py-24 px-6 text-white">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-light mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-500">Everything you need to know about buying a used car in Fresno.</p>
            </div>

            <div className="grid gap-8">
                <div className="bg-[#111] p-8 border border-white/5">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-3">
                        <MapPin className="text-purple-500" size={20} />
                        Where is Fresno Auto Sales located?
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        We are conveniently located at <strong>3808 E Belmont Ave, Fresno, CA 93702</strong>. We serve the entire Central Valley, providing high-quality used cars to Fresno, Clovis, and surrounding areas.
                    </p>
                </div>

                <div className="bg-[#111] p-8 border border-white/5">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-3">
                        <Wallet className="text-pink-500" size={20} />
                        Do you offer financing for bad credit?
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        Yes. We believe everyone deserves reliable transportation. We work with major partners like <strong>Chase, Wells Fargo, and Bank of America</strong>, as well as specialized lenders to help first-time buyers and those with challenging credit history get approved.
                    </p>
                </div>

                <div className="bg-[#111] p-8 border border-white/5">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-3">
                        <BadgeCheck className="text-red-500" size={20} />
                        Are your vehicles inspected?
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        Absolutely. Every vehicle on our lot undergoes a rigorous <strong>150-point inspection</strong>. We specialize in finding value-driven vehicles (Honda, Toyota, Ford) and ensuring they are mechanically sound before they ever go up for sale. Quality is our non-negotiable standard.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- TRUST BANNER --- */}
      <section className="bg-luxury-charcoal text-white py-20 border-t border-gray-800">
         <div className="max-w-7xl mx-auto px-6 text-center">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                    { title: "Inspected Quality", desc: "Every vehicle passes a 150-point inspection." },
                    { title: "Stress-Free Financing", desc: "Tailored plans for first-time buyers." },
                    { title: "Transparent Pricing", desc: "The price you see is the price you pay." }
                 ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                    >
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400 font-light">{item.desc}</p>
                    </motion.div>
                 ))}
             </div>
         </div>
      </section>
    </div>
  );
}