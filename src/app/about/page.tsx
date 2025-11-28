"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Wrench, HeartHandshake, ArrowRight } from "lucide-react";
import Link from "next/link";
// Ensure these images exist in your public folder, or remove the import if using string paths directly
// import heroimage from "../../../public/dealershipHero.png"; 

export default function AboutPage() {
  return (
    <div className="bg-luxury-black min-h-screen text-white selection:bg-purple-500/30 overflow-x-hidden relative">
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        
        {/* --- HEADER ANIMATION (Fade Up) --- */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mb-24"
        >
            <div className="flex items-center gap-4 mb-6">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="h-px bg-gradient-to-r from-purple-500 to-red-500"
                ></motion.div>
                <span className="text-luxury-silver uppercase tracking-[0.3em] text-xs font-bold">
                    The Fresno Standard
                </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[0.9]">
              Value without <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">Compromise.</span>
            </h1>
        </motion.div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* LEFT: The Narrative (Slides from Left) */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="lg:col-span-7 space-y-12"
            >
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed border-l border-white/10 pl-8 max-w-2xl">
              We believe that reliability shouldn't be a luxury. In the heart of Fresno, we are raising the bar for the everyday vehicle, ensuring that "affordable" never means "neglected."
                </p>
                {/* Image 1 */}
                <div className="aspect-video relative overflow-hidden border border-white/10 bg-[#111] group">
                    <img 
                        src="/dealershipHero.png" 
                        alt="Fresno Dealership Lot" 
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
                </div>

                <div className="prose prose-invert max-w-none">
                    <h3 className="text-2xl font-light text-white mb-6">Respect for Your Dollar</h3>
                    <p className="text-gray-400 font-light leading-loose mb-6">
                        Fresno is a city built on hard work. We understand that for many of our neighbors, a vehicle isn't just a toy—it's a lifeline to jobs, schools, and family. That is why we specialize in finding high-quality, budget-friendly vehicles that have plenty of life left in them.
                    </p>
                    <p className="text-gray-400 font-light leading-loose">
                        We reject the idea that buying a lower-priced car means you have to deal with shady tactics or skipped inspections. Whether you are looking for a reliable daily commuter or a pristine newer model, our process remains the same: thorough checks, honest history, and respectful service.
                    </p>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10">
                    {[
                        { label: "Fresno Based", value: "100%" },
                        { label: "Inspected", value: "100%" },
                        { label: "Satisfaction", value: "100%" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-[#080808] p-6 text-center group hover:bg-[#111] transition-colors">
                            <h4 className="text-3xl font-bold text-white mb-2">{stat.value}</h4>
                            <span className="text-[9.5px] uppercase tracking-[0.2em] text-gray-500 group-hover:text-purple-400 transition-colors">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* RIGHT: Values & Philosophy (Slides from Right) */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="lg:col-span-5 space-y-8"
            >
                {/* Architectural Card */}
                <div className="bg-[#080808] border border-white/10 p-8 shadow-2xl relative overflow-hidden group">
                    {/* Gradient Top Border */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-widest">Our Promise</h3>

                    <div className="space-y-6">
                        {[
                            { 
                                icon: ShieldCheck, 
                                title: "Safety First", 
                                desc: "We don't sell cars we wouldn't put our own families in. Every car is road-tested." 
                            },
                            { 
                                icon: HeartHandshake, 
                                title: "Dignified Service", 
                                desc: "No pressure tactics. We treat every budget with the same level of respect." 
                            },
                            { 
                                icon: Wrench, 
                                title: "Mechanical Integrity", 
                                desc: "We check the engine, transmission, and brakes so you can drive with peace of mind." 
                            },
                            { 
                                icon: Users, 
                                title: "Community Focused", 
                                desc: "We are proud to serve Fresno and the Central Valley with honest transportation." 
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5 group/item">
                                <div className="mt-1">
                                    <div className="w-10 h-10 bg-[#111] border border-white/10 flex items-center justify-center group-hover/item:border-purple-500/50 transition-colors">
                                        <item.icon size={18} className="text-gray-500 group-hover/item:text-white transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{item.title}</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vertical Image */}
                <div className="aspect-[3/4] relative overflow-hidden border border-white/10 bg-[#111] group">
                    <img 
                        src="/mechanicHero.png" 
                        alt="Detailed Inspection" 
                        className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-8 left-8 right-8">
                        <Link href="/financing" className="group/btn flex items-center gap-4">
                            <span className="h-px flex-1 bg-white/20 group-hover/btn:bg-white transition-colors"></span>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">See Financing Options</span>
                            <ArrowRight size={16} className="text-white group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

            </motion.div>
        </div>
      </div>
    </div>
  );
}