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

    const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: 'Fresno Auto Sales',
    url: 'https://fresnoautosales.com',
    logo: 'https://fresnoautosales.com/FASlogo.png',
    image: 'https://fresnoautosales.com/dealershipHero.png', 
    description: 'Premier used car dealership in Fresno, CA. We offer inspected vehicles, transparent pricing, and financing for all credit types.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3808 E Belmont Ave',
      addressLocality: 'Fresno',
      addressRegion: 'CA',
      postalCode: '93702',
      addressCountry: 'US'
    },
    telephone: '+15592332001',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '18:00'
      }
    ],
    priceRange: '$-$$$',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.7503836', 
      longitude: '-119.7604842'
    }
  };

  // Pass the data down to the Client Component
    return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <HomeContent cars={cars} />
    </>
  );
}