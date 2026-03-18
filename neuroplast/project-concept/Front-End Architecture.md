# Front-End Architecture (Customer Facing + Admin Login)
#project-concept

- [Customer Facing Page Architecture](Customer%20Facing%20Page%20Architecture.md)

## Scope
This architecture defines the shared front-end stack and implementation approach for:
- Public **Customer Facing Page**
- Authenticated **Admin Login Entry**

Both surfaces use the same core technology, conventions, and quality standards.

## Recommended Tech Stack
- **Framework:** Next.js (App Router)
- **UI Library:** React
- **Language:** TypeScript
- **Styling:** CSS Modules or Tailwind (token-driven, consistent across surfaces)
- **Forms:** React Hook Form + schema validation (e.g., Zod)
- **Testing:** Vitest/Jest + React Testing Library + Playwright
- **Analytics:** Event-based tracking layer (provider-agnostic wrapper)

## Application Structure

### Route Groups
- `/(marketing)` for customer-facing public content
- `/(admin)` for admin login entry

### Shared Layers
- `components/shared/*` for reusable UI primitives
- `lib/*` for utilities (validation, formatting, analytics, api clients)
- `styles/tokens/*` for design tokens (colors, spacing, typography, radius)
- `hooks/*` for reusable hooks (media queries, toasts, auth context helpers)

## Rendering Strategy
- Prefer **Server Components** by default for content-heavy pages.
- Use **Client Components** only where interactivity is required:
  - Contact/demo form
  - Admin login interactions
- Keep hydration boundaries small to reduce JS payload.

## Component Architecture

### Customer Facing Page
- `CustomerFacingPage`
  - `SiteHeader`
  - `HeroMissionSection`
  - `CapabilitiesSection`
  - `ContactDemoSection`
    - `ContactDemoForm`
    - `LegalLinks`
  - `AdminLoginSection`
  - `SiteFooter`

## State Management
- Use local component state for local UI concerns.
- Use React Context sparingly for cross-cutting concerns:
  - Authentication/session state
  - Global notifications/toasts
  - Feature flags
- Avoid heavy global state libraries until complexity requires them.

## Forms and Validation

### Contact/Demo Form (Customer Facing)
- Required: Name, Email, Company Name, Phone Number
- Optional: Message
- Validate on blur + submit
- Submission flow: `idle -> validating -> submitting -> success | error`
- Prevent duplicate submits while request is in flight

### Admin Auth Forms
- Secure validation and explicit error handling
- Generic error messages for auth failures (avoid sensitive leakage)
- Optional support for SSO if/when enabled

## Navigation and Routing Behavior
- Customer page uses section anchors with sticky top navigation.
- Admin route surface keeps `/admin/login` as entry and redirects other `/admin/*` paths to login.
- Preserve campaign attribution query params where relevant.

## Design System
- Unified design token system across customer and admin-login surfaces:
  - Color roles: primary, secondary, surface, text, border, error, success
  - Type scale: display, heading, body, caption
  - Spacing scale: xs/sm/md/lg/xl
  - Radius and elevation scales
- Shared component primitives (Button, Input, Card, Modal, Badge, Table).

## Accessibility Requirements
- Semantic landmarks (`header`, `main`, `section`, `footer`, `nav`)
- Proper labels and described-by wiring on all inputs
- Keyboard-first navigation and visible focus states
- ARIA live regions for async form status updates
- Color contrast compliant with WCAG AA

## Security Considerations (Frontend)
- HTTPS-only environments
- CSRF-safe form submissions
- No secrets in client bundle
- Escape/sanitize untrusted content rendered in UI
- Use secure, httpOnly cookie strategy for auth session where applicable

## Analytics and Observability
- Track key events:
  - CTA clicks
  - Form start/success/failure
  - Admin login click and outcome events
- Add client error monitoring with correlation IDs when available.

## Performance Targets
- LCP < 2.5s (mobile)
- CLS < 0.1
- INP < 200ms

### Optimization Tactics
- Server-render above-the-fold content
- Optimize and lazy-load media assets
- Code-split non-critical interactive modules
- Minimize third-party scripts and defer non-essential tags

## Testing Strategy
- **Unit tests:** validation logic, utilities, isolated components
- **Integration tests:** form flows, section interactions, admin login interactions
- **E2E tests:** customer lead submission, auth/login path
- **Accessibility checks:** automated a11y smoke tests in CI

## Environment Configuration
- Required env vars (example categories):
  - API base URLs
  - Form submission endpoint
  - Analytics configuration
  - Feature flags (legal links, SSO toggle, experimental UI)
- Enforce build-time validation for required env values.

## Deployment Model
- Single Next.js deployment serving both route groups, or split deployments if needed later.
- Start unified for simpler operations; split only if scaling/security boundaries require it.

## Architecture Decisions
1. Use one shared front-end stack for customer and admin-login surfaces.
2. Prefer server-first rendering with client interactivity only where needed.
3. Standardize on shared design system and testing strategy to reduce divergence.
4. Keep auth and form security controls consistent across all user entry points.
