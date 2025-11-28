"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Wallet, Building2 } from "lucide-react";
import Link from "next/link";

export default function FinancingPage() {
  return (
    <div className="bg-luxury-black min-h-screen text-white selection:bg-purple-500/30 overflow-x-hidden relative">
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        
        {/* --- HEADER --- */}
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
                    Secure Lending
                </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[0.9]">
              Simplified <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">Financing.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed border-l border-white/10 pl-8 max-w-2xl">
              We have cultivated direct relationships with the nation's most trusted financial institutions to offer you competitive rates and a seamless buying experience.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* --- LEFT: The Process (Timeline) --- */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="lg:col-span-7 space-y-12"
            >
                <div className="bg-[#080808] border border-white/10 p-8 md:p-10 relative overflow-hidden group">
                    <h3 className="text-2xl font-light text-white mb-10 flex items-center gap-3">
                        <Wallet size={24} className="text-purple-500" />
                        The Buying Process
                    </h3>

                    {/* Timeline Steps */}
                    <div className="space-y-10 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10"></div>

                        {[
                            {
                                title: "1. Select & Qualify",
                                desc: "Choose your vehicle and complete our secure pre-qualification form. We submit this directly to our banking partners.",
                                active: true
                            },
                            {
                                title: "2. Bank Approval",
                                desc: "One of our partner banks (Chase, Wells Fargo, or Bank of America) approves the loan amount based on the vehicle value.",
                                active: false
                            },
                            {
                                title: "3. Direct Banking",
                                desc: "The bank handles the payment to us. Moving forward, your relationship and monthly payments are directly with the trusted bank.",
                                active: false
                            }
                        ].map((step, i) => (
                            <div key={i} className="relative flex gap-6 group/step">
                                <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-500 ${i === 0 ? 'bg-white text-black border-white' : 'bg-[#111] text-gray-500 border-white/10 group-hover/step:border-purple-500/50 group-hover/step:text-purple-400'}`}>
                                    <span className="font-bold text-sm">{i + 1}</span>
                                </div>
                                <div className="pt-1">
                                    <h4 className={`text-lg font-bold mb-2 ${i === 0 ? 'text-white' : 'text-gray-400 group-hover/step:text-white transition-colors'}`}>{step.title}</h4>
                                    <p className="text-gray-500 font-light leading-relaxed text-sm max-w-md">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ / Info Snippet */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-[#111] p-6 border border-white/5">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">Credit Score</h4>
                        <p className="text-gray-400 text-sm font-light">We work with a spectrum of credit profiles. Our partners offer plans for various financial situations.</p>
                    </div>
                    <div className="bg-[#111] p-6 border border-white/5">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">No Hidden Fees</h4>
                        <p className="text-gray-400 text-sm font-light">The rate you get from the bank is the rate you pay. We do not mark up interest rates.</p>
                    </div>
                </div>
            </motion.div>

            {/* --- RIGHT: Banking Partners --- */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="lg:col-span-5 space-y-6"
            >
                <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Trusted Partners</h3>
                    <div className="h-px flex-1 bg-white/10 ml-6"></div>
                </div>

                {/* Bank Cards */}
                {[
                    { 
                        name: "Chase Bank", 
                        tier: "Premier Lender",
                        image: "/chase-bg.png",
                        // Blue Theme
                        glow: "from-blue-600/0 via-blue-600/15 to-blue-600/0",
                        textHover: "group-hover:text-blue-400",
                        subtextHover: "group-hover:text-blue-300"
                    },
                    { 
                        name: "Wells Fargo", 
                        tier: "Auto Financial Services",
                        image: "/wellsfargo-bg.png",
                        // Bronze/Amber Theme
                        glow: "from-amber-600/0 via-amber-600/15 to-amber-600/0",
                        textHover: "group-hover:text-amber-500",
                        subtextHover: "group-hover:text-amber-300"
                    },
                    { 
                        name: "Bank of America", 
                        tier: "Trusted Banking Partner",
                        image: "/boa-bg.png",
                        // Red Theme
                        glow: "from-red-600/0 via-red-600/15 to-red-600/0",
                        textHover: "group-hover:text-red-500",
                        subtextHover: "group-hover:text-red-300"
                    },
                ].map((bank, i) => (
                    <div key={i} className="group relative bg-[#080808] border border-white/10 p-6 transition-all duration-500 hover:border-white/30 hover:-translate-y-1 overflow-hidden h-32 flex items-center">
                        
                        {/* --- BACKGROUND IMAGE LAYER --- */}
                        <div className="absolute inset-0 z-0">
                            {/* The Bank Image */}
                            <img 
                                src={bank.image} 
                                alt={bank.name} 
                                className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700 transform group-hover:scale-110" 
                            />
                            {/* Dark Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent"></div>
                        </div>

                        {/* Hover Gradient Glow (Custom Color per Bank) */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${bank.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none`}></div>
                        
                        {/* Content Layer */}
                        <div className="flex items-start justify-between relative z-20 w-full pl-2">
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 bg-[#111]/80 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 group-hover:border-white/40 transition-colors shadow-xl">
                                    <Building2 size={20} className={`text-gray-300 group-hover:text-white transition-colors`} />
                                </div>
                                <div>
                                    <h4 className={`text-xl font-bold text-white transition-colors shadow-black drop-shadow-md ${bank.textHover}`}>{bank.name}</h4>
                                    <span className={`text-[10px] uppercase tracking-widest text-gray-400 transition-colors ${bank.subtextHover}`}>{bank.tier}</span>
                                </div>
                            </div>
                            <CheckCircle size={20} className="text-emerald-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                        </div>
                    </div>
                ))}

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-purple-900/20 to-red-900/20 border border-white/10 p-8 mt-8 text-center backdrop-blur-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">Ready to drive?</h3>
                    <p className="text-gray-400 text-sm font-light mb-8 relative z-10">
                        See your rates instantly without affecting your credit score.
                    </p>
                    <Link 
                        href="/pre-qualify"
                        className="relative z-10 w-full bg-white text-black py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group/btn"
                    >
                        Get Pre-Qualified <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </motion.div>
        </div>
      </div>
    </div>
  );
}