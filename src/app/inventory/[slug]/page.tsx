import { client } from "@/sanity/client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, Check, Phone, ShieldCheck, Gauge, CreditCard, Calendar, ArrowRight } from "lucide-react";

// Define the Interface
interface CarDetails {
  name: string;
  price: number;
  mileage: number;
  description: string;
  imageUrl: string;
  features: string[];
  year?: string; 
  make?: string;
}

export const revalidate = 0; // Ensure fresh data

export default async function CarDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 1. AWAIT the params to get the slug (Next.js 15 requirement)
  const { slug } = await params; 

  const car: CarDetails = await client.fetch(`
    *[_type == "car" && slug.current == $slug][0] {
      name,
      price,
      mileage,
      description,
      "imageUrl": mainImage.asset->url,
      features,
      year,
      make
    }
  `, { slug });

  if (!car) return (
    <div className="bg-luxury-black min-h-screen text-white flex items-center justify-center relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
        </div>
        <div className="text-center relative z-10">
            <h1 className="text-4xl font-bold mb-6 tracking-tight">Vehicle Not Found</h1>
            <Link href="/inventory" className="text-white border-b border-white hover:opacity-70 pb-1 transition-opacity uppercase tracking-widest text-xs">Return to Collection</Link>
        </div>
    </div>
  );

  return (
    <div className="bg-luxury-black min-h-screen text-white selection:bg-purple-500/30 overflow-x-hidden relative">
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 pt-32">
        
        {/* Back Button */}
        <Link 
            href="/inventory" 
            className="inline-flex items-center text-gray-500 hover:text-white mb-10 text-[10px] uppercase font-bold tracking-[0.2em] transition-colors group"
        >
            <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
            Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* --- LEFT COLUMN: Image & Description (Span 7) --- */}
            <div className="lg:col-span-7 flex flex-col gap-12">
                
                {/* Image Container - Architectural & Dark */}
                <div className="aspect-[4/3] relative overflow-hidden border-b border-white/10 bg-[#111] group">
                    {car.imageUrl ? (
                        <img 
                            src={car.imageUrl} 
                            alt={car.name} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                        />
                    ) : (
                        <div className="w-full h-full bg-[#111] flex items-center justify-center text-gray-700 uppercase tracking-widest text-xs">No Image Available</div>
                    )}
                    
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge */}
                    <div className="absolute bottom-6 left-6">
                         <div className="bg-[#080808]/80 backdrop-blur-md border border-white/10 text-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                            <ShieldCheck size={14} className="text-purple-400" /> 
                            Certified Inspection
                         </div>
                    </div>
                </div>

                {/* Description - Architectural Box (Matches Contact Info area) */}
                <div className="bg-[#080808] p-8 border border-white/5 relative">
                    {/* Accent Line */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-8 bg-gradient-to-r from-purple-500 to-red-500"></div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                            Vehicle Overview
                        </h3>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed text-lg font-light">
                        {car.description || "This vehicle has been meticulously inspected and maintained. It meets our rigorous standards for quality, safety, and performance. Contact our team today to schedule a private viewing or test drive."}
                    </p>
                </div>
            </div>

            {/* --- RIGHT COLUMN: Specs & Actions (Span 5) --- */}
            <div className="lg:col-span-5">
                <div className="sticky top-28 bg-[#080808] border border-white/10 p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                    
                    {/* Gradient Top Border (Matches Contact Form) */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Title & Price */}
                    <div className="mb-10 border-b border-white/10 pb-8">
                        <span className="text-luxury-silver text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block text-gray-500">
                            {car.year ? `${car.year} Collection` : "Premium Inventory"}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-[0.95]">
                            {car.name}
                        </h1>
                        <div className="flex items-baseline gap-4 mt-6">
                            <span className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">${car.price?.toLocaleString()}</span>
                            <span className="px-2 py-1 bg-[#111] border border-white/5 text-[10px] uppercase tracking-widest text-gray-400 rounded-sm">Cash Price</span>
                        </div>
                    </div>

                    {/* Quick Specs Grid - Using #111 backgrounds for depth (Like Input fields) */}
                    <div className="grid grid-cols-2 gap-4 mb-10">
                        <div className="bg-[#111] border border-white/5 p-5 flex flex-col gap-2 transition-colors hover:border-white/20">
                            <div className="flex items-center gap-2 text-gray-500">
                                <Gauge size={14} />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Mileage</span>
                            </div>
                            <span className="text-lg font-light text-white">{car.mileage?.toLocaleString()} mi</span>
                        </div>
                        <div className="bg-[#111] border border-white/5 p-5 flex flex-col gap-2 transition-colors hover:border-white/20">
                            <div className="flex items-center gap-2 text-gray-500">
                                <Calendar size={14} />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Status</span>
                            </div>
                            <span className="text-lg font-light text-white flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Available
                            </span>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="mb-10">
                        <h4 className="font-bold mb-6 text-[10px] uppercase tracking-[0.2em] text-gray-500">Build Sheet Highlights</h4>
                        <ul className="space-y-4">
                            {car.features && car.features.length > 0 ? (
                                car.features.slice(0, 6).map((f, i) => (
                                    <li key={i} className="flex items-center gap-4 text-sm text-gray-300 font-light group/item cursor-default">
                                        <div className="w-1 h-1 bg-purple-500 rounded-full group-hover/item:scale-150 transition-transform"></div>
                                        {f}
                                    </li>
                                ))
                            ) : (
                                <li className="text-slate-500 italic text-sm">Premium features included.</li>
                            )}
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-4">
                        {/* Gradient Button - Matches Contact Page "Send Request" */}
                        <Link 
                            href="/contact"
                            className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-5 font-bold uppercase tracking-[0.2em] text-xs hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-3 shadow-lg shadow-purple-900/20"
                        >
                            Schedule Viewing <ArrowRight size={14} />
                        </Link>
                        
                        <a 
                            href="tel:+15592332001"
                            className="w-full bg-[#111] border border-white/10 text-white py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#161616] hover:border-white/20 transition-all text-center flex items-center justify-center gap-2"
                        >
                           <Phone size={14} /> Contact Dealer
                        </a>
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-8 pt-6 border-t border-white/5 flex justify-center">
                         <p className="text-[10px] text-gray-600 uppercase tracking-widest flex items-center gap-2">
                            <CreditCard size={12} /> Financing options available upon request
                         </p>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
}