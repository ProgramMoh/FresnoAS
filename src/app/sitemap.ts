import { MetadataRoute } from 'next'
import { client } from "@/sanity/client"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://fresnoautosales.com'

  // 1. Fetch all car slugs
  const cars = await client.fetch(`
    *[_type == "car"] {
      "slug": slug.current,
      _updatedAt
    }
  `)

  // 2. Map cars to sitemap entries
  const carUrls = cars.map((car: any) => ({
    url: `${baseUrl}/inventory/${car.slug}`,
    lastModified: car._updatedAt,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // 3. Add static pages
  const routes = [
    '',
    '/inventory',
    '/financing',
    '/about',
    '/contact',
    '/pre-qualify',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 1.0,
  }))

  return [...routes, ...carUrls]
}