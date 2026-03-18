# Alarynt Web (Internal Developer README)

Internal developer documentation for the `web/` app in this repository.

## Overview

This is the public-facing Alarynt web experience built with Next.js App Router. It includes:

- Marketing/landing content (`/(marketing)` route group)
- Admin route group (`/(admin)`): login entry only
- Contact/demo form with shared client + server validation (RHF + Zod)
- API route for contact submission (`POST /api/contact`)
- Feature-flagged legal/admin behaviors

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- React Hook Form + Zod

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

The app currently uses these public flags:

| Variable | Type | Default | Purpose |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_ENABLE_LEGAL_LINKS` | `"true" | "false"` | `false` | Enables legal acknowledgement requirement and related UI copy/links in the contact flow. |
| `NEXT_PUBLIC_ENABLE_FORGOT_PASSWORD` | `"true" | "false"` | `false` | Controls forgot-password affordance in admin-login entry section. |

Admin MVP auth uses server-side credentials:

| Variable | Type | Default | Purpose |
| --- | --- | --- | --- |
| `ADMIN_LOGIN_EMAIL` | `string` | `admin@alarynt.local` | Admin login email for MVP session stub. |
| `ADMIN_LOGIN_PASSWORD` | `string` | `admin123` | Admin login password for MVP session stub. |

Example `.env.local`:

```bash
NEXT_PUBLIC_ENABLE_LEGAL_LINKS=true
NEXT_PUBLIC_ENABLE_FORGOT_PASSWORD=false
ADMIN_LOGIN_EMAIL=admin@alarynt.local
ADMIN_LOGIN_PASSWORD=admin123
```

Recommended setup:

```bash
cp .env.example .env.local
```

Then adjust values for your local environment as needed.

## MVP Admin Login Quick Test

1. Start the app:

```bash
npm run dev
```

2. Open `http://localhost:3000/admin/login`.
3. Sign in with the values from `.env.local` (`ADMIN_LOGIN_EMAIL` / `ADMIN_LOGIN_PASSWORD`).
4. Expected behavior:
   - Invalid credentials show an inline failure message.
   - Successful login keeps you on `/admin/login` and shows: "Login successful. The admin panel is currently unavailable."
   - Navigating to any `/admin/*` route other than `/admin/login` redirects to `/admin/login`.

## Project Structure

```text
src/
  app/
    (marketing)/page.tsx         # public customer-facing page composition
    (admin)/admin/login/page.tsx # admin login route
    api/contact/route.ts         # contact form POST endpoint
    api/admin/login/route.ts     # admin login + cookie session issue
    api/admin/logout/route.ts    # admin logout + cookie session clear
    globals.css                  # global design tokens + base styles
    layout.tsx                   # root metadata + font setup
  components/
    customer-facing/             # page sections + contact form UI
  lib/
    analytics.ts                 # event tracking wrapper
    config.ts                    # feature flags + route links
    contactForm.ts               # shared Zod schema + error mapping
    adminAuth.ts                 # MVP admin auth/session helpers
  proxy.ts                       # admin route gate (login route only)
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
  "privacyAccepted": true
}
```

### Behavior

- Performs same-origin guard via `Origin` and `Host` headers
- Parses and validates body through shared schema in `src/lib/contactForm.ts`
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
- Update admin login UX: `src/app/(admin)/admin/login/page.tsx`
- Update section copy/UI: `src/components/customer-facing/*`
- Update validation rules: `src/lib/contactForm.ts`
- Update admin session logic: `src/lib/adminAuth.ts`
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
- Project concept docs: [`../neuroplast/project-concept/`](../neuroplast/project-concept/)
