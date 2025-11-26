import { client } from "@/sanity/client";
import InventoryList from "@/components/InventoryList";
import Navbar from "@/components/Navbar";

// Fetch query remains the same
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
      
      {/* Header Section - Matches Home Page Typography */}
      <div className="pt-32 pb-12 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
            <span className="text-luxury-silver uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              The Showroom
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                  Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Models.</span>
                </h1>
                <p className="text-gray-400 text-sm md:text-base max-w-lg font-light leading-relaxed mb-2">
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