import { client } from "@/sanity/client";
import InventoryList from "@/components/InventoryList";
import Navbar from "@/components/Navbar";

// We fetch a bit more data now to ensure we have what we need
const ALL_CARS_QUERY = `*[_type == "car"] {
  _id,
  name,
  slug,
  price,
  mileage,
  "imageUrl": mainImage.asset->url
}`;

export const revalidate = 0; // Ensure fresh data

export default async function InventoryPage() {
  const cars = await client.fetch(ALL_CARS_QUERY);

  return (
    <div className="bg-slate-950 min-h-screen text-white selection:bg-purple-500/30">
      <Navbar />

      {/* Ambient Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen opacity-50" />
      </div>
      
      {/* Header Section */}
      <div className="relative z-10 pt-32 pb-16 px-6 text-center border-b border-slate-900/50">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">Collection.</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Hand-picked for quality, inspected for peace of mind. Browse our exclusive inventory of premium vehicles.
            </p>
        </div>
      </div>

      {/* Inventory Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* NOTE: If your InventoryList component currently has white cards, 
           they will stand out sharply. We can update that component next 
           to have dark cards if you wish. 
        */}
        <InventoryList cars={cars} />
      </div>
    </div>
  );
}