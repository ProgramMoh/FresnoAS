"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar"; 
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-luxury-black min-h-screen text-white selection:bg-purple-500/30 overflow-x-hidden relative">
      <Navbar />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* --- LEFT COLUMN: INFO --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12 pt-4"
          >
            <div>
                {/* Crisp Accent Line */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-red-500"></div>
                    <span className="text-luxury-silver uppercase tracking-[0.3em] text-xs font-bold">
                        Concierge Service
                    </span>
                </div>
                
                <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-[0.9] text-white">
                  Get in <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">Touch.</span>
                </h1>
                
                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md mt-8 border-l border-white/10 pl-6">
                  Experience our premium service firsthand. Visit our showroom or schedule a private viewing of our exclusive inventory.
                </p>
            </div>

            {/* Clean, Aligned Contact Info with Icons */}
            <div className="space-y-8 pt-4">
                {[
                    { 
                        icon: MapPin,
                        title: "Showroom", 
                        line1: "3808 E Belmont Ave",
                        line2: "Fresno, CA 93702"
                    },
                    { 
                        icon: Phone,
                        title: "Direct Line", 
                        line1: "(559) 233-2001",
                        line2: "Mon-Fri, 9am-7pm"
                    },
                    { 
                        icon: Mail,
                        title: "Inquiries", 
                        line1: "sales@fresnoauto.com",
                        line2: "Response within 24h"
                    }
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-6 group cursor-default">
                        {/* Architectural Icon Box */}
                        <div className="w-12 h-12 flex items-center justify-center bg-[#111] border border-white/10 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-all duration-300">
                            <item.icon size={20} strokeWidth={1.5} />
                        </div>
                        
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-2">
                                {item.title} 
                            </h3>
                            <p className="text-gray-300 font-light text-xl leading-none mb-1">{item.line1}</p>
                            <p className="text-gray-500 text-sm">{item.line2}</p>
                        </div>
                    </div>
                ))}
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: STRUCTURED FORM --- */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Architectural Container: Defined Border & Solid Background */}
            <div className="bg-[#080808] border border-white/10 p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                
                {/* Subtle top border gradient (controlled color) */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                <h2 className="text-2xl font-light mb-10 text-white">Send a Message</h2>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Boxed Inputs for Depth */}
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">First Name</label>
                            <input 
                                type="text" 
                                className="w-full bg-[#111] border border-white/5 px-4 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-[#151515] transition-all duration-300 placeholder-white/10 text-sm" 
                                placeholder="JANE"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Last Name</label>
                            <input 
                                type="text" 
                                className="w-full bg-[#111] border border-white/5 px-4 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-[#151515] transition-all duration-300 placeholder-white/10 text-sm" 
                                placeholder="DOE"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email Address</label>
                        <input 
                            type="email" 
                            className="w-full bg-[#111] border border-white/5 px-4 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-[#151515] transition-all duration-300 placeholder-white/10 text-sm" 
                            placeholder="JANE@EXAMPLE.COM"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Message</label>
                        <textarea 
                            className="w-full bg-[#111] border border-white/5 px-4 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-[#151515] transition-all duration-300 placeholder-white/10 text-sm resize-none h-32" 
                            placeholder="I AM INTERESTED IN..."
                        ></textarea>
                    </div>

                    {/* Gradient Button: The distinct "pop" of expression */}
                    <button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold py-5 mt-4 flex items-center justify-center gap-3 hover:opacity-90 transition-opacity uppercase tracking-widest text-xs shadow-lg shadow-purple-900/20">
                        <span>Send Request</span>
                        <ArrowRight size={16} />
                    </button>
                </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}