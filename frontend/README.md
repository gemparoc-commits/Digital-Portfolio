# React Portfolio Template

A production-oriented, frontend-only portfolio starter built with React, TypeScript, Vite, and React Router.

## Included

- Responsive mobile-first layout
- Home, work index, project detail, about, and contact routes
- Typed portfolio data in `src/data/portfolio.ts`
- Reusable header, footer, buttons, section headings, and project cards
- Accessible mobile navigation and form labels
- Route-level error UI and scroll restoration
- Reduced-motion support
- No backend required

## Run locally

```bash
npm install
npm run dev
```

Validate the build with:

```bash
npm run typecheck
npm run build
```

## Customize

1. Replace the content in `src/data/portfolio.ts`.
2. Replace the Unsplash URLs with optimized local assets in `public/images`.
3. Add your resume as `public/resume.pdf`.
4. Update the title and description in `index.html`.
5. Connect the contact form submit handler in `src/pages/pages.tsx` to Formspree, Web3Forms, EmailJS, or your preferred form provider.
6. Replace placeholder social URLs and project URLs.

## Deployment

The app is a static Vite build. Deploy the `dist` directory to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host.

For SPA hosting, configure a rewrite so unknown routes serve `index.html`. On Netlify, add `public/_redirects` with:

```text
/* /index.html 200
```

## Suggested next production upgrades

- Add local WebP/AVIF images and explicit width/height attributes.
- Add a real form provider and success/error states.
- Add a sitemap, Open Graph image, favicon, and analytics.
- Add tests with Vitest and Testing Library.
- Add CI to run `npm run typecheck` and `npm run build` on every pull request.
