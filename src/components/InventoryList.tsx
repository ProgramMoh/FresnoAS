"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight, Gauge, Fuel } from "lucide-react";

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
      {/* --- MINIMALIST FILTER BAR --- */}
      <div className="mb-16 flex flex-col md:flex-row gap-8 md:items-end justify-between">
        
        {/* Search Input - Sharp & Underlined */}
        <div className="w-full md:w-1/3 group">
            <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block font-semibold">Search Collection</label>
            <div className="relative border-b border-white/20 group-focus-within:border-white transition-colors duration-300">
                <Search className="absolute left-0 top-3 text-gray-500 w-4 h-4" />
                <input
                    type="text"
                    placeholder="Make, Model, or ID..."
                    className="w-full bg-transparent pl-8 pr-4 py-3 outline-none text-white placeholder:text-gray-600 font-light"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>

        {/* Sort Dropdown - Minimalist */}
        <div className="w-full md:w-auto">
             <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block font-semibold">Sort By</label>
             <div className="relative border-b border-white/20 hover:border-white transition-colors duration-300 min-w-[200px]">
                <select
                    className="w-full py-3 bg-transparent border-none font-light text-white cursor-pointer focus:ring-0 outline-none appearance-none"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="newest" className="bg-black text-white">Newest Arrivals</option>
                    <option value="price-asc" className="bg-black text-white">Price: Low to High</option>
                    <option value="price-desc" className="bg-black text-white">Price: High to Low</option>
                </select>
                {/* Custom Chevron */}
                <div className="absolute right-0 top-4 pointer-events-none">
                    <div className="h-[2px] w-[2px] bg-white rounded-full"></div>
                </div>
             </div>
        </div>
      </div>

      {/* --- LUXURY GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <motion.div
              key={car._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group cursor-pointer"
            >
                <Link href={`/inventory/${car.slug?.current}`}>
                    {/* CARD CONTAINER */}
                    <div className="flex flex-col h-full">
                        
                        {/* Image - Sharp Edges, Zoom Effect */}
                        <div className="aspect-[4/3] relative overflow-hidden bg-zinc-900 mb-6 border-b border-white/10">
                            {car.imageUrl ? (
                            <img
                                src={car.imageUrl}
                                alt={car.name}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-1000 ease-in-out opacity-90 group-hover:opacity-100"
                            />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-zinc-700 font-light uppercase tracking-widest text-xs">Awaiting Image</div>
                            )}
                            
                            {/* Subtle Gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1">
                            {/* Title & Price Row */}
                            <div className="flex justify-between items-baseline mb-4">
                                <h3 className="text-xl font-bold text-white tracking-tight">{car.name}</h3>
                                <p className="text-lg font-light text-white">${car.price?.toLocaleString()}</p>
                            </div>
                            
                            <div className="h-px w-full bg-white/10 mb-5 group-hover:bg-white/30 transition-colors duration-500"></div>

                            {/* WIDGETS: Re-imagined as Technical Specs */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3 text-gray-400">
                                    <Gauge strokeWidth={1.5} className="w-4 h-4 text-gray-500" />
                                    <span className="text-xs uppercase tracking-widest">{car.mileage?.toLocaleString()} Mi</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <Fuel strokeWidth={1.5} className="w-4 h-4 text-gray-500" />
                                    <span className="text-xs uppercase tracking-widest">Gasoline</span>
                                </div>
                            </div>

                            {/* CTA Button - Matches Home Page Style */}
                            <div className="mt-auto">
                                <button className="w-full py-4 bg-transparent border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-32 text-center border-t border-white/5">
            <h3 className="text-2xl font-light text-white mb-2">No vehicles found.</h3>
            <p className="text-gray-500 font-light mb-8">Adjust your criteria to view more of the collection.</p>
            <button 
                onClick={() => { setSearchTerm(""); setSortBy("newest"); }} 
                className="text-white border-b border-white pb-1 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
                Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}