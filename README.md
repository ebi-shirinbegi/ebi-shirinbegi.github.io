# Mohammad Ebrahim Sharifi, portfolio (v2, Sevora-style)

Next.js 14 static export + Tailwind. Four pages: Home, About, Projects,
Contact. Ships complete HTML for every route.

## Deploy (replaces the live site)

From your existing local repo folder:

```bash
# copy the new files over the repo, replacing app/, components/, lib/, public/
git add -A
git commit -m "Redesign: Sevora-style multi-page site"
git push origin main
```

GitHub Actions rebuilds and deploys automatically. Nothing in the
workflow or config changed.

## Where things live

- All content: `lib/site.ts` (VERIFY marks = replace with real repo URLs)
- Shared layout pieces: `components/ui.tsx`
- Animated pieces (counters, NER demo, waveform, project filter):
  `components/client.tsx`
- Design tokens: `app/globals.css` and `tailwind.config.ts`

## Contact form, one-time activation

The form posts through formsubmit.co to your email. The FIRST submission
triggers a confirmation email to you; click the link once and the form is
live. Until then, the direct email link under the form works regardless.
If you ever change your address in `lib/site.ts`, you re-activate once.

## Notes

- No Article/blog page yet, deliberately: the nav stays honest until you
  have two posts worth reading. Adding it later is one folder.
- The word "Hazaragi" appears nowhere; announcing later is a 3-line edit
  in `lib/site.ts`.
- Fonts are free equivalents of the template's faces: Instrument Serif,
  Inter, JetBrains Mono.

## Later upgrades

1. Custom domain: add `CNAME` file to `public/`, update `site.url`.
2. CV download: drop `cv.pdf` into `public/`, add a nav link.
3. Article page when you have posts.
4. Persian interface toggle (RTL), the strongest design statement
   available for this subject.
