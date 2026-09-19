<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Porto Project Plan

This is the single planning and working agreement for the repository. The application is still an unmodified Create Next App starter. Porto is the static, English-language professional portfolio of **Ilham Sikumbang**, an Electrical Engineering student at **Universitas Gadjah Mada** and a developer working across **software and electronics**. It supports professional opportunities in full-stack development, software engineering, and embedded or IoT engineering without ranking one path above the others. It serves professional personal branding for recruiters and other professionals. Ilham will add selected projects, experience, achievements, a CV, portraits, and project assets later.

## 1. PRD — Product Requirements

### Product purpose and audience

Help recruiters and other professionals understand Ilham's background, his work across software and electronics, and his professional direction. Make it easy for them to review his code on GitHub and connect with him on LinkedIn. Prioritize a visitor who has only a few minutes and may arrive directly on a project page.

### Goals

1. Present Ilham's name, Electrical Engineering background, and cross-disciplinary software-and-electronics focus within the first screen.
2. Prove capability through real, concise project evidence rather than broad claims.
3. Make the next actions obvious: connect through LinkedIn as the primary action and review GitHub as the secondary action.
4. Deliver a fast, accessible experience on mobile and desktop.
5. Make content straightforward to update without unnecessary infrastructure.

### MVP scope

| Area | Required behavior |
| --- | --- |
| Home | Introduction with Ilham's name, Electrical Engineering background, software-and-electronics focus, a primary LinkedIn action, and a secondary GitHub action. Include clear paths to all required sections. |
| Required sections | Include About, selected Projects, Skills, Education, Experience, Achievements, and a CV download in the published portfolio. Ilham will supply the factual details and CV before release; do not fill sections with invented claims or empty cards. |
| Work | Show a small, manually curated set of projects selected by Ilham, not an automatic list of every GitHub repository. He will add the project details later. Each item states the problem, his role, the work, and the result where evidence exists. Give substantial projects their own shareable page; otherwise use a concise summary and a verified repository or demo link. |
| Navigation | Clear route or section labels, a way back to home, and an easy path to contact from every page. |
| Professional links | Provide visible, descriptive links to Ilham's GitHub (`https://github.com/Oqexip`) and LinkedIn (`https://www.linkedin.com/in/ilham-sikumbang/`). Check both destinations before release. |
| Visitor statistics | Provide Ilham with access to a private analytics dashboard showing visits, top pages or projects, referrers, and outbound LinkedIn and GitHub clicks. Choose the provider when hosting is decided. |
| Foundations | Responsive layout, semantic HTML, keyboard access, metadata, meaningful imagery, favicon, and social preview. |

### Out of scope for the first release

An admin dashboard, CMS, database, authentication, blog, testimonials, visitor accounts, elaborate animation, and a contact form or API are outside the initial scope. This is a static portfolio. Do not invent projects, employers, clients, achievements, statistics, or testimonials to fill gaps.

### Functional requirements

- A visitor can identify the owner and their work without signing in or waiting for client-side data loading.
- A visitor can open any published case study through a stable URL and return to the work index or home page.
- A visitor can reach the supplied LinkedIn and GitHub profiles from any public route.
- All visible links and downloadable materials lead to verified destinations.
- Content can be changed in typed, version-controlled files. Ilham will add and maintain his curated projects, experience, achievements, and CV details later; a CMS is not required.
- All requested sections must be represented in the final published site. Treat missing content as a prelaunch dependency rather than publishing fictional examples or blank showcase panels.
- Name specific tools, languages, platforms, and technical skills only when Ilham supplies them or they are evidenced by projects he chooses to publish. Do not imply mastery of every technology related to software or electronics.

### Technical and nonfunctional requirements

