# Alarynt Web (Internal Developer README)

Internal developer documentation for the `web/` app in this repository.

## Overview

This is the public-facing Alarynt web experience built with Next.js App Router. It includes:

- Marketing/landing content (`/(marketing)` route group)
- Contact/demo form with shared client + server validation (RHF + Zod)
- API route for contact submission (`POST /api/contact`) backed by Neon Postgres
- Feature-flagged legal behaviors

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- React Hook Form + Zod
- Neon Serverless Postgres (`@neondatabase/serverless`)

## Prerequisites

- Node.js 20+
- npm 10+

## Local Setup

From `web/`:

```bash
npm install
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` — start dev server
- `npm run lint` — run ESLint checks
- `npm run build` — build production bundle
- `npm run start` — run production server after build

## Environment Variables

| Variable | Type | Default | Purpose |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_ENABLE_LEGAL_LINKS` | `"true" | "false"` | `false` | Enables legal acknowledgement requirement and related UI copy/links in the contact flow. |
| `DATABASE_URL` | `string` | — (required) | Neon Postgres connection string for persisting contact form submissions. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | `string` | — (optional) | Cloudflare Turnstile site key. When set, renders a CAPTCHA widget on the contact form. |
| `TURNSTILE_SECRET_KEY` | `string` | — (optional) | Cloudflare Turnstile secret key for server-side token verification. |

When both Turnstile keys are omitted, CAPTCHA is disabled (useful for local dev).

Example `.env.local`:

```bash
NEXT_PUBLIC_ENABLE_LEGAL_LINKS=false
DATABASE_URL="postgresql://neondb_owner:PASSWORD@HOST/neondb?sslmode=require"
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAA...
TURNSTILE_SECRET_KEY=0x4AAAAAA...
```

## Project Structure

```text
src/
  app/
    (marketing)/page.tsx         # public customer-facing page composition
    api/contact/route.ts         # contact form POST endpoint
    globals.css                  # global design tokens + base styles
    layout.tsx                   # root metadata + font setup
  components/
    customer-facing/             # page sections + contact form UI
  lib/
    analytics.ts                 # event tracking wrapper
    config.ts                    # feature flags + route links
    contactForm.ts               # shared Zod schema + error mapping
    db.ts                        # Neon serverless database client
```

## Contact API Contract

Endpoint: `POST /api/contact`

### Request Body

```json
{
  "name": "Jane Doe",
  "email": "jane@company.com",
  "companyName": "Company Inc",
  "phoneNumber": "+1 555 123 4567",
  "message": "Optional message",
  "termsAccepted": false,
  "privacyAccepted": true,
  "turnstileToken": "0.AAAAAA..."
}
```

### Behavior

- Performs same-origin guard via `Origin` and `Host` headers
- Verifies Cloudflare Turnstile token (when configured) before processing
- Parses and validates body through shared schema in `src/lib/contactForm.ts`
- Persists valid submissions to the `contact_submissions` table in Neon
- Returns structured validation errors on bad payloads

### Success Response (`200`)

```json
{
  "ok": true,
  "submittedAt": "2026-03-13T00:00:00.000Z",
  "message": "Contact request accepted.",
  "received": {
    "name": "Jane Doe",
    "email": "jane@company.com"
  }
}
```

### Validation Error (`400`)

```json
{
  "error": "Validation failed.",
  "errors": {
    "email": "Enter a valid email address."
  }
}
```

## Quick Customization Guide

- Update page composition: `src/app/(marketing)/page.tsx`
- Update section copy/UI: `src/components/customer-facing/*`
- Update validation rules: `src/lib/contactForm.ts`
- Update runtime flags/links: `src/lib/config.ts`
- Update metadata/title/description/fonts: `src/app/layout.tsx`
- Update token/theme values: `src/app/globals.css`

## Verification Checklist

From `web/`:

```bash
npm run lint
npm run build
```

## Related Repository Docs

- Root architecture: [`../ARCHITECTURE.md`](../ARCHITECTURE.md)
- Database migrations: [`../database/README.md`](../database/README.md)
- Project concept docs: [`../neuroplast/project-concept/`](../neuroplast/project-concept/)
