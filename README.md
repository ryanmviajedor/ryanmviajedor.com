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

## Contact form & email

`ContactForm` → `submitContact` server action → `sendMail()`. Validation is a single
zod schema (`src/lib/validation.ts`) shared by client and server, so the two cannot
drift. A honeypot field accepts bot submissions silently without sending.

Two flows fire per submission, with deliberately different failure semantics:

| Flow | Recipient | On failure |
|---|---|---|
| Notification (`src/emails/enquiry-notification.tsx`) | You. `Reply-To` is the enquirer, so Reply just works. | **Fails the submission** — this is the deliverable. |
| Acknowledgement (`src/emails/enquiry-acknowledgement.tsx`) | The enquirer. | Logged and swallowed — a lost courtesy email must never turn a received enquiry into a failed one. |

Email is optional. With `RESEND_API_KEY` unset, submissions are validated, accepted,
and logged to the server console — the form works locally with zero config. Set the
key and `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL` become required; `src/instrumentation.ts`
validates at server boot so a half-configured deploy fails immediately and visibly
rather than looking healthy until someone tries to contact you.

> **Test-sender caveat.** On Resend's `onboarding@resend.dev` sender, delivery is
> restricted to your own account email. The notification lands; the acknowledgement to
> a real enquirer is rejected. That is why the two flows fail differently. Verify a
> domain in Resend and update `CONTACT_FROM_EMAIL` to lift the restriction.

Email templates use React Email. The palette is mirrored in `src/emails/theme.ts` —
mail clients can't read CSS custom properties, so keep it in sync with `@theme`.

## Checks

```bash
npx tsc --noEmit && npm run lint && npm run build
```
