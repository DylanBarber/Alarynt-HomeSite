[Customer Facing Page Description](Customer%20Facing%20Page.md)
[Shared Front-End Architecture](Front-End%20Architecture.md)

## Purpose
The Customer Facing Page is the public entry point for prospective and existing customers.  
It should:
- Explain core capabilities clearly
- Capture qualified inbound leads via contact/demo form
- Route existing customers to the admin login flow

## Primary Audiences
- **Prospective customers** evaluating services and fit
- **Existing customers** who need to access the admin login entry

## Page Information Architecture
1. **Hero + Mission Statement**
   - Clear value proposition
   - Supporting mission statement copy
2. **Capabilities**
   - Data structuring/transformation service
   - Tenant-specific MCP server instantiation
   - Optional tenant AI setup
3. **Contact/Demo Form**
   - Inputs: Name, Email, Company Name, Phone Number, Message (optional)
   - Optional links/docs: Terms of Agreement, Privacy Statement
4. **Admin Login Entry**
    - Existing customer login entry point
    - Routes to `/admin/login` authentication entry

## Navigation Model
- Top-level sections (single-page anchors):
  - Mission Statement
  - Capabilities
  - Contact/Demo Form
  - Admin Login
- Sticky header recommended for quick navigation between sections

## Functional Requirements

### Admin Login
- Provide secure login access for existing customers
- On success, show clear confirmation state
- Display clear failure messages for invalid credentials
- Include “Forgot password” path (if supported in backend)

### Contact/Demo Form
- Required fields: Name, Email, Company Name, Phone Number
- Optional field: Message
- Client-side validation:
  - Required field checks
  - Valid email format
  - Basic phone format sanity check
- Submission behavior:
  - Show success confirmation state
  - Show recoverable error state with retry
- Compliance links:
  - Terms of Agreement (if enabled)
  - Privacy Statement (if enabled)

### Capabilities Section
- Present core offerings as concise benefit-oriented bullets
- Keep copy non-technical on first read; expandable detail optional
- Include CTA to submit form for demo/discovery

### Mission Statement
- Placeholder content currently exists; replace with finalized statement
- Keep copy short, credible, and outcome-focused

## Content Dependencies
- Final mission statement text
- Legal review/approval for Terms and Privacy links
- Final capabilities copy and positioning language
- Contact routing destination (email inbox, CRM, or ticketing)

## UX and Visual Behavior
- Responsive layout (mobile-first)
- Clear CTA hierarchy:
  - Primary: Request Demo / Contact
  - Secondary: Admin Login
- Accessibility:
  - Proper labels for all form fields
  - Keyboard navigability
  - Visible focus states
  - Sufficient color contrast

## Data and Integration Notes
- Contact form payload:
  - name
  - email
  - companyName
  - phoneNumber
  - message (optional)
  - submittedAt
  - consent flags (if legal docs enabled)
- Recommended integrations:
  - CRM or lead inbox
  - Notification channel for new submissions
  - Analytics events for CTA clicks and form completion

## Error and Edge Cases
- Empty/invalid form fields
- Network failure during form submission
- Duplicate submissions (accidental double-click)
- Admin login failure and lockout handling policy

## Security and Compliance
- HTTPS-only transport
- CSRF protection on form submission
- Rate limiting / bot mitigation (captcha or equivalent)
- Store only required PII and define retention policy
- Document lawful basis/consent if collecting personal data

## Relationship to Admin Surface
The customer-facing page is pre-auth entry.  
Authenticated users are routed to `/admin/login` for identity verification.
Admin module surfaces are currently not part of the implemented web scope.

## Open Questions
- What is the final mission statement copy?
- Are Terms and Privacy mandatory before form submission?
- What is the source of truth for lead management (CRM/tool)?
- Will admin login support SSO at launch?
