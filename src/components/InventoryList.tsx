"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, ArrowRight, Fuel, Gauge } from "lucide-react";

interface Car {
  _id: string;
  name: string;
  slug: { current: string };
  price: number;
  mileage: number;
  imageUrl: string;
}

export default function InventoryList({ cars }: { cars: Car[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const filteredCars = cars
    .filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0; 
    });

  return (
    <div>
      {/* --- FLOATING SEARCH BAR (Dark Mode) --- */}
      <div className="bg-slate-900/80 backdrop-blur-md p-2 rounded-2xl border border-slate-800 mb-12 flex flex-col md:flex-row gap-4 items-center max-w-4xl mx-auto shadow-2xl shadow-black/20">
        
        {/* Search Input */}
        <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
            <input
                type="text"
                placeholder="Search by make or model..."
                className="w-full bg-transparent pl-12 pr-4 py-3 rounded-xl outline-none text-white placeholder:text-slate-500 font-medium focus:bg-slate-800/50 transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-8 bg-slate-800"></div>

        {/* Sort Dropdown */}
        <div className="w-full md:w-auto px-4">
             <div className="flex items-center gap-2">
                <SlidersHorizontal className="text-purple-500 w-4 h-4" />
                <select
                    className="py-2 pr-8 bg-transparent border-none font-bold text-sm text-slate-300 cursor-pointer focus:ring-0 outline-none hover:text-white transition-colors"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="newest" className="bg-slate-900 text-white">Newest First</option>
                    <option value="price-asc" className="bg-slate-900 text-white">Price: Lowest</option>
                    <option value="price-desc" className="bg-slate-900 text-white">Price: Highest</option>
                </select>
             </div>
        </div>
      </div>

      {/* --- CINEMATIC CARDS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <motion.div
              key={car._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
                <Link href={`/inventory/${car.slug?.current}`}>
                    {/* CARD CONTAINER: Dark slate, subtle border */}
                    <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                        
                        {/* Image */}
                        <div className="aspect-[4/3] bg-slate-950 relative overflow-hidden">
                            {car.imageUrl ? (
                            <img
                                src={car.imageUrl}
                                alt={car.name}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                            />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-700">No Image</div>
                            )}
                            
                            {/* Cinematic Gradient Overlay (Bottom) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>

                            {/* Badge */}
                            <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur border border-slate-700 text-xs font-bold px-3 py-1 rounded-full text-white shadow-sm">
                                Stock Ready
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white leading-tight group-hover:text-purple-400 transition-colors">{car.name}</h3>
                                    <p className="text-xs text-slate-500 mt-1 font-mono uppercase tracking-wider">Ref: {car._id.slice(0,6)}</p>
                                </div>
                            </div>
                            
                            <div className="mb-6">
                                <p className="text-2xl font-light text-white">${car.price?.toLocaleString()}</p>
                            </div>

                            {/* Quick Specs Pill */}
                            <div className="flex gap-2 mb-6 mt-auto">
                                <div className="inline-flex items-center gap-1.5 bg-slate-800 border border-slate-700 px-3 py-2 rounded-lg text-xs font-medium text-slate-300">
                                    <Gauge className="w-3.5 h-3.5 text-purple-500" />
                                    {car.mileage?.toLocaleString()} mi
                                </div>
                                <div className="inline-flex items-center gap-1.5 bg-slate-800 border border-slate-700 px-3 py-2 rounded-lg text-xs font-medium text-slate-300">
                                    <Fuel className="w-3.5 h-3.5 text-pink-500" />
                                    Gas
                                </div>
                            </div>

                            <button className="w-full py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm flex items-center justify-center gap-2 group-hover:gap-3 transition-all relative overflow-hidden group/btn">
                                <span className="relative z-10">View Details</span>
                                <ArrowRight className="w-4 h-4 relative z-10" />
                                {/* Button Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                <span className="absolute inset-0 flex items-center justify-center gap-2 text-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 z-20">
                                    View Details <ArrowRight className="w-4 h-4" />
                                </span>
                            </button>
                        </div>
                    </div>
                </Link>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
             <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-800">
                <Search className="text-slate-500" />
             </div>
            <h3 className="text-xl font-bold text-white mb-2">No cars found</h3>
            <p className="text-slate-500 max-w-md mx-auto">We couldn't find any vehicles matching your search. Try adjusting your filters.</p>
            <button 
                onClick={() => { setSearchTerm(""); setSortBy("newest"); }} 
                className="mt-6 text-purple-400 font-bold hover:text-purple-300 transition-colors uppercase text-xs tracking-widest"
            >
                Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}