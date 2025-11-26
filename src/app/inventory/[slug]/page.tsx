import { client } from "@/sanity/client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, Check, Phone, ShieldCheck, Gauge, CreditCard, Calendar } from "lucide-react";

// Define the Interface
interface CarDetails {
  name: string;
  price: number;
  mileage: number;
  description: string;
  imageUrl: string;
  features: string[];
  year?: string; // Optional in case your schema doesn't have it yet
  make?: string;
}

// NOTE: In Next.js 15, params is a Promise, so we must type it as such
export default async function CarDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 1. AWAIT the params to get the slug
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
    <div className="bg-slate-950 min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Vehicle Not Found</h1>
            <Link href="/inventory" className="text-purple-400 hover:text-purple-300">Return to Inventory</Link>
        </div>
    </div>
  );

  return (
    <div className="bg-slate-950 min-h-screen text-white selection:bg-purple-500/30">
      <Navbar />

      {/* Ambient Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 pt-32">
        
        {/* Back Button */}
        <Link 
            href="/inventory" 
            className="inline-flex items-center text-slate-400 hover:text-white mb-8 uppercase text-xs font-bold tracking-widest transition-colors group"
        >
            <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
            Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: Image & Description (Span 7) */}
            <div className="lg:col-span-7 space-y-12">
                
                {/* Image Card */}
                <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/10 border border-slate-800 group">
                    {car.imageUrl ? (
                        <img 
                            src={car.imageUrl} 
                            alt={car.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                    ) : (
                        <div className="w-full h-full bg-slate-900 flex items-center justify-center text-slate-600">No Image</div>
                    )}
                    {/* Cinematic Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-6 left-6 flex gap-3">
                         <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <ShieldCheck size={14} className="text-purple-400" /> Inspected
                         </div>
                    </div>
                </div>

                {/* Description */}
                <div className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-red-500 rounded-full block"></span>
                        Vehicle Overview
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-lg font-light">
                        {car.description || "This vehicle has been meticulously inspected and maintained. It meets our rigorous standards for quality, safety, and performance. Contact our team today to schedule a private viewing or test drive."}
                    </p>
                </div>
            </div>

            {/* RIGHT COLUMN: Specs & Actions (Span 5) */}
            <div className="lg:col-span-5">
                <div className="sticky top-28 bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 shadow-xl">
                    
                    {/* Title & Price */}
                    <div className="mb-8 border-b border-slate-800 pb-8">
                        <span className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                            {car.year ? `${car.year} Model` : "Premium Inventory"}
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white leading-tight">
                            {car.name}
                        </h1>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-light text-white">${car.price?.toLocaleString()}</span>
                            <span className="text-slate-500 text-sm font-medium">Cash Price</span>
                        </div>
                    </div>

                    {/* Quick Specs Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                            <div className="flex items-center gap-2 text-slate-500 mb-1">
                                <Gauge size={16} />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Mileage</span>
                            </div>
                            <span className="text-white font-medium">{car.mileage?.toLocaleString()} mi</span>
                        </div>
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                            <div className="flex items-center gap-2 text-slate-500 mb-1">
                                <Calendar size={16} />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Availability</span>
                            </div>
                            <span className="text-emerald-400 font-medium">In Stock</span>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="mb-10">
                        <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-slate-500">Key Features</h4>
                        <ul className="space-y-3">
                            {car.features && car.features.length > 0 ? (
                                car.features.slice(0, 6).map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                        <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                                            <Check className="w-3 h-3 text-purple-400"/> 
                                        </div>
                                        {f}
                                    </li>
                                ))
                            ) : (
                                <li className="text-slate-500 italic text-sm">Premium features included.</li>
                            )}
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                        <Link 
                            href="/contact"
                            className="w-full bg-white text-slate-950 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-slate-200 transition-all text-center shadow-lg shadow-white/5"
                        >
                            Schedule Test Drive
                        </Link>
                        <a 
                            href="tel:+15592332001"
                            className="w-full border border-slate-700 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                        >
                           <Phone size={18} /> Contact Dealer
                        </a>
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-6 pt-6 border-t border-slate-800 flex justify-center">
                         <p className="text-xs text-slate-500 flex items-center gap-2">
                            <CreditCard size={14} /> Financing options available upon request.
                         </p>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
}