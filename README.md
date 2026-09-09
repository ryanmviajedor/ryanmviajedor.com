# ryanmviajedor

Personal portfolio for Ryan Viajedor — Mobile Team Lead. Next.js 16 (App Router),
React 19, TypeScript, Tailwind v4, shadcn/ui.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Design system

The design originates from a Stitch export, which ships a **Tailwind v3 JS config**.
This project runs **Tailwind v4** (CSS-first), so the token set was translated into
`@theme` in `src/app/globals.css`. Class names are unchanged from the mockup —
`bg-surface-container-low`, `text-headline-lg`, `p-space-md`, `max-w-container-max`
all resolve as they did, including per-size line-height, tracking, and weight.

`globals.css` is the single source of truth for colour, spacing, radius, and type.
shadcn primitives are bridged onto those tokens (`--color-ring: amber-accent`, etc.)
rather than carrying a second palette, so every primitive inherits the design language.

Light-only by design: the export declared `darkMode: "class"` but shipped no dark
palette, so the flag was dropped rather than half-implemented.

## Content

Page copy lives in `src/content/*.ts` as typed data, not JSX. Adding a project means
appending to `projects.ts` — the alternating layout, badges, and metrics follow.

## Icons

Material Symbols, subsetted to the ~25 glyphs actually used. The `ICON_NAMES` union in
`src/components/site/icon.tsx` type-checks call sites *and* generates the `icon_names`
subset request in `layout.tsx`. Add an icon there and nowhere else.

## Contact

The Contact page lists direct lines only — email and phone, from `src/content/site.ts`.
There is no form and no mail provider: nothing to configure, no secrets, no server
runtime for contact. `src/content/contact.ts` splits those lines into
`primaryChannels` (email, phones) and `socialChannels` (LinkedIn, GitHub).

Phone numbers carry both a `display` and a `dial` form so the visible text stays
readable while `tel:` links stay valid.

## Checks

```bash
npx tsc --noEmit && npm run lint && npm run build
```