- Use the installed Next.js 16 App Router, React 19, strict TypeScript, and Tailwind CSS 4. Prefer static rendering and Server Components for public content.
- Support current mobile, tablet, and desktop browsers. Reflow without horizontal scrolling at a 320 px viewport.
- Target WCAG 2.2 AA for contrast, structure, focus, keyboard operation, and touch interaction.
- Optimize real images and fonts; avoid unnecessary JavaScript, large animation libraries, and layout shift.
- Provide page-specific titles and descriptions, Open Graph metadata, a sitemap, and robots rules before launch.
- Use analytics compatible with a static site. Prefer a privacy-conscious service, keep any needed credentials server-side or in the hosting environment, and avoid collecting sensitive visitor data. No secrets belong in source control.

### Success metrics and release gates

| Measure | Initial target or decision rule |
| --- | --- |
| Content completeness | About, Projects, Skills, Education, Experience, Achievements, and CV are present with real, owner-approved content and no filler text. |
| Professional paths | LinkedIn and GitHub are reachable from every public route; both URLs and all project destinations work in release QA. |
| Accessibility | No known WCAG 2.2 AA blockers; keyboard and screen-reader spot checks pass; automated checks report no serious or critical findings. |
| Performance | Aim for Core Web Vitals good thresholds: LCP <= 2.5 s, INP <= 200 ms, and CLS <= 0.1 at the 75th percentile once field data is available. |
| Reliability | `npm run lint` and `npm run build` pass before release; no broken internal links. |
| Visitor statistics | The private dashboard reports visits, top pages or projects, referrers, and LinkedIn and GitHub outbound clicks after launch. Record the first 30 days as a baseline, then agree on useful targets with Ilham. |

### Details still to confirm with Ilham

1. Which repositories will Ilham select as featured projects, and what was his role, the problem, the technical approach, and any verified result for each? Which technologies can those projects substantiate?
2. What real experience, achievements, skills, portrait, project media, and CV should be published when Ilham supplies them?
3. Which domain and static hosting provider will be used? Select a compatible private analytics service at the same time.

Current implementation decision: Vercel is the preferred host; the production domain remains to be confirmed. Umami Cloud is prepared for private visitor statistics and outbound-click events. Its website ID must be supplied in the Vercel environment before analytics can operate.

## 2. Design.md — Design Direction

### Identity and voice

Treat the portfolio as an edited record of Ilham's real work. The intended impression is simple, professional, precise, and credible. Lead with "Ilham Sikumbang" and his confirmed role; use a simple typographic wordmark until an existing identity is supplied. Write all public-facing copy in English, using plain, specific language about problems, decisions, contributions, and outcomes.

Proposed positioning line: **"Building software for the web and the physical world."** Use it as a concise statement of direction, not as proof of completed projects. A supporting introduction can identify Ilham as an Electrical Engineering student at Universitas Gadjah Mada working across software and electronics. Refine the wording once his selected work is available.

Ilham's visual reference pool is [Priyo Adi Wibowo](https://amblackpearl.github.io/portofolio/), [Haisyam](https://haisyam.dev/), [Rarizuki](https://rarizuki.my.id/), [Izaditya](https://izaditya.vercel.app/), [Sampm092](https://sampm092.github.io/), and [Ookamiiixd](https://ookamiiixd.dev/). Use these as directional references for clear navigation, personal introduction, skills, and selected work; do not copy layouts, imagery, wording, or branding. The color palette is a design choice, not an existing Ilham brand requirement.

### Anti AI slop principles

- Give real work the most visual space. Use authentic screenshots, diagrams, prototypes, or photography with context and attribution.
- Avoid generic gradient meshes, glowing blobs, glass panels, floating 3D shapes, decorative noise, stock AI imagery, and a grid of interchangeable cards.
- Avoid vague hero copy, fake numbers, logo clouds, invented testimonials, and visual effects that imply substance without showing it.
- Build hierarchy with typography, whitespace, image scale, crop, and thin rules. Use restrained corners and shadows only where they clarify depth or interaction.
- Keep motion brief and purposeful. No scroll hijacking, autoplay media, typewriter text, or essential information hidden behind animation.
- Let each case study reflect its own evidence; do not force every project into the same marketing template.

