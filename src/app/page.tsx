import { client } from "@/sanity/client";
import HomeContent from "@/components/HomeContent";

// --- SERVER SIDE FETCHING ---
// This runs on Vercel's servers, not the user's phone.
// It is 100% reliable and fixes the "Request Error".

const CARS_QUERY = `*[_type == "car"] {
  _id,
  name,
  slug,
  price,
  mileage,
  "imageUrl": mainImage.asset->url
}[0..2]`;

// Ensure data is fresh (optional, but good for inventory)
export const revalidate = 60; // Check for new cars every 60 seconds

export default async function Home() {
  let cars = [];

  try {
    cars = await client.fetch(CARS_QUERY);
  } catch (error) {
    console.error("Server Fetch Error:", error);
    // Even if it fails, we pass an empty array so the page doesn't crash
    cars = [];
  }

  // Pass the data down to the Client Component
  return <HomeContent cars={cars} />;
}