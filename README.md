# Smolak Industries

A responsive one-page holding-company website. Plain HTML, CSS, and JavaScript, with no runtime dependencies, package installation, external fonts, trackers, or build step.

## Deploy on Vercel

1. Import `securetoolcompany/smolakindustries` into Vercel.
2. Choose Framework Preset: **Other**.
3. Leave the build command empty; use the repository root as the output directory (`.`).
4. Deploy. Add the company domain in the project's Domains settings when ready.

`vercel.json` supplies the static output settings and response headers. This repository does not configure your Vercel account or DNS automatically.

## Preview locally

From the repository directory, run `python3 -m http.server 3000`, then open http://localhost:3000. Use an HTTP server rather than opening index.html directly because assets use root-relative paths.

## Edit content

Most copy lives in `content.js`:

- `hero`, `about`: introduction and company overview.
- `companies`: private portfolio cards. Duplicate an object to add a business. Set `url: null` when there is no website.
- `blockchain`: blockchain investment cards.
- `services`: consulting service labels.
- `previousEngagements`: archived engagements, hidden by default. Verify names and attribution before setting `showPreviousEngagements: true`.
- `articles`: thought-leadership cards. Two unresolved destinations are retained but hidden.
- `leadership`, `contactUrl`: biography and LinkedIn links.

Set `enabled: false` to hide a company, network, or article without deleting it. Array order controls display order. Keep URLs as complete HTTPS addresses. Text is inserted with DOM textContent rather than interpreted as HTML.

Section headings, consulting introduction, contact copy, metadata, navigation, and footer are in `index.html`. Colors, spacing, layout, and responsive breakpoints are in `styles.css`. Card rendering and the mobile menu are in `app.js`.

## Editorial status

- Public-stock holdings omitted because current positions were not confirmed.
- Daisy Financial copy is based on owner-supplied archived information; current services should be confirmed before publication.
- Historical consulting engagements hidden until attribution is confirmed.
- Leadership uses Founder rather than an unconfirmed current Chairman title.
- No logos, metrics, yield figures, investment performance claims, or ownership percentages are implied.
- External links open in a new tab with noopener and noreferrer.

## Research sources

- https://securetool.company
- https://metawork.tools
- https://secureblue.earth
- https://www.linkedin.com/in/adam-paul-smolak-4b816312
- https://www.linkedin.com/company/smolak-industries/
- https://algorand.co/
- https://docs.nillion.com/blind-computer/learn/overview
- https://chain.link/

Verified article destinations:

- https://harris-sliwoski.com/chinalawblog/how-the-west-can-win-the-innovation-race-with-china/
- https://harris-sliwoski.com/chinalawblog/3d-printing-is-key-to-winning-the-innovation-war-with-china/
- https://niemanreports.org/why-i-asked-jesse-jackson-about-the-media/

Unverified article destinations are documented on their disabled entries in content.js. Research retrieval is not a substitute for a final human editorial review.

## Before going live

Preview desktop and mobile layouts, test navigation and external links, confirm all business descriptions and holdings, and review the footer disclosure. No browser rendering or Vercel build was performed during code preparation.
