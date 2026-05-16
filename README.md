# Fresno Auto Sales — Web Platform

Production automotive platform built for a Fresno-based auto 
dealership. Live at [fresnoautosales.com](https://fresnoautosales.com).

---

## Overview

A high-performance dealership website with a dynamic inventory 
management system, vehicle detail pages, financing workflows,
and lead generation — built to handle real inventory at
production scale.

---

## Features

- **Dynamic inventory system** — real-time search and filter across 
  full vehicle catalog
- **Vehicle detail pages** — dynamic status indicators 
  (Available / Coming Soon / Sold), full specs, image galleries
- **Financing application flow** — integrated lead capture and 
  financing inquiry workflows
- **Cinematic UI** — Framer Motion animations optimized for Core 
  Web Vitals; no layout shift, no jank
- **SEO** — advanced metadata strategy, dynamic OG tags, 
  structured data
- **CMS-driven** — all inventory and content managed through 
  Sanity Studio; no code deploys needed for content updates

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| CMS | Sanity |
| Animations | Framer Motion |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Deployment | Vercel + Cloudflare CDN |

---

## Architecture Notes

- Sanity used as a headless CMS — content editors manage inventory 
  independently of deployments
- Framer Motion animations are server-component compatible and do 
  not block LCP
- Cloudflare handles CDN, DNS, and DDoS protection at the edge
