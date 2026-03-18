# Alarynt Architecture

## Overview
This repository contains:
- Product and architecture documentation in `neuroplast/project-concept/`
- Working notes, plans, and execution learnings in `neuroplast/`
- A Next.js implementation in `web/`

## Product Surfaces
### Customer Facing Page (Public)
- Single-page marketing and lead capture experience
- Sections:
  - Mission Statement
  - Capabilities
  - Contact / Demo Form
  - Admin Login Entry

### Admin Login (Authenticated Entry)
- Existing customer authentication entry remains at `/admin/login`
- Admin panel module implementation is intentionally removed

## Technical Stack (Web App)
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS

## Route Model
- `src/app/(marketing)/page.tsx` for customer-facing entry experience
- `src/app/(admin)/admin/login/page.tsx` for admin authentication entry
- `src/app/api/contact/route.ts` for contact form submission endpoint
- `src/app/api/admin/login/route.ts` and `src/app/api/admin/logout/route.ts` for MVP admin session flow
- `src/proxy.ts` for admin route gate: only `/admin/login` is allowed

## Shared Conventions
- Reusable UI components under `src/components/`
- Utility modules under `src/lib/`
- Accessible markup and keyboard-first interactions
- Client + server validation for form submissions
- Token-driven theming in `web/src/app/globals.css` (current customer-facing baseline uses a premium dark visual style)

## Admin Login MVP Session Model
- Session cookie: `alarynt_admin_session` (httpOnly, sameSite=lax, secure in production)
- Login credentials sourced from server env vars:
  - `ADMIN_LOGIN_EMAIL` (default: `admin@alarynt.local`)
  - `ADMIN_LOGIN_PASSWORD` (default: `admin123`)
- Intended for MVP/local execution and planned replacement by full auth provider integration
- Post-login behavior currently shows an in-place success confirmation because panel routes are not implemented

## Documentation Source of Truth
- `neuroplast/project-concept/Customer Facing Page.md`
- `neuroplast/project-concept/Customer Facing Page Architecture.md`
- `neuroplast/project-concept/Front-End Architecture.md`
