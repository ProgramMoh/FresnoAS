"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/client";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Search, DollarSign, Briefcase, User, ArrowRight, ShieldCheck } from "lucide-react";

interface Car {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export default function PreQualifyPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCarIds, setSelectedCarIds] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch cars for the selection list
  useEffect(() => {
    const query = `*[_type == "car"]{
      _id,
      name,
      price,
      "imageUrl": mainImage.asset->url
    }`;
    
    client.fetch(query).then((data) => {
      setCars(data);
      setLoading(false);
    });
  }, []);

  // Handle Car Selection (Max 5)
  const toggleCarSelection = (id: string) => {
    if (selectedCarIds.includes(id)) {
      setSelectedCarIds(prev => prev.filter(carId => carId !== id));
    } else {
      if (selectedCarIds.length < 5) {
        setSelectedCarIds(prev => [...prev, id]);
      }
    }
  };

  const filteredCars = cars.filter(car => 
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-luxury-black min-h-screen text-white selection:bg-purple-500/30 overflow-x-hidden relative">
      <Navbar />

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        
        {/* --- HEADER ANIMATION --- */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mb-16"
        >
            <div className="flex items-center gap-4 mb-6">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-px bg-gradient-to-r from-purple-500 to-red-500"
                ></motion.div>
                <span className="text-luxury-silver uppercase tracking-[0.3em] text-xs font-bold">
                    Financing
                </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[0.9]">
              Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">Pre-Qualified.</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed border-l border-white/10 pl-6">
              Complete this secure form to view your financing options. This will not impact your credit score.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* --- LEFT: FORM (Slides in from Left) --- */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="lg:col-span-7 space-y-8"
            >
                <div className="bg-[#080808] border border-white/10 p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                     {/* Gradient Top Border */}
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                     <h3 className="text-xl font-light text-white mb-8 flex items-center gap-2">
                        <User size={20} className="text-purple-500"/> Applicant Information
                     </h3>

                     <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">First Name</label>
                                <input type="text" className="w-full bg-[#111] border border-white/5 px-4 py-4 text-white focus:outline-none focus:border-purple-500/50 transition-all text-sm placeholder-white/10" placeholder="JANE" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Last Name</label>
                                <input type="text" className="w-full bg-[#111] border border-white/5 px-4 py-4 text-white focus:outline-none focus:border-purple-500/50 transition-all text-sm placeholder-white/10" placeholder="DOE" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email Address</label>
                            <input type="email" className="w-full bg-[#111] border border-white/5 px-4 py-4 text-white focus:outline-none focus:border-purple-500/50 transition-all text-sm placeholder-white/10" placeholder="JANE@EXAMPLE.COM" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Phone Number</label>
                            <input type="tel" className="w-full bg-[#111] border border-white/5 px-4 py-4 text-white focus:outline-none focus:border-purple-500/50 transition-all text-sm placeholder-white/10" placeholder="(555) 000-0000" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                                    <Briefcase size={12} /> Employment Status
                                </label>
                                <select className="w-full bg-[#111] border border-white/5 px-4 py-4 text-white focus:outline-none focus:border-purple-500/50 transition-all text-sm appearance-none cursor-pointer">
                                    <option>Employed</option>
                                    <option>Self-Employed</option>
                                    <option>Retired</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                                    <DollarSign size={12} /> Annual Income
                                </label>
                                <input type="number" className="w-full bg-[#111] border border-white/5 px-4 py-4 text-white focus:outline-none focus:border-purple-500/50 transition-all text-sm placeholder-white/10" placeholder="0.00" />
                            </div>
                        </div>
                     </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold py-6 rounded-sm flex items-center justify-center gap-3 hover:opacity-90 transition-opacity uppercase tracking-widest text-sm shadow-lg shadow-purple-900/20">
                    <span>Submit Application</span>
                    <ArrowRight size={16} />
                </button>
                
                <p className="text-center text-xs text-gray-600 flex items-center justify-center gap-2">
                    <ShieldCheck size={14} /> Your information is encrypted and secure.
                </p>
            </motion.div>

            {/* --- RIGHT: CAR SELECTOR (Slides in from Right) --- */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="lg:col-span-5"
            >
                <div className="bg-[#080808] border border-white/10 p-6 md:p-8 h-full flex flex-col relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 opacity-20"></div>

                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-white mb-2">Vehicles of Interest</h3>
                        <p className="text-gray-500 text-xs mb-4">Select the vehicles you are interested in (Max 5).</p>
                        
                        {/* Selected Counter */}
                        <div className="flex items-center justify-between bg-[#111] px-4 py-2 border border-white/5 mb-4">
                            <span className="text-[10px] uppercase tracking-widest text-gray-400">Selected</span>
                            <span className={`font-mono text-sm font-bold ${selectedCarIds.length === 5 ? 'text-red-500' : 'text-purple-400'}`}>
                                {selectedCarIds.length} / 5
                            </span>
                        </div>

                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-3 text-gray-600 w-4 h-4" />
                            <input 
                                type="text" 
                                placeholder="Filter vehicles..." 
                                className="w-full bg-[#111] border-b border-white/10 pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Scrollable Car List */}
                    <div className="flex-1 overflow-y-auto pr-2 space-y-3 max-h-[600px] custom-scrollbar">
                        {loading ? (
                            <p className="text-gray-500 text-sm text-center py-10">Loading inventory...</p>
                        ) : (
                            <div className="space-y-3">
                                <AnimatePresence>
                                    {filteredCars.map((car, index) => {
                                        const isSelected = selectedCarIds.includes(car._id);
                                        return (
                                            <motion.div 
                                                key={car._id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                                onClick={() => toggleCarSelection(car._id)}
                                                className={`
                                                    relative flex items-center gap-4 p-3 border cursor-pointer transition-all duration-300 group
                                                    ${isSelected 
                                                        ? 'bg-purple-900/10 border-purple-500/50' 
                                                        : 'bg-[#111] border-white/5 hover:border-white/20'
                                                    }
                                                `}
                                            >
                                                {/* Selection Indicator */}
                                                <div className={`
                                                    w-4 h-4 border flex items-center justify-center transition-colors
                                                    ${isSelected ? 'bg-purple-500 border-purple-500' : 'border-gray-600 group-hover:border-white'}
                                                `}>
                                                    {isSelected && <Check size={10} className="text-white" />}
                                                </div>

                                                {/* Image */}
                                                <div className="w-16 h-12 bg-black overflow-hidden relative border border-white/5">
                                                    {car.imageUrl && (
                                                        <img src={car.imageUrl} alt={car.name} className="w-full h-full object-cover opacity-80" />
                                                    )}
                                                </div>

                                                {/* Text */}
                                                <div>
                                                    <h4 className={`text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                                                        {car.name}
                                                    </h4>
                                                    <p className="text-xs text-gray-600">${car.price?.toLocaleString()}</p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>

                </div>
            </motion.div>

        </div>
      </div>
    </div>
  );
}