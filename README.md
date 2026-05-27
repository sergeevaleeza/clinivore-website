# Clinivore Marketing Website

Public marketing and developer credibility website for [Clinivore](https://clinivore.com) — a treatment continuity platform for psychiatric practices.

## What this repo is

This is the **public marketing site** for Clinivore, separate from the main application code. It serves two purposes:

1. **Practice Fusion API access application** — reviewed by PF developer relations at [/developer](https://clinivore.com/developer)
2. **Customer acquisition** — psychiatric practices finding Clinivore via search

The application code is at [github.com/sergeevaleeza/clinivore](https://github.com/sergeevaleeza/clinivore).

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** — utility-first styling
- **Lucide React** — icons
- **Framer Motion** — available for animations
- Static export (`output: 'export'`) — no server required

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage: hero, problem, feature highlights, protocols, pilot CTA |
| `/features` | Full feature breakdown (6 sections) |
| `/for-practices` | Buyer-focused: ROI, pilot program, who it's for |
| `/developer` | Practice Fusion integration, FHIR docs, data handling |
| `/about` | Company background |
| `/privacy` | Privacy Policy (required for PF API access) |
| `/terms` | Terms of Service (required for PF API access) |
| `/hipaa` | HIPAA compliance statement (required for PF API access) |
| `/contact` | Contact form (mailto-based, no backend) |

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Output goes to `out/` (static HTML/CSS/JS). Zero TypeScript errors required.

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Add New Project → Import from GitHub
3. Select this repo — framework auto-detected as Next.js
4. Deploy → get your `.vercel.app` URL
5. Add custom domain `clinivore.com` in Vercel project settings
6. Set DNS on Porkbun (A record + CNAME per Vercel instructions)

GitHub Actions auto-deploy on push to `main` via `.github/workflows/deploy.yml`.
Requires `VERCEL_TOKEN`, `ORG_ID`, and `PROJECT_ID` secrets in the repo.

## Domain Setup

Domain: `clinivore.com` via Porkbun (~$10/year).
SSL is automatic via Vercel (Let's Encrypt).

## Practice Fusion API Checklist

Before applying at the PF developer portal:

- Live website: `https://clinivore.com`
- Developer page: `https://clinivore.com/developer`
- Privacy Policy: `https://clinivore.com/privacy`
- Terms of Service: `https://clinivore.com/terms`
- HIPAA Statement: `https://clinivore.com/hipaa`
- Contact: `https://clinivore.com/contact`
- GitHub: `github.com/sergeevaleeza/clinivore`
