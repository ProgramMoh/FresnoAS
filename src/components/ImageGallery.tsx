"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ShieldCheck, Images } from "lucide-react";
import CarImageWithFrame from "@/components/CarImageWithFrame";

interface ImageGalleryProps {
  mainImage: string;
  gallery?: string[];
  carName: string;
}

export default function ImageGallery({ mainImage, gallery = [], carName }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  // Combine all images into one navigable array for the modal
  const allImages = [mainImage, ...gallery].filter(Boolean);

  // Settings for the on-page grid
  const MAX_VISIBLE_GALLERY = 4;
  const visibleGallery = gallery.slice(0, MAX_VISIBLE_GALLERY);
  const totalGalleryCount = gallery.length;
  const hiddenCount = totalGalleryCount - MAX_VISIBLE_GALLERY + 1; // +1 includes the one under the overlay

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % allImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + allImages.length) % allImages.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev! + 1) % allImages.length);
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev! - 1 + allImages.length) % allImages.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, allImages.length]);

  return (
    <>
      {/* --- ON-PAGE DISPLAY --- */}
      <div className="flex flex-col gap-12">
        
        {/* 1. Main Hero Image (Clickable) */}
        <div 
            onClick={() => openModal(0)}
            className="aspect-video relative border-b border-white/10 bg-[#111] group cursor-pointer"
        >
            <CarImageWithFrame 
                src={mainImage} 
                alt={carName}
                className="w-full h-full" 
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Badge */}
            <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-[#080808]/80 backdrop-blur-md border border-white/10 text-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 transform group-hover:scale-105 transition duration-500 ease-in-out shadow-xl">
                    <ShieldCheck size={14} className="text-purple-400" /> 
                    Certified Inspection
                    </div>
            </div>

            {/* Hover Hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                    <Images size={14} /> View Full Gallery
                </div>
            </div>
        </div>

        {/* 2. Gallery Grid (Limited to 4 items) */}
        {gallery && gallery.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
                {visibleGallery.map((image, index) => {
                    // Check if this is the 4th box AND we have more images than 4
                    const isLastBox = index === MAX_VISIBLE_GALLERY - 1;
                    const hasMoreImages = totalGalleryCount > MAX_VISIBLE_GALLERY;
                    const showOverlay = isLastBox && hasMoreImages;

                    return (
                        <div 
                            key={index} 
                            onClick={() => openModal(index + 1)} // +1 because 0 is mainImage
                            className="aspect-video relative overflow-hidden border border-white/5 bg-[#111] group cursor-pointer"
                        >
                            <img 
                                src={image} 
                                alt={`${carName} view ${index + 1}`} 
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />
                            
                            {/* Standard Darken Overlay on Hover */}
                            {!showOverlay && (
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            )}

                            {/* "View Rest" Overlay (4th Box) */}
                            {showOverlay && (
                                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white transition-colors group-hover:bg-black/70">
                                    <span className="text-2xl font-light mb-1">+{hiddenCount}</span>
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-300 group-hover:text-white">View Gallery</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        )}
      </div>

      {/* --- FULL SCREEN MODAL --- */}
      <AnimatePresence>
        {selectedIndex !== null && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            >
                {/* Close Button */}
                <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50">
                    <X size={32} />
                </button>

                {/* Main Image Container */}
                <div className="relative w-full max-w-7xl max-h-full flex items-center justify-center">
                    
                    {/* Navigation Left */}
                    <button 
                        onClick={prevImage}
                        className="absolute left-0 md:-left-12 p-4 text-white/50 hover:text-white transition-colors hover:scale-110 z-50 bg-black/20 md:bg-transparent rounded-full"
                    >
                        <ChevronLeft size={48} />
                    </button>

                    {/* THE RAW IMAGE (No Frame) */}
                    <motion.img 
                        key={selectedIndex}
                        initial={{ opacity: 0, scale: 1.15 }}
                        animate={{ opacity: 1, scale: 1.3 }}
                        transition={{ duration: 0.3 }}
                        src={allImages[selectedIndex]}
                        alt={`Gallery view ${selectedIndex}`}
                        className="max-w-full max-h-[85vh] object-contain shadow-2xl shadow-black"
                    />

                    {/* Navigation Right */}
                    <button 
                        onClick={nextImage}
                        className="absolute right-0 md:-right-12 p-4 text-white/50 hover:text-white transition-colors hover:scale-110 z-50 bg-black/20 md:bg-transparent rounded-full"
                    >
                        <ChevronRight size={48} />
                    </button>
                </div>

                {/* Counter */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-mono tracking-widest">
                    {selectedIndex + 1} / {allImages.length}
                </div>

            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}