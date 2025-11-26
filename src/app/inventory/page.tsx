import { client } from "@/sanity/client";
import InventoryList from "@/components/InventoryList";
import Navbar from "@/components/Navbar";

const ALL_CARS_QUERY = `*[_type == "car"] {
  _id,
  name,
  slug,
  price,
  mileage,
  "imageUrl": mainImage.asset->url
}`;

export const revalidate = 0; 

export default async function InventoryPage() {
  const cars = await client.fetch(ALL_CARS_QUERY);

  return (
    <div className="bg-luxury-black min-h-screen text-white selection:bg-white/30">
      <Navbar />
      
      {/* --- HEADER WITH BACKGROUND IMAGE --- */}
      <div className="relative pt-40 pb-20 px-6 overflow-hidden">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
            {/* Placeholder image that matches the prompt I gave you */}
            <img 
                src="/InventoryShoroom.png" 
                alt="Luxury Car Background" 
                className="w-full h-full object-cover opacity-50"
            />
            {/* The "Fade to Black" Overlay - Crucial for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-luxury-black"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto">
                          {/* Crisp Accent Line */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-red-500"></div>
                    <span className="text-luxury-silver uppercase tracking-[0.3em] text-xs font-semibold mb-4 block drop-shadow-md">
                      The Showroom
                    </span>
                </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
                  Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Models.</span>
                </h1>
                <p className="text-gray-200 text-sm md:text-base max-w-lg font-light leading-relaxed mb-2 drop-shadow-md">
                    Every vehicle is inspected for perfection. Experience the transparent pricing and premium quality of our curated collection.
                </p>
            </div>
        </div>
      </div>

      {/* Inventory Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <InventoryList cars={cars} />
      </div>
    </div>
  );
}