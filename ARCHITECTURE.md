# Alarynt Architecture

## Overview
This repository contains:
- Product and architecture documentation in `neuroplast/project-concept/`
- Working notes, plans, and execution learnings in `neuroplast/`
- A Next.js implementation in `web/`
- Database migration tooling in `database/`

## Product Surfaces
### Customer Facing Page (Public)
- Single-page marketing and lead capture experience
- Sections:
  - Mission Statement
  - Capabilities
  - Contact / Demo Form

## Technical Stack (Web App)
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Neon Serverless Postgres (`@neondatabase/serverless`)

## Database
- Hosted on Neon (project: `Alarynt-Leads`, database: `neondb`)
- Neon Auth provisioned for the `neon_auth` schema
- Application tables live in the `public` schema
- Migration tooling in `database/` — see [`database/README.md`](database/README.md)

## Route Model
- `src/app/(marketing)/page.tsx` for customer-facing entry experience
- `src/app/api/contact/route.ts` for contact form submission endpoint

## Shared Conventions
- Reusable UI components under `src/components/`
- Utility modules under `src/lib/`
- Accessible markup and keyboard-first interactions
- Client + server validation for form submissions
- Token-driven theming in `web/src/app/globals.css` (current customer-facing baseline uses a premium dark visual style)

## Documentation Source of Truth
- `neuroplast/project-concept/Customer Facing Page.md`
- `neuroplast/project-concept/Customer Facing Page Architecture.md`
- `neuroplast/project-concept/Front-End Architecture.md`
