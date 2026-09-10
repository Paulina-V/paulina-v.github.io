# paulina-v.github.io

My personal site — [paulina-v.github.io](https://paulina-v.github.io)

Built with Next.js 16 and Tailwind v4, statically exported and deployed to
GitHub Pages on every push to `main`.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # static export to out/
npm run lint
```

## How it's organized

Content is kept separate from the components that render it, so updating the
site means editing data rather than JSX.

```
src/
  content/        what the site says
    profile.ts      name, bio, contact links, portrait
    experience.ts   roles, ordered most recent first
    projects.ts     cards and long-form case studies
  components/     how it looks
  lib/types.ts    the shape of the content above
  app/            routes
```

Adding a project means appending an object to `projects.ts`. It appears in the
grid immediately, and its detail page is generated at `/projects/<slug>`.

## Notes on a few decisions

**Everything is a Server Component.** There is no `"use client"` in the
codebase. Hover states, the sticky header, and the "still cooking" badge are
CSS, so the site ships no client-side JavaScript for interactivity.

**Static export.** GitHub Pages serves static files only, so
`next.config.ts` sets `output: "export"` and disables the image optimizer —
which is why `public/portrait.jpg` is kept small rather than left at source
resolution. `public/.nojekyll` stops Pages from stripping the `_next`
directory.

**Color is assigned by contrast, not by preference.** Measured against white,
the deep iris (9.2:1) and olive (5.4:1) are the only palette colors that carry
text. The lilac and sage sit at roughly 3:1, so they are limited to decoration —
the timeline rail, bullet markers, and borders.

**Fonts are declared on `<html>`, not `<body>`,** because Tailwind's `@theme`
block resolves them at `:root`. Scoped to `<body>` they fall out of range and
every typeface silently falls back to system sans.

**Missing images degrade rather than break.** The portrait component checks for
the file at build time and renders a monogram if it isn't there.
