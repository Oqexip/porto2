# Ilham Sikumbang — portfolio

A static professional portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Public pages are server-rendered and prerendered at build time.

The visual direction adapts [Izaditya](https://izaditya.vercel.app/) with Ilham's own portrait, content, and project evidence.

## Run locally

```bash
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`.

## Update content

- `content/site.ts`: name and professional links.
- `content/projects.ts`: manually selected projects, repository links, and case-study copy.
- `content/profile.ts`: skills, experience, achievements, and CV path.
- `public/ilham-sikumbang-cv.pdf`: the approved downloadable CV.
- `public/images/ilham-portrait.png`: Ilham's supplied portrait.

The LSP E-Ticketing project links directly to its repository until there is enough verified detail for a case study. Add project screenshots or hardware photos only when approved assets are available.

## Deploy and analytics

Vercel is the intended host. Set `NEXT_PUBLIC_SITE_URL` to the production domain if you use a custom domain; otherwise the site uses Vercel's production URL for canonical metadata and the sitemap.

The site is prepared for a private Umami Cloud dashboard. Create a website in Umami, keep its dashboard private, and set `NEXT_PUBLIC_UMAMI_WEBSITE_ID` in the Vercel project environment. The tracker then records page visits and the annotated LinkedIn, GitHub, and CV clicks. The value is a public website identifier, not a secret. No tracker loads when it is unset.

Run `npm run lint` and `npm run build` before deployment. Check the profile destinations, case-study repositories, CV download, mobile navigation, and Umami dashboard after deployment.
