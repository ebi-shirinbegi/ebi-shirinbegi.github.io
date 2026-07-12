# Mohammad Ebrahim Sharifi — portfolio (v3)

Single-page portfolio. Next.js 14 static export + Tailwind. Dark,
typography-first design: fixed sidebar with name / nav / socials, scrolling
content column (About, Experience, Projects, How I work, Contact).

## Where things live

- **All content:** `lib/site.ts` (single source of truth; VERIFY marks =
  replace with real repo URLs)
- **The page:** `app/page.tsx`
- **Interactive bits** (scroll-aware nav, copy-email): `components/client.tsx`
- **Icons & small pieces:** `components/ui.tsx`
- **Design tokens:** `app/globals.css` + `tailwind.config.ts`
- Old routes (`/about`, `/projects`, `/contact`) redirect to the matching
  section on the home page.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to `main`; GitHub Actions builds the static export and deploys to
GitHub Pages automatically (`.github/workflows/deploy.yml`).

## Later upgrades

1. Custom domain: add `CNAME` file to `public/`, update `site.url`.
2. CV download: drop `cv.pdf` into `public/`, add a link in the sidebar.
3. Regenerate `public/og.png` to match the dark design.
4. Persian interface toggle (RTL).
