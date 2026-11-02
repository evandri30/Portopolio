# Portfolio — Evandri Ridho Hasmono

Single-page personal portfolio. Goal: the site must reflect the CV accurately and present it better than a PDF can.

## Source of truth

- **`public/cv/CV_SWE_Evandri Ridho Hasmono.pdf` is the source of truth for all content** (summary, experience, projects, education, certifications, skills, dates, metrics). Read it before editing any copy.
- Positioning: **Software Engineer** (`profile.role`) — full-stack web applications across the TypeScript, Python, and PHP/Laravel stacks. "Associate Data Engineer" is a certification, not the headline role.
- Projects = personal/academic/bootcamp work only. Work done for an employer (e.g. SparePart Monitoring at Pelita Air, the MKRI chatbot) belongs in Experience, never in Projects.
- The thesis (DeteksiSIBI, `public/skripsi/skripsi.pdf`) appears twice on purpose: in `education[].thesis` (Education section) and in Projects, as on the CV.
- Tokopaedi stays in Projects at the owner's request even though it is not on the current CV. Don't remove it during a CV re-sync.
- If site copy and the CV disagree, the CV wins. Never invent metrics, dates, employers, or tech that are not in the CV. If something seems missing, ask instead of guessing.
- When the CV PDF is replaced, re-sync every file in `src/data/` against it.
- Do not put the phone number on the site unless explicitly asked. Email, LinkedIn and GitHub (in `src/data/profile.ts`) are fine.

## Stack

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript 5 (strict)
- Tailwind CSS v4 (CSS-first config in `src/app/globals.css` via `@theme`, no `tailwind.config.*`). Only default palette steps exist (50, 100–900, 950) — classes like `neutral-350` silently do nothing.
- framer-motion 14 for animation, lucide-react 1.x for UI icons, react-icons (`react-icons/si`, `react-icons/fa`) for tech/brand logos
- Node 24+ locally; deploy target is Vercel (static prerender)

When unsure about an API of these libraries, look it up via the context7 MCP instead of relying on memory — several had breaking majors recently (e.g. react-icons 5.7 renamed `SiCss3` → `SiCss`; lucide 1.x dropped brand icons, so brand logos come from react-icons).

## Commands

```bash
npm run dev     # http://localhost:3000
npm run lint
npm run build   # must pass before a change is considered done
```

`.claude/launch.json` has a `dev` config for the in-app browser preview.

## Structure

```
src/
  app/            layout.tsx (fonts, metadata, MotionProvider + SmoothScroll), page.tsx (section order),
                  globals.css (design tokens), opengraph-image.tsx
  components/
    sections/     one file per page section: Hero, About, Experience, Projects, Skills, Credentials, Contact
    layout/       Navbar, Footer, MotionProvider, SmoothScroll (Lenis)
    ui/           shared primitives: Reveal, SectionHeading, ScrollText, CountUp, Marquee
  data/           ALL content, typed, plain .ts (no JSX)
                  profile.ts (name, tagline, summary, hero query result, facts, socials, cvPath),
                  experience.ts (experience, education, certifications), projects.ts, skills.ts
                  (skill categories, soft skills, spoken languages), navigation.ts
  lib/motion.ts   shared easing (EASE_OUT)
  types/index.ts  every content type in one file; import via `@/types`
public/images/    project screenshots
public/cv/        downloadable CV
```

Section order: Hero → About → Experience → Projects → Skills → Education & Certifications (`#education`) → Contact.

Rules:
- **Content lives in `src/data/`, never hardcoded in components.** Components only render data. Data files hold no JSX/className markup — icons are stored as `IconType` references and brand colors as hex strings; the component decides how to render them.
- New section → `components/sections/X.tsx` + `<section id="x">` + entry in `data/navigation.ts` + add to `page.tsx`.
- Use `<SectionHeading>` (pass `rows` when the section is a list) and `<Reveal>` instead of re-writing heading/motion markup.
- `page.tsx`, `layout.tsx` and static sections (`About`, `Credentials`) stay server components. Add `"use client"` only to files that use hooks or `motion.*` directly.
- `MotionProvider` sets `reducedMotion="user"`; Lenis honors reduced motion itself. Don't add raw CSS keyframe animations. Never branch render output on `useReducedMotion()` (server and client differ → hydration error); act on it inside effects.
- `html`/`body` use `overflow-x: clip` so the pinned project gallery can bleed past the edges; don't change it to `hidden` (breaks `position: sticky`).
- Path alias `@/*` → `src/*`.

## Visual language — "Query Console"

The site speaks the language of a data engineer: the hero types a SQL query and "returns" the profile as a psql record.

- Colors (Tailwind tokens from `@theme` in `globals.css`): `ink` #0D1520 background, `panel` #142030 surfaces, `line` #22324A borders/rules, `text` #E4E9F0, `muted` #8B98AB, `amber` #F3B33D (the one accent: CTA, keywords, progress), `teal` #4FC1B0 (sparingly: "current"/success states).
- Type: Bricolage Grotesque for everything (display headings use `[font-stretch:88%]`, tracking no tighter than ~-0.02em or letters collide); JetBrains Mono only for real data bits (query, dates, row counts, tech tags, small labels).
- No ALL-CAPS eyebrows, no middle-dot meta strings, no 01/02 numbering. Console panels `rounded-xl` + 1px `line` border; buttons `rounded-full`.
- Motion: one orchestrated hero load; scroll-linked motion elsewhere (word-by-word About text, timeline rail, pinned horizontal projects ≥1024px); user-triggered micro-interactions. Easing `EASE_OUT` from `@/lib/motion`.
- Project cards are text-only panels (no screenshots — the demo servers are mostly shut down). Only add `link` for a demo that is actually reachable.

## Done means

1. `npm run lint` and `npm run build` pass.
2. The page was checked in the browser (desktop and ~375px mobile width) with no console errors and no horizontal scroll.
3. Every changed piece of copy was checked against the CV.