### Theme and color

Use a calm light theme by default and support the user's system dark preference. If a manual theme switch is added, make it accessible and persist the choice. Ilham has not specified brand colors, so these are **proposed tokens** to refine against real project images and check for contrast before implementation:

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| Canvas | `#F8F6F1` | `#131416` | Page background |
| Surface | `#FFFFFF` | `#1D1F23` | Media frame or raised surface |
| Ink | `#16181D` | `#F6F2EB` | Primary text |
| Muted | `#59616B` | `#B7B7B2` | Supporting text |
| Rule | `#D5D4CF` | `#393C42` | Dividers and borders |
| Accent | `#1748C9` | `#8FA8FF` | Links, selected state, and focus |
| Error | `#A3321D` | `#FF9A86` | Error feedback if needed |

Use accent sparingly. Verify every foreground and background pairing against the required contrast level; a token value alone does not guarantee accessible use.

### Typography

Use the installed Geist Sans for headings and body text. Reserve Geist Mono for dates, labels, metadata, and code. Do not introduce another font without a brand reason. The current starter registers Geist but sets `body` to Arial; resolve that inconsistency when building the interface.

- Display headings: bold enough to establish hierarchy, with readable tight tracking and responsive sizes.
- Body: 16–18 px with approximately 1.55–1.7 line height and a comfortable measure of about 60–70 characters.
- Metadata: 12–14 px, readable at normal zoom, with restrained letter spacing.
- Use a small, consistent type scale such as 12, 14, 16, 20, 28, 40, 56, and 72 px. Avoid all-caps paragraphs and justified text.

### Layout, spacing, and components

Use a 4 px spacing base with purposeful steps: 4, 8, 12, 16, 24, 32, 48, 72, 96, and 144 px. Use a maximum content width around 1200 px, generous section spacing, and 16–20 px mobile gutters. A 12-column desktop and 4-column mobile grid may guide alignment, but content takes priority over rigid symmetry. Keep related content close, use 1 px rules where useful, and prefer 0–8 px corner radii over pill-shaped controls everywhere.

The home page should move from introduction to selected work, skills, about, education, experience, achievements, CV, and a final LinkedIn action. All requested sections belong in the published site. Keep their content concise and evidence-based, with more weight given to selected work than long tool lists. On project pages, place the project context and actual artifacts before decorative presentation.

### Accessibility and inclusive interaction

- Meet WCAG 2.2 AA. Use semantic landmarks, one meaningful `h1` per page, logical headings, descriptive links, and a skip-to-content link.
- Provide visible focus styles and complete keyboard access. Do not make actions available only on hover.
- Aim for 44 × 44 px touch targets where practical, especially for navigation and primary controls.
- Pair color cues with text or another visible signal. Use helpful alt text for meaningful project images and empty alt text for decoration.
- Respect `prefers-reduced-motion`. Preserve meaning and usability when animation is disabled.
- Check layouts at 320 px and at increased text zoom without clipping or horizontal scrolling.

## 3. Architecture

### Current baseline

The repository has one route, `app/page.tsx`, and a root shell in `app/layout.tsx`. `app/globals.css` imports Tailwind CSS 4 and defines the starter tokens. The package provides Next.js 16.3.5, React 19.2.8, strict TypeScript, ESLint, and the `@/*` path alias. There is no product data, backend, CMS, analytics, test suite, or deployment configuration yet.

### Principles and proposed structure

- Render public content on the server or statically. Use Client Components only for confirmed browser interaction.
- Keep content typed and separate from presentation so updates do not require editing layout code.
- Add routes and infrastructure only when actual content or workflows need them.
- Give each published page its own usable title, description, and shareable URL.

