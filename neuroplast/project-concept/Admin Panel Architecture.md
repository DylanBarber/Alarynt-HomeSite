[Admin Panel Description](Admin%20Panel.md)
[Shared Front-End Architecture](Front-End%20Architecture.md)

## Implementation Status
Admin panel module routes are currently not implemented in `web/`.
Only the admin login entry (`/admin/login`) is active in the app.

## Purpose
The Admin Panel is the authenticated workspace for existing customer tenants.
It should:
- Provide a clear onboarding path for tenant setup
- Surface billing and usage transparency
- Offer quick access to key business resources
- Provide direct channels for support and service contact

## Primary Audiences
- **Tenant admins** managing setup and account operations
- **Customer operations users** monitoring usage and references

## Panel Information Architecture
1. **Onboarding**
   - Tenant login and initial setup checkpoints
   - Guided onboarding workflow (to be finalized)
2. **Billing/Usage**
   - Token/request usage visibility
   - Contract-based payment context and maintenance-fee notes
3. **Useful Links**
   - Business rules documentation
   - Provider-specific chatbot/resource links (if enabled)
4. **Service Contact**
   - Service phone
   - Service email
   - Service hours

## Navigation Model
- Left-side or top navigation for core modules:
  - Onboarding
  - Billing/Usage
  - Useful Links
  - Service Contact
- Deep-link support for each module for support and sharing
- Persistent tenant/account context in the header

## Functional Requirements

### Onboarding
- Support secure tenant login entry
- Provide clear setup steps and status indicators
- Allow resume-in-progress onboarding sessions
- Show actionable errors and next steps when setup is blocked

### Billing/Usage
- Display usage metrics (requests/tokens) by period
- Show plan/contract context at a summary level
- Handle empty-state when usage data is unavailable
- Optionally expose invoice/contact handoff if self-serve billing is not enabled

### Useful Links
- Surface curated links to tenant-relevant resources
- Support feature-flagged links by tenant/provider
- Validate external links and clearly indicate third-party destinations

### Service Contact
- Display support channels (phone/email/hours) prominently
- Offer copy-to-clipboard interactions for key contact details
- Provide fallback contact instructions for off-hours or regional routing

## Content Dependencies
- Final onboarding workflow definition and checkpoints
- Billing metric definitions and data source ownership
- Approved resource link catalog and tenant segmentation rules
- Final support operations policy (hours, escalation paths, SLAs)

## UX and Visual Behavior
- Responsive and accessible admin layout (desktop-first, mobile-capable)
- Clear visual hierarchy for critical actions and module status
- Consistent loading, empty, error, and success states across modules
- Accessibility:
  - Keyboard navigability
  - Visible focus states
  - Semantic headings and landmarks
  - WCAG AA contrast compliance

## Data and Integration Notes
- Typical admin payloads/views:
  - tenantId
  - userRole
  - onboardingStatus
  - usageSummary (period, tokens, requests)
  - supportContact configuration
- Recommended integrations:
  - Usage/billing service or reporting API
  - Documentation portal/CMS for useful links
  - Support tooling (ticketing/helpdesk/notification channels)

## Error and Edge Cases
- Authentication/session expiration during module navigation
- Missing or delayed billing/usage data
- Broken external links in Useful Links module
- Partial onboarding completion and abandoned sessions
- Regional support-hours mismatch for globally distributed tenants

## Security and Compliance
- Enforce authenticated access for all admin routes
- Role-aware authorization for sensitive module actions/data
- HTTPS-only transport and secure session handling
- Avoid exposing sensitive contract/account data to unauthorized roles
- Audit key admin actions and access events where required

## Relationship to Customer Facing Page
The customer-facing page is the pre-auth entry point.
Authenticated users transition into this Admin Panel architecture for:
- Onboarding
- Billing/Usage
- Useful Links
- Service Contact

## Open Questions
- What is the final onboarding step model and completion criteria?
- Which billing details are visible in-product vs contract/offline only?
- Should Useful Links be tenant-configurable by admin users?
- What are the target SLAs and escalation rules for service contact?
