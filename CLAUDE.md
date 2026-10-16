# Portfolio — Evandri Ridho Hasmono

Single-page personal portfolio. Goal: the site must reflect the CV accurately and present it better than a PDF can.

## Source of truth

- **`public/cv/cv_evandri.pdf` is the source of truth for all content** (summary, experience, projects, education, certifications, skills, dates, metrics). Read it before editing any copy.
- Current positioning (from the CV): **Associate Data Engineer** first — SQL/PostgreSQL/MySQL, Python, Looker Studio, internal data tools & APIs — with full-stack (PHP, Node.js, React) as the supporting story.
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
  app/            layout.tsx (fonts, metadata, MotionProvider), page.tsx (section order), globals.css
  components/
    sections/     one file per page section: Hero, About, Projects, Skills, Contact
    layout/       Navbar, Footer, MotionProvider
    ui/           shared primitives: Reveal (scroll-in animation), SectionHeading
  data/           ALL content, typed, plain .ts (no JSX)
                  profile.ts (name, summary, roles, socials, cvPath), experience.ts (experience,
                  education, certifications), projects.ts, skills.ts, navigation.ts
  hooks/          useTypewriter (hero role cycler)
  types/index.ts  every content type in one file; import via `@/types`
public/images/    project screenshots
public/cv/        downloadable CV
```

Rules:
- **Content lives in `src/data/`, never hardcoded in components.** Components only render data. Data files hold no JSX/className markup — icons are stored as `IconType` references and brand colors as hex strings; the component decides how to render them.
- New section → `components/sections/X.tsx` + `<section id="x">` + entry in `data/navigation.ts` + add to `page.tsx`.
- Wrap section content in `<Reveal>` and use `<SectionHeading>` instead of re-writing the motion/heading markup.
- `page.tsx`, `layout.tsx` and static sections (e.g. `About`) stay server components. Add `"use client"` only to files that use hooks or `motion.*` directly.
- `MotionProvider` sets `reducedMotion="user"`; don't bypass it with raw CSS keyframe animations.
- Path alias `@/*` → `src/*`.

## Visual language

Black background, `neutral-900/950` cards with `neutral-800/900` borders, `rounded-3xl`, white headings, `neutral-300/400` body text, blue-400/500/600 accent, subtle spring animations (`whileInView`, `viewport={{ once: true }}`). Keep new sections consistent with this unless doing a deliberate redesign. Use `next/image` for images. Copy is English, concise and concrete — CV numbers and outcomes over adjectives.

## Revamp direction (CV alignment)

Target section order: Hero → About → **Experience** → Projects → Skills → **Education & Certifications** → Contact.

- Data for Experience, Education and Certifications already exists in `src/data/experience.ts`; the sections that render them are not built yet.
- The hero badge/roles should lead with the data-engineering positioning.
- Tokopaedi has no screenshot yet (renders an initials placeholder); add `public/images/tokopaedi.png` when available.
- No Open Graph image yet (`app/opengraph-image.*`).

## Done means

1. `npm run lint` and `npm run build` pass.
2. The page was checked in the browser (desktop and ~375px mobile width) with no console errors and no horizontal scroll.
3. Every changed piece of copy was checked against the CV.
