# Talentovix — corporate website

Marketing site for an international talent & consulting group (Accenture / EPAM style).

**Stack:** Next.js 16 (App Router, Cache Components, Server Actions) · React 19 · TypeScript · Tailwind CSS 4 · Motion · Lucide icons

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

> Scripts use `--webpack`: on this Windows machine (Node 22.11) the Turbopack native binary segfaults on compile.
> Try removing the flag after upgrading Node or Next.js.

## Structure

| Path | What |
| --- | --- |
| `src/lib/content.ts` | **All site copy** — services, industries, insights, stats, offices, jobs. Edit here. |
| `src/app/` | Pages: home, `/services` (+ 6 detail pages), `/industries`, `/insights` (+ articles), `/about`, `/careers`, `/contact` |
| `src/app/contact/actions.ts` | Contact form Server Action (validation + honeypot). **Delivery is a TODO** — hook up email/CRM. |
| `src/components/` | Header (mega menu + mobile drawer), footer, UI primitives, scroll-reveal & counter animations |
| `src/app/globals.css` | Design tokens (ink/brand/accent colors, fonts, utilities) |

SEO: per-page metadata, `sitemap.xml`, `robots.txt`, SVG favicon. All pages are statically prerendered.
