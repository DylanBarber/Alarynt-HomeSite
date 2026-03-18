# Alarynt Brand Usage Guide
#project-concept

## Brand Core
- **Brand name:** Alarynt
- **Primary tagline:** We turn your company's data chaos into an AI-ready system
- **Short tagline:** Actionable insights, powered by AI

## Logo System

### 1) Primary (Wordmark)
- Use for website header, proposals, and pitch decks.
- Preferred on light backgrounds.

### 2) Monochrome / White
- Use on dark surfaces, overlays, and footers.

### 3) Icon-only (“A” mark)
- Use for social avatars, app icon, compact UI spots.

## Color Palette

| Color | Hex | Usage |
|---|---|---|
| Deep Blue | `#0A2540` | Primary brand, headers, trust anchors |
| Teal Accent | `#00BFA6` | Highlights, focus states, insight accents |
| Gray Neutral | `#F5F5F5` | Backgrounds, slide canvases |
| Dark Gray | `#333333` | Body text, default copy |
| Bright Orange | `#FF6F3C` | CTA buttons and conversion moments |

## Typography
- **Headings:** Montserrat Bold (fallback: Poppins Bold)
- **Body:** Inter (fallback: Open Sans)
- **Data/KPI accents:** JetBrains Mono (fallback: Roboto Mono)

## Voice & Messaging

### Value Proposition
Alarynt turns messy, disconnected company data into structured insights and automated workflows, helping teams make decisions faster and operate more efficiently.

### Client-facing phrases
- Your data, organized and actionable
- From raw spreadsheets to real-time insights
- Automated workflows that actually save time
- AI is just the interface — we deliver the results

## Imagery Direction
- Abstract data visuals (nodes, charts, flow lines)
- Minimal workflow/dashboard illustrations
- Avoid sci-fi robot imagery; keep tone credible and approachable

## Practical Do / Don’t

### Do
- Keep layouts clean, high-contrast, and outcome-focused.
- Use Bright Orange sparingly for primary CTAs.
- Use Deep Blue for structure and trust cues.

### Don’t
- Overuse accent colors on long text blocks.
- Mix multiple visual metaphors in one section.
- Use novelty/futuristic robot visuals that reduce credibility.

## Current Web Implementation Notes
- Brand tokens live in: `web/src/app/globals.css`
- Font setup lives in: `web/src/app/layout.tsx`
- Logo component lives in: `web/src/components/customer-facing/AlaryntLogo.tsx`
