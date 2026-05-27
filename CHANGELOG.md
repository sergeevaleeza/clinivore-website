# Changelog

## [1.1.0] — 2026-05-26

Brand V3 implementation — Clinivore Official Brand Toolkit.

### Design System

- **`app/globals.css`**: Replaced sky-blue Tailwind v4 `@theme` block with full Clinivore brand token system. Named tokens: `brand-navy` (#0B1D3A), `brand-blue` (#2563EB), `brand-teal` (#10B5A6), `brand-green` (#10B981), `brand-gold` (#D4A373), `brand-offwhite` (#F8F5F0), `brand-midnight` (#112A4F), `brand-plum` (#7C3AED). Legacy numbered tokens (`brand-50` through `brand-900`) remapped to new palette so existing Tailwind classes in all page files continue to resolve correctly. Added CSS custom properties (`--navy`, `--teal`, `--offwhite`, etc.) for use via `var()` in inline styles. Added `@layer components` utilities: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-tertiary`, `.card`, `.status-pill`. Added `.nav-link` and `.nav-link-mobile` CSS classes (navy text, teal hover). Added website section helpers: `.section-light`, `.section-white`, `.section-dark`.
- **Typography**: `body` now uses `var(--font-inter)` and `background: var(--offwhite)` (warm #F8F5F0, replaces white). `h1/h2/h3` use `var(--font-sora)`. Inter and Sora loaded via `next/font/google`.

### Fonts

- **`app/layout.tsx`**: Added `Sora` alongside `Inter` from `next/font/google`. Both CSS variables (`--font-sora`, `--font-inter`) applied to `<html>`. Removed hardcoded `bg-white text-slate-900` from `<body>` (design tokens handle this). Updated metadata: title template (`%s | Clinivore`), new description, favicon icons pointing to `/icon.svg`, updated OpenGraph with new tagline "Close the loop. Change lives."

### Favicon

- **`public/icon.svg`**: Created brand icon — navy square (rx=8), white muted C-arc, teal arc segment, blue orbit dot at top, green dot at right, teal heart in center. Used as both browser favicon and Apple touch icon.

### Components

- **`components/Navbar.tsx`**: Rewrote logo to "Clini" (#0B1D3A navy) + "vore" (#10B5A6 teal) in Sora 700. Nav links use `.nav-link` class (navy → teal on hover). CTA button is teal (#10B5A6) with rounded-10px corners. Border and shadow use brand semantic values. Mobile drawer updated to match.
- **`components/Footer.tsx`**: Complete redesign. Deep navy background (#0B1D3A). Logo: "Clini" white + "vore" teal. Tagline: "Close the loop. Change lives." Footer nav links (white/50 → teal hover). Treatment types bar (Vivitrol, Invega, Ketamine, Spravato, Sublocade, Abilify Maintena, Aristada) in muted white. Bottom: copyright + HIPAA notice.

### Homepage

- **`app/page.tsx`**: Hero section — background changed from blue gradient to warm off-white (`var(--offwhite)`). Headline updated to "Close the loop. / Change lives." with "Change lives." in teal (#10B5A6). Eyebrow pill updated to teal style (DDF7F4 bg, 0E9F93 text). Description copy updated to coordinator-focused language. CTAs use `.btn-primary` (teal) and `.btn-secondary` (pale blue). Pilot CTA section at bottom: background changed from teal to deep navy, subtext changed from `text-brand-100` (low contrast) to `rgba(255,255,255,0.65)`, button uses teal text on white bg.

---

## [1.0.0] — 2026-05-26

Initial release of the Clinivore marketing and developer website.

### Project Setup

- Scaffolded with `create-next-app@latest` using Next.js 16, TypeScript, Tailwind CSS v4, App Router
- Installed `framer-motion` and `lucide-react`
- Configured `next.config.ts` with `output: 'export'`, `trailingSlash: true`, and `images.unoptimized: true` for static hosting on Vercel free tier
- Set up `vercel.json` with framework, build command, and rewrite rules
- Added GitHub Actions workflow (`.github/workflows/deploy.yml`) for auto-deploy to Vercel on push to `main`

### Design System

- Updated `app/globals.css` with Tailwind v4 `@theme` block defining `brand-50` through `brand-900` color tokens (sky blue palette, `#0ea5e9` primary)
- Set `--font-inter` as the default font via CSS variable
- Removed dark mode overrides — site uses consistent light/clinical color scheme

### Layout & Navigation

- **`app/layout.tsx`**: Root layout with Inter font (via `next/font/google`), site-wide metadata, sticky Navbar, and Footer. Renders all pages within a `flex-col` body.
- **`components/Navbar.tsx`** (client component): Sticky header with scroll-shadow, logo (`clini` in brand-500 + `vore` in slate-900), desktop nav links, "Request a Demo" CTA, and responsive mobile hamburger menu with slide-down drawer
- **`components/Footer.tsx`**: Footer with logo, tagline, all 7 nav links, copyright, and HIPAA/Pilot status note

### Pages

#### Homepage (`app/page.tsx`)
- Hero section with blue gradient, headline, subheadline, two CTA buttons, and an interactive styled dashboard mockup (stat cards + patient rows with status badges — no real screenshot)
- Problem section: 3-column cards (AlertTriangle / TrendingDown / CheckCircle icons) covering The Problem, The Cost, The Solution
- Feature highlights: 3 cards (Morning Dashboard, AI Outreach Drafts, Practice Fusion Ready)
- Treatment protocols grid: 8 protocol cards (Vivitrol, Sublocade, Invega Sustenna, Invega Trinza, Abilify Maintena, Aristada, Ketamine, Spravato) with interval and category
- Pilot CTA section: brand-600 background, headline, and "Apply for the Pilot" button

#### Features (`app/features/page.tsx`)
- Six alternating left/right feature sections with icons, taglines, body copy, and visual bullet lists
- Sections: Morning Dashboard, Treatment Protocols Engine, Outreach Queue, AI Documentation Assistant, Practice Fusion Integration, HIPAA-Aware Audit Trail
- CTA section at bottom linking to `/contact`

#### For Practices (`app/for-practices/page.tsx`)
- Hero with audience-focused headline
- 3-column "Who It's For" section: Psychiatrists, Office Coordinators, Practice Administrators
- Static ROI table: 4 rows covering appointment value, staff hours, Clinivore cost, and break-even calculation
- Pilot program section: two cards covering what's included and who qualifies, with CTA

#### Developer (`app/developer/page.tsx`)
- Practice Fusion integration section with Phase 1 (CSV) and Phase 2 (FHIR R4) cards
- FHIR metadata row (version, authorization method)
- Syntax-highlighted code block showing FHIR patient fetch example
- Data handling section: stored vs. never-stored fields, infrastructure metadata
- HIPAA & Compliance summary list
- Open Source section with GitHub link
- API access contact card with company/product/use-case details formatted for Practice Fusion reviewers

#### About (`app/about/page.tsx`)
- Three-paragraph company narrative
- Single team card (Office & Clinical Operations Lead)
- Pilot status callout with CTA to `/contact`

#### Privacy Policy (`app/privacy/page.tsx`)
- Full, readable Privacy Policy with 7 sections: Information We Collect, How We Use Information, HIPAA and PHI, AI and Third-Party Services, Data Retention, Security, Contact
- Covers BAA requirement, 42 CFR Part 2, ALLOW_PHI_TO_AI default, audit log retention, TLS/AES-256 specifics

#### Terms of Service (`app/terms/page.tsx`)
- 11-section Terms covering: Acceptance, Service Description, BAA Relationship, Authorized Use, Prohibited Uses, Data & Privacy, HIPAA Obligations, Limitation of Liability, Termination, Governing Law (California), Contact

#### HIPAA Statement (`app/hipaa/page.tsx`)
- Standalone compliance page with 5 sections: BAA, Technical Safeguards, Administrative Safeguards, 42 CFR Part 2, AI Features
- "Request a BAA" CTA linking to `/contact`

#### Contact (`app/contact/page.tsx`)
- Client component with form (name, email, org, reason dropdown, message)
- On submit: opens `mailto:hello@clinivore.com` with pre-filled subject and body — no backend required
- Post-submit confirmation state with fallback email link
- Three contact cards: Pilot Applications, Developer/API, General
- Direct email display

### Configuration Files

- **`vercel.json`**: Framework `nextjs`, build command, output directory, catch-all rewrite
- **`.github/workflows/deploy.yml`**: Node 20, `npm ci`, `npm run build`, Vercel deploy via `amondnet/vercel-action@v25` with `--prod` flag
- **`README.md`**: Full project documentation including what this repo is, tech stack, page listing, local dev instructions, Vercel deploy steps, domain setup, and Practice Fusion API checklist

### Build Result

- `npm run build` passes with 0 TypeScript errors
- All 12 routes (including `/_not-found`) render as static pages
- Output: static export via `out/` directory