```text
app/
  layout.tsx                Root document, fonts, and shared metadata
  page.tsx                  Home page composition
  globals.css               Tailwind import, semantic tokens, base styles
  work/[slug]/page.tsx      Add when substantive case studies exist
  sitemap.ts                Add for finalized public routes
  robots.ts                 Add before launch
components/
  layout/                   Header, navigation, footer, container
  sections/                 Home and case-study sections
  ui/                       Small reusable controls and display primitives
content/
  site.ts                   Identity, contact, and social destinations
  projects.ts               Manually selected, verified project data
  profile.ts                About, skills, education, experience, achievements
types/
  content.ts                Shared content contracts
public/
  images/                   Portrait and intentional project assets
  ilham-sikumbang-cv.pdf    Add only when Ilham supplies the approved CV
```

The proposed visitor flow is: request -> App Router -> root layout -> server-rendered route -> typed content -> section components -> HTML response. Small client islands may handle a mobile menu, theme control, or other confirmed interactions. Keep page files focused on composition rather than storing all copy and styling in one component.

### Content, contact, and assets

Version-controlled TypeScript content is sufficient for this static site. Use `https://www.linkedin.com/in/ilham-sikumbang/` as the primary professional action and `https://github.com/Oqexip` as the secondary action. Keep project selection and profile content easy for Ilham to edit later; do not automatically present all repositories as featured work. Do not add a contact backend without a new requirement. Use `next/image` with accurate image dimensions and meaningful alt text for project media. Remove the default Next.js and Vercel imagery once it is no longer referenced.

### Visitor statistics

The site remains static while a compatible analytics service measures visits. Choose the service when Ilham selects hosting and a domain; configure a private dashboard he can access. Track aggregate visits, top pages and featured projects, referrers where available, and outbound clicks to LinkedIn and GitHub. Do not display a public visitor counter unless Ilham later requests one. Disclose analytics as required by the selected service and deployment jurisdiction, and avoid collecting personally identifying visitor data. Do not build a custom analytics database for the MVP.

### Delivery and quality

Replace starter metadata and favicon before launch. Add Open Graph imagery, sitemap, and robots handling when the routes and domain are known. Choose the actual static hosting provider with Ilham and confirm its compatibility with the analytics service. Do not configure static export before checking the chosen host and feature requirements. Run lint and build before release, then inspect narrow mobile, tablet, desktop, keyboard navigation, reduced motion, and image loading on a slower connection. Confirm every required section has approved content before publishing.

## 4. Rules — Working Agreement

1. Preserve the `nextjs-agent-rules` block at the top of this file. Before changing Next.js code, read the relevant guide in the installed `node_modules/next/dist/docs/`; this project may differ from familiar Next.js versions.
2. Follow the confirmed product requirements and owner-provided facts over provisional assumptions in this document. Update this plan when a decision changes.
3. Stay within the installed App Router, React, strict TypeScript, and Tailwind CSS 4 stack unless a clear requirement justifies an addition. Do not add an obsolete Tailwind configuration or a legacy Pages Router.
4. Default to Server Components. Add `"use client"` only at an interaction boundary that needs browser APIs, event handlers, or client state.
5. Keep route files focused on composition, content in typed modules, shared layout in `components/layout`, page sections in `components/sections`, and small primitives in `components/ui` when those directories become useful.
6. Define semantic color and typography tokens in global CSS. Reuse them consistently. Ensure the selected `next/font` font is actually applied to body text.
7. Use real, owner-approved content. Mark missing facts as pending during development; never fabricate work, metrics, clients, links, or personal details. Publish all requested sections only with approved content.
8. Use semantic HTML, keyboard-friendly controls, visible focus states, useful alt text, good contrast, and reduced-motion support as implementation requirements.
9. Prefer platform features and lightweight CSS over dependencies, global state, or client-side fetching for static content.
10. Keep secrets out of source control. Validate any future user input on the server before forwarding it to an external service.
11. Before calling implementation complete, run `npm run lint` and `npm run build`, then manually inspect key viewport sizes, all required sections, the CV download, the LinkedIn and GitHub paths, and the private visitor statistics dashboard.
12. Preserve unrelated working-tree changes. Keep edits scoped to the requested work and explain any remaining assumptions or limitations in the handoff.
