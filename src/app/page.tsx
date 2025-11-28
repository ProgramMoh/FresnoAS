"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { client } from "@/sanity/client";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import { ArrowRight, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';

// --- CONFIGURATION ---
const HERO_IMAGES = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
  "/hero4.png"
];

const CARS_QUERY = `*[_type == "car"] {
  _id,
  name,
  slug,
  price,
  mileage,
  "imageUrl": mainImage.asset->url
}[0..2]`;

export default function Home() {
  const [cars, setCars] = useState<any[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetch Cars
  useEffect(() => {
    client.fetch(CARS_QUERY).then((data) => setCars(data));
  }, []);

  // Cycle Background Images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change every 5 seconds

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
               animate={{ opacity: 0.4, scale: 1 }} // Opacity 0.4 ensures text readability
               exit={{ opacity: 0 }}
               transition={{ duration: 1.5 }}
               className="absolute inset-0 w-full h-full object-cover"
             />
           </AnimatePresence>
           
           {/* Gradient Overlay for extra text readability */}
           <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent z-10" />
        </div>

        {/* Content with Animation */}
        <div className="relative z-20 text-center max-w-4xl px-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-luxury-silver uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">
              The New Standard
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Driven by <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Excellence.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
              Premium vehicles at prices you'll love. Experience the transparency of Fresno Auto Sales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/inventory" className="rounded-sm bg-white text-black px-10 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors duration-300">
                View Inventory
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
              Our reputation isn't just a number, it's a promise kept. Since restructuring our business in 2020, we have maintained a flawless 5-star rating on Google. We don't just sell cars; we curate a seamless, transparent experience that every single client has vetted with perfection.
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
            {cars.map((car, index) => (
              <motion.div 
                key={car._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger effect
                className="group cursor-pointer"
              >
                <Link href={`/inventory/${car.slug?.current}`}>
                  {/* Image Container - Sharp Edges */}
                  <div className="overflow-hidden mb-6 relative aspect-[4/3]">
                    {car.imageUrl ? (
                      <img 
                        src={car.imageUrl} 
                        alt={car.name} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">No Image</div>
                    )}
                    {/* Minimalist Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>
                  </div>

                  {/* Minimalist Details */}
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

      {/* --- TRUST BANNER --- */}
      <section className="bg-luxury-charcoal text-white py-20 border-t border-gray-800">
         <div className="max-w-7xl mx-auto px-6 text-center">
             <h2 className="text-3xl font-light mb-12">The Fresno Difference</h2>
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