# Bengal Fan Page

**Consolidated project plan and decision record**  
**Updated:** November 24, 2026  
**Repository:** [github.com/jennifert/Bengals](https://github.com/jennifert/Bengals)  
**Status:** Active development — `0.1.0` foundation implemented; all six foundation issues closed  
**Working tagline:** *It Started With a Cat API. Things Escalated.*

> A friendly, accessible site about Bengal cats: beautiful animals, delightful chaos, practical breed education, carefully curated media, and responsible rescue resources. The site should be helpful and funny without making ownership sound effortless.

## Latest implementation updates — November 24, 2026

- **Development started:** A working Next.js 16.4.6 App Router application has been initialized with **JavaScript**, React, npm and Pico CSS. Next.js is now selected, not merely a possibility.
- **SQLite selected for future integrations:** Plan to use SQLite with `better-sqlite3`, with scheduled import/normalization jobs and database-backed cache records. The database and sync jobs **have not been implemented**.
- **Shared UI and routes implemented:** Reusable header/footer, global layout, skip link, initial custom palette, and Home (`/`), Facts (`/facts`), Rescue (`/rescue`), and About (`/about`) placeholder pages. Photography and video content will be integrated into existing pages initially, not given separate routes.
- **Developer tooling implemented:** ESLint, Prettier, Playwright with axe-core, and `npm run check` (lint + format check + production build + accessibility tests). The most recent local Playwright run passed all four route tests; the combined check was subsequently reported working.
- **Foundation conventions committed:** `.env.example`, `docs/DEVELOPMENT.md`, and `.gitignore` rules for local secrets/SQLite files are in the repository. The final `0.1.0` environment/accessibility issue is closed. Keep manual accessibility testing as an ongoing practice, not a one-time checkbox.
- **GitHub organization established:** Milestones have been created, and all **six** `0.1.0` GitHub issues are **closed**. Later milestone descriptions record *Possible issues*, to be converted into individual tickets when needed. The updated README and project plan in this delivery are local document revisions, not yet committed by this operation.
- **Hosting preference refined:** A DigitalOcean **Droplet** is preferred for production if keeping a writable on-disk SQLite database; Netlify remains attractive for previews or a different persistence architecture. Hosting/deployment is not finalized.
- **Scope unchanged:** Ship the core site in `1.0.0`, maintain it through `1.0.x`, and develop the accessible Chaos Cat Game afterward (`1.1.0`). No additional public API service or new cat-API integrations. Void-cat/Octocat jokes remain optional copy, not new features.

## 1. Project at a glance

| Item | Current direction |
| --- | --- |
| Project name | Bengal Fan Page; repository `jennifert/Bengals` |
| Project type | Personal, public hobby / educational fan site |
| Core purpose | Explain Bengal cats, showcase credited photos and selected videos, and point visitors toward trustworthy adoption information |
| Brand voice | Warm, playful, slightly dramatic, cat-obsessed; responsible about the realities of pet ownership |
| Main areas | **Implemented routes:** Home (`/`), Facts (`/facts`), Rescue & Adoption (`/rescue`), About (`/about`); photos and videos initially within existing pages |
| Planned integrations | TheCatAPI, Unsplash, YouTube, RescueGroups, Leaflet, HTTP Cat |
| Design | Pico CSS installed with `src/css/style.css` for brand overrides; initial palette introduced, with full contrast testing still required |
| Technical direction | **Selected:** Next.js App Router, JavaScript, React, npm, SQLite (`better-sqlite3` planned); future scheduled fetch-normalize-cache workflow |
| Hosting preference | **DigitalOcean Droplet** preferred if using persistent local SQLite; Netlify remains an option for previews or redesigned serverless data storage. Neither is deployed. |
| Service boundary | Public information website, **not** a public API/SDK/service or developer portal |
| Version goal | `1.0.0` = complete core site; post-launch maintenance and then the optional Chaos Cat Game |

### 1.1 Principles and boundaries

- **Useful before silly.** Breed facts, enrichment needs and rescue guidance remain clear and correct. The jokes are optional flavour, not barriers to information.
- **Curated rather than unfiltered.** Media should come from reviewed sources, not an unrestricted public YouTube or photo search.
- **Accessibility from the beginning.** Semantic pages, keyboard support, visible focus, usable filters, alternatives to maps, reduced-motion support and manual testing are part of implementation.
- **Privacy and reliability.** Hide credentials on the server, refresh third-party content on an appropriate schedule, cache normalized results, and degrade gracefully when a provider is unavailable.
- **Scope discipline.** Ship the useful site first; keep the browser game and other entertaining extras outside pre-1.0 scope.
- **Responsible adoption.** Make it clear that an athletic, smart and high-energy Bengal may not suit every household. Rescue listings must link back to their organizations for confirmation.

## 2. What exists today

As of the development session on **November 24, 2026**, the repository [`jennifert/Bengals`](https://github.com/jennifert/Bengals) is no longer just a planning README. The user has implemented and committed the Next.js application skeleton, reusable header/footer and styling, routes, and developer tooling. The final `0.1.0` task—environment/accessibility conventions—has been committed, and **all six foundation issues are closed**. The project remains in development: the routes contain placeholders, and production features are not built yet.

**Current application and source structure (reported):**

```text
Bengals/
├── src/
│   ├── app/
│   │   ├── layout.js                  # Shared root layout and metadata
│   │   ├── page.js                    # Home placeholder
│   │   ├── facts/page.js              # Facts placeholder
│   │   ├── rescue/page.js             # Rescue placeholder
│   │   └── about/page.js              # About placeholder
│   ├── components/
│   │   ├── header.js                 # Shared navigation
│   │   └── footer.js                 # Shared footer
│   ├── css/style.css                 # Overrides after Pico CSS
│   └── tests/accessibility.spec.js  # Playwright + axe checks
├── eslint.config.mjs
├── playwright.config.mjs
├── .prettierrc.json
├── package.json
├── package-lock.json
├── README.md
└── docs/                           # Project plan; development conventions planned
```

**Confirmed working in the session:** local Next.js page rendering in dark mode; shared layout and navigation; accessible route placeholders; ESLint and Prettier; four Playwright/axe route tests; and a passing combined verification command. An early automated test correctly caught a duplicate `<main>` on Home, which was fixed. No actual cat API or rescue integration, production deployment, scheduled refresh, or persisted SQLite database exists yet.

**GitHub planning:** The roadmap milestones exist, and all six `0.1.0` issues are closed as checked on November 24, 2026. Later milestones preserve *Possible issues* in their descriptions for eventual ticket creation. Keep live issue/milestone status as the source of truth.

The source-code license remains undecided (regardless of any automatically generated npm package license value).

## 3. Audience, tone and editorial policy

The site can serve cat enthusiasts, people curious about the breed, prospective adopters looking for realistic expectations, and visitors who simply enjoy cat photos or entertaining videos. No breeder affiliation or endorsement is implied.

**Recognizable voice:** “Danger Floof,” “Chaos Menace,” and “Tiny Household Leopard” are recurring Bengal nicknames. A further definitive Bengal nickname was discussed but **not settled**; don't invent one as canon. The black short-haired cat is a proposed partner-in-crime, called a **“void cat”** or **“night gremlin”** (because it practically disappears in the dark). The README opens with an affectionate warning that fascinating animals are not necessarily the right pet for everyone. Another established joke is **“Not to be confused with The Bangles.”** Additional non-Bengal cat content may appear when it is especially funny or useful, without undermining the Bengal focus.

Practical educational subjects proposed in the early chats: origins/history, appearance, coats, patterns and rosettes, temperament, energy/activity, play, exercise, environmental enrichment, care, and the trade-offs of Bengal ownership. Avoid presenting every Bengal as having the same behaviour, and treat external breed/adoption information as material to verify before publication.

## 4. Site map and page specifications

The **implemented navigation/routes** are **Home (`/`) → Facts (`/facts`) → Rescue & Adoption (`/rescue`) → About (`/about`)**. Photos and curated videos initially belong within existing pages; dedicated `/photos` or `/videos` routes have **not** been created or required. Early sketches also used **Learn, Look, Watch, Adopt, Fun**, or **Bengals, Gallery, Videos, Rescue, About**; those names remain brainstorming history, not current routes.

### 4.1 Home

**Goal:** immediately explain the project and guide users to learning, photos, videos and rescue resources.

- Short Bengal introduction, personality and visual identity; featured cat or photograph with proper credit.
- Reusable navigation cards to the main sections and a “Bengal fact” or rotating fact teaser.
- A conspicuous but friendly reminder that admiration and suitable ownership are different things.
- An optional playful tagline, e.g. *“It Started With a Cat API. Things Escalated.”*
- Stable loading/error/empty states for any externally supplied content.

### 4.2 Facts (breed information; earlier name: About Bengals / Learn)

**Goal:** useful, accessible Bengal-breed background, not just a photo wall.

- History and origins; physical appearance, coat colours and patterns.
- Temperament, energy level, athleticism, intelligence and common enrichment needs.
- Exercise, interaction, play and care; considerations for prospective adopters.
- A glossary or humorous Bengal dictionary where terms such as “Danger Floof” are defined as jokes rather than scientific categories.
- Credible references and a clear statement that every cat is an individual.

### 4.3 Photos / Gallery content (not a separate route yet; early name: Look)

**Goal:** a curated, attractive gallery with identifiable rights and sources.

- Use TheCatAPI for relevant cat/breed imagery and facts where supported.
- Use Unsplash for selected photographs, with creator/photographer name and link back to original work per provider terms.
- Candidate cards include thumbnail, title or caption, photographer/author, short blurb, and source/details link.
- Prefer approved or filtered content, optimized thumbnails, descriptive alternative text and resilient image fallbacks.
- Potential browsing facets or featured/random-image cards are ideas rather than settled requirements.

### 4.4 Video content (not a separate route yet; early name: Watch)

**Goal:** a library of hand-selected Bengal and cat-related clips.

- Prefer approved channel IDs and stable video IDs; channel display names can change.
- Curate videos and/or source channels before publishing rather than directly surfacing arbitrary search matches.
- Possible topics include play, enrichment, Bengal antics, education, behaviour and selected non-Bengal favourites.
- Consider excluding Shorts and live streams, using categories/tags and reviewing videos before they go public; those are implementation options, not confirmed rules.
- Use stable embeds and accessible titles; avoid autoplay and provide a normal external link where embedding is unavailable.
- A private or unlisted master playlist / curated database catalog was discussed as a possible editorial workflow.

### 4.5 Rescue & Adoption (early name: Adopt)

**Goal:** introduce adopters to verified rescue resources without downplaying Bengal care requirements.

- Default search or filter: **Bengals and Bengal mixes** (the conversational refinement of the README's Bengal-first wording). Offer an obvious alternative to show **all cats** / other cats.
- Keep the primary list visible, findable and accessible regardless of whether a visitor reads or dismisses the humorous warning.
- RescueGroups is the proposed listing source; cards should offer a short description, available listing metadata and a direct link to the original rescue organization or posting.
- Leaflet can display an interactive map of organization/service areas or suitably approximate locations. **Do not disclose private foster-home addresses.** Provide an equivalent non-map listing with locations and links.
- Clearly communicate no-result, loading, missing-location, outdated-listing and API-unavailable states.
- Display the humorous but informative **“ARE YOU SURE?”** banner; the banner must never prevent access to adoption information, and the serious advice must stay readable.
- Direct users to verify availability, location, and adoption requirements with the originating organization before acting.

**Rescue warning, working copy:**

> **ARE YOU SURE?** Bengals are intelligent, energetic, athletic cats that may require substantial enrichment and attention. Please learn about the breed before deciding whether one fits your home.  
> 🐙🐈‍⬛

**Signature / running gag:** The caution banner can end with **🐙🐈‍⬛**, a tiny Octocat-and-cat signature. This is a preferred joke from the newer conversation; its exact placement and styling await implementation. The Octocat/Bengal dynamic is **frenemies in public, accomplices in private**—comedic lore, not a required new site section.

**Interaction ideas from the chats:** a Wikipedia/Wayback-style donation/banner treatment; show/hide dismissal; buttons such as **“Yes, show me the Bengals”** and **“Actually, show me all cats”**; alternative jokes **“I accept the consequences”** and **“Show me normal cats.”** Remembering dismissal in `localStorage` was suggested, not required. Avoid making it a deceptive or inaccessible confirmation wall.

**Rescue-page Easter egg:** a scripted, pretend adoption-agency cat interview in a curated YouTube Short, with the gag:

> “Are you willing to exercise it?”  
> “How do you exercise a cat?”  
> “We said exercise, not exorcise. Although with a Bengal, please keep both options open.”

This was imagined as an entertaining “required adoption training material” bit, **not** a real adoption prerequisite or final video selection.

### 4.6 About / Sources

**Goal:** explain what the project is and where third-party content comes from.

- Project purpose, humour and unofficial educational/fan-site status.
- Data providers and credits: TheCatAPI, Unsplash, YouTube, RescueGroups, Leaflet, HTTP Cat, and any further sources actually used.
- GitHub repository, source-code license when selected, attribution and rights notes.
- Disclaimers that third-party content belongs to its creators/providers and that external links/data are not endorsements.
- Privacy/data-refresh explanation; contact or issue-reporting pathway through GitHub Issues if enabled.

### 4.7 Optional Fun area

Early brainstorming included “Bengal of the Day,” random photographs or facts, and lighthearted content under a Fun section. A permanent Fun page was **not** preserved in the current README site map. These ideas can be inserted into existing sections or held for a later milestone.

## 5. Visual design and reusable interface

### 5.1 Established palette

| Role / original name | Hex |
| --- | --- |
| Indian Red — prominent accent | `#c8586d` |
| Dark Slate Gray — deep text/background | `#1c202c` |
| Light Grey — light surface | `#d8d2ce` |
| Light Slate Gray — secondary surface | `#afb0b3` |
| Gray — muted neutral | `#867e79` |

The user accepted this direction as workable **with tweaks**. Earlier sketches mentioned off-white, charcoal, golden/tan accents and lightly spotted/rosette motifs. The later README codifies the five colours above; exact colour use remains subject to contrast testing.

### 5.2 Layout and components

Use a fairly conventional, content-led structure rather than a busy novelty interface: generous spacing, strong Bengal photography, short educational blocks, restrained animal-print accents and a responsive layout. **Pico CSS is installed**; custom styles live at `src/css/style.css` and are imported after Pico in the root layout. The user confirmed that dark mode follows the operating-system preference.

**Implemented reusable pieces:** root layout, header / navigation, and footer (adapted from the user's Utility Toolbox components for the Next.js App Router). **Proposed for later:** BengalCard, FactCard, PhotoCard, VideoCard, RescueCard, WarningBanner, LoadingMessage and ErrorMessage. A small chibi cat/mascot or logo was floated as optional branding, including a whimsical **chibi cat perched on/near a PC tower** concept; no final design was chosen.

Interactive components must have keyboard operability, visible focus, sufficiently large touch targets, descriptive labels and non-colour-only state cues. If motion or animation is added, respect `prefers-reduced-motion`.

## 6. Data sources and integration intentions

| Source | Proposed use | Editorial / technical guardrails |
| --- | --- | --- |
| **TheCatAPI** | Bengal breed information and cat/breed photos | Validate response, cache records, preserve provider credit and fall back on cached content |
| **Unsplash** | High-quality selected cat/Bengal photography | Attribution, photographer/source links, compliance with applicable display/API rules |
| **YouTube** | Selected videos and perhaps channels | Stable IDs; allowlist/review; do not show unrestricted searches; accessible embeds and links |
| **RescueGroups** | Bengal-first rescue listings, with optional all-cat filter | More frequent refresh than static content; privacy-conscious locations; verify with original listing |
| **Leaflet** | Maps of rescue/adoption areas | Non-map alternative; no private home coordinates; responsive controls |
| **HTTP Cat** | Cat-themed HTTP/status illustrations | Optional decoration; text explanation and standard technical fallback must remain available |

The final provider contracts, rate limits, licenses and required API keys need validation at implementation time. This plan is a record of **intended uses**, not verification of present-day service plans or permissions.

### 6.1 Proposed ingestion/caching pipeline

```text
External source API
        ↓
Scheduled fetch / import
        ↓
Validation and normalization
        ↓
Local database or durable cache
        ↓
Application views / routes
        ↓
Visitor
```

Rationale from the chats: do not send API requests for every page view; reduce provider dependency and keep the site functional if a service goes down. Store provider/external identifiers so updates can be **upserts** rather than duplicate records; maintain timestamps for freshness and provenance. Different data types merit different expiry policies.

**Refresh ideas, not commitments:** relatively static photos and breed information may refresh infrequently (a **weekly database/content refresh** was among the ideas); YouTube catalog can sync periodically; a **6–12-hour** RescueGroups refresh was suggested in one discussion because animal availability changes, while other discussions considered daily refresh. A weekly batch for the entire site **must not be mistaken for an approved rescue-listing freshness guarantee**. Final schedules depend on provider constraints, hosting, workload, and the risk of stale adoption data.

### 6.2 Database and content models under consideration

The architecture decision for `0.1.0` is **SQLite**, with `better-sqlite3` planned when persistent storage is actually implemented. PostgreSQL was an earlier alternative, not the current choice. No tables have been created. Possible normalized entities include: `breeds` / `facts`; `photos` and `photo_sources`; `videos` and `approved_channels`; `rescues` / `adoption_listings`; `status_messages`; `sync_runs`; and `sources` / credits. These are **design proposals**, not a finalized schema.

A particularly useful accepted idea is to keep Bengal-themed status/loading lines in a database (or equivalent content catalog) with a technical message as a hard-coded fallback. Suggested fields are code/category, playful text, standard text, active flag and attribution (if any). Standard HTTP meaning must remain clear.

### 6.3 Secrets and configuration

The committed `.env.example` provides empty placeholders such as `CAT_API_KEY`, `UNSPLASH_ACCESS_KEY`, `YOUTUBE_API_KEY`, `RESCUEGROUPS_API_KEY`, and `DATABASE_PATH` (preferred for an eventual local SQLite file). These names are **illustrative**, not working integrations. Use `.env.local` for actual local secrets when needed, keep it ignored by Git, and do not prefix secrets with `NEXT_PUBLIC_` or ship them to the browser. No API keys are needed for the current placeholder pages. The committed `docs/DEVELOPMENT.md` documents this approach.

### 6.4 Public-site boundary: no new API product

A playful suggestion to make the Bengal site itself into a service was immediately withdrawn. **Do not build a public API, SDK, developer dashboard or external integration platform for the MVP.** The actual goal is a fun public-facing site fed by existing third-party APIs and curated content. The comment that others could scrape the site was a joke, **not** a commitment to support scraping, publish an endpoint, or waive third-party content rights.

## 7. Bengal humour, statuses and Easter eggs

The playful content is part of the project's personality, but should not obscure accessibility or debugging information.

| Context | Recorded idea or sample line |
| --- | --- |
| Loading | “Waking the Bengal…” |
| Loading photos | “Chasing photos across the internet…” |
| 404 | “The Bengal knocked it off the shelf.” |
| 409 | “Two Bengals. One cardboard box.” |
| 429 | “Too much pouncing.” |
| 418 | Teapot/HTTP Cat Easter egg |
| More HTTP pages | Potential cat-themed treatments for 403, 500, 502 and 503 |
| Rescue | “ARE YOU SURE?”; comic exercise/exorcise interview |
| Branding | “Danger Floof”; “Chaos Menace”; “Tiny Household Leopard” |
| Tagline | “It Started With a Cat API. Things Escalated.” |
| Running gag | “Not to be confused with The Bangles.” |
| Github/Octocat | Octocat and Bengal: **frenemies in public, accomplices in private**; 🐙🐈‍⬛ signs the warning |
| Black cat cameo | The short-haired **void cat / night gremlin** is the Bengal's possible partner in crime; not a newly required site section |
| Nickname status | Bengal has several informal nicknames, but the exact new counterpart to “void cat” remains undecided |

Use human-readable **status codes, explanatory text, recovery actions and appropriate semantics** alongside any cat-image/error joke. HTTP Cat imagery should not replace an accessible error explanation.

## 8. Accessibility, privacy, attribution and trust

The README explicitly establishes an accessibility-first approach. The current shared layout provides semantic page landmarks and a skip-to-main link; navigation uses the active-page `aria-current` pattern. The initial Playwright + axe-core suite scans all four routes and passed four tests in the latest local run. It also caught and helped fix a duplicate `<main>` landmark on the Home page. Development and release checks still need manual keyboard, focus, contrast (both light and dark modes), alt text, screen-reader labels, accessible filters, video alternatives, touch sizing, responsive layouts, map/list equivalence, and reduced-motion review. Automated testing does **not** replace manual evaluation.

For content and user trust: credit creators and link to sources; observe API and image license/attribution rules; avoid uploading or exposing secrets; cache only what agreements allow; link users back to originating rescue listings; avoid exposing private foster-home addresses; and avoid overstating accuracy/freshness of third-party data. Include an unofficial-site disclaimer and clarify that the original-code license **does not cover** third-party photos, media or API data.

An **MIT license** for the project's original code was discussed as a possible choice, but the current README says the license is **undecided**. Do not treat MIT as selected until a license file is added and approved.

## 9. Framework and repository decisions

**Selected and implemented in `0.1.0`:** Next.js **16.4.6** App Router, React, **JavaScript** (no TypeScript application files), npm, Pico CSS, custom CSS under `src/css/style.css`, reusable header/footer, and the four route placeholders. JSX is written in `.js` files; `.mjs` for tooling configuration is JavaScript, not TypeScript.

**Selected architecture, not yet implemented:** SQLite with `better-sqlite3`, plus scheduled import/normalization jobs and per-provider cache freshness. Do not claim that a local database, schema, scheduled worker, or API keys are in use already.

**Developer quality tooling implemented:** ESLint (with `eslint-config-next`), Prettier (`eslint-config-prettier` integration), Playwright + axe-core (Chromium), and npm scripts:

| Script | Purpose |
| --- | --- |
| `npm run dev` | Run the Next.js development server |
| `npm run lint` | Lint JavaScript and configuration |
| `npm run format` | Apply Prettier formatting |
| `npm run format:check` | Check formatting |
| `npm run build` | Create the production build |
| `npm run test:a11y` | Run the four route accessibility scans |
| `npm run check` | Run lint, format:check, build, and test:a11y |

**Testing note:** In local development, Playwright originally ran from `src/tests/` after `testDir` was corrected. An initial scan found two `<main>` elements on the homepage; removing the inner `<main>` resolved the failure, and all four scans passed. Prettier initially flagged an unformatted `page.js`; formatting fixed it. An HMR origin warning during the test run was not a failed accessibility check.

### 9.1 Hosting and deployment direction

A DigitalOcean **Droplet** is the current production preference if continuing with a persistent, writable SQLite database. A conventional server with persistent storage is a simpler fit for SQLite than an ephemeral serverless-function filesystem. **Netlify** is still a candidate for previews or for a different deployment with compatible external/durable storage; it should not be described as hosting a persistent on-disk writable SQLite database directly. The earlier idea of building/preprocessing content on DigitalOcean and publishing to Netlify is retained as an **alternative**, not the currently preferred setup.

No production deployment has been configured. Before launch, confirm actual hosting costs/limits, backups, secrets management, scheduling, permissible provider caching, recovery, and how stale rescue listings are handled. The site is not a new public API product.

### 9.2 Established `0.1.0` environment and accessibility conventions

**Committed and checked in GitHub:** `.env.example` containing empty placeholders, `.gitignore` exclusions for `.env*` with an `.env.example` exception, generated local SQLite file exclusions, and `docs/DEVELOPMENT.md` covering technology, secret handling, accessibility, and quality checks. The corresponding GitHub issue is closed.

**Ongoing requirements:** meaningful skip-link focus behaviour (including a focusable main target when appropriate), manual keyboard and focus checks, both light/dark contrast testing, screen-reader review, and `npm run check` after significant changes. These checks should continue during all later milestones, even though the foundation issue is closed.

For local setup on macOS or Windows, run `npm install` and `npx playwright install chromium` once per machine. The app currently runs with `npm run dev` and needs no API credentials. Do not commit generated build output, browser test reports, or actual `.env.local` credentials.

### 9.3 Resist the feature creep

After discussing more cat APIs in November, the user explicitly opted to **stick with the existing sources and finish version 1.0 first**. There is no requirement to hunt for new providers, add a public service layer, or build a separate API. Record genuinely fun ideas in a backlog and do not put them into the core release merely because they exist. The void-cat and Octocat jokes can stay as lightweight copy/Easter-egg candidates; they do not justify extra infrastructure.

## 10. Version-by-version roadmap

The table below follows the **latest repository README**. Earlier chats envisioned the 404 game around `1.0.2`; the documented plan now places the game in `1.1.0`, with `1.0.x` reserved for maintenance.

| Version | Theme | Planned work / target result |
| --- | --- | --- |
| **0.1.0** | Project foundation | Decide framework and data-store approach; initialize project, shared layout/header/footer and routes; establish palette, environment documentation and basic accessibility conventions |
| **0.2.0** | Bengal basics | Home and breed education, facts/glossary, reusable cards; purposeful loading/empty/error states |
| **0.3.0** | Cat data and photos | TheCatAPI and Unsplash ingestion/attribution; normalization and cache/database; accessible gallery |
| **0.4.0** | Curated videos | YouTube IDs/approval model, approved library/catalog and stable accessible video cards |
| **0.5.0** | Rescue & adoption | RescueGroups, Bengal-first and all-cat filters, verified source links, warning banner, Leaflet map plus list alternative |
| **0.6.0** | Accessibility and polish | Audit keyboard, screen reader, contrast, responsive layouts, loading/error flows; security, attribution and content review |
| **1.0.0** | First complete release | Publish the usable, documented core site with deployment, privacy/credits, setup and release review |
| **1.0.x** | Maintenance | Patch bugs, keep dependencies/packages updated, maintain data/provider integrations and improve existing functionality; avoid adding substantial new features |
| **1.1.0** | Chaos Cat Game | Optional Bengal runner / 404 Easter egg after the main site is stable |

The checklist items in the third column are **planning targets**, not a promise of exact release dates. GitHub milestones now exist; concrete `0.1.0` issues were created and worked on, while later milestone descriptions record *Possible issues* to convert into tickets when relevant. All six `0.1.0` issues are closed; that does **not** imply `1.0.0` has been released or a deployment is live. An early casual example placed the game around `1.0.2 (ish)`, but the **formal README roadmap uses `1.1.0`** and reserves `1.0.x` for maintenance.

### 10.1 Current implementation order and next steps

1. **Done:** choose Next.js App Router, JavaScript, Pico CSS, and SQLite as the planned database approach; scaffold and run the application locally.
2. **Done:** build shared header/footer, initial custom palette, skip-to-main structure, and Home/Facts/Rescue/About routes.
3. **Done:** configure ESLint, Prettier, Playwright/axe-core, and the combined `npm run check` workflow; four accessibility scans passed locally.
4. **Done:** add `.env.example`, ignore local secrets/SQLite databases, commit `docs/DEVELOPMENT.md`, and close the final foundation issue. Continue keyboard/focus/light-dark contrast and screen-reader checks as an ongoing practice.
5. **Next milestone (`0.2.0`):** write genuinely useful Home and Bengal Facts content, glossary and reusable card/loading/error patterns without bringing in API work prematurely.
6. **Later:** implement TheCatAPI/Unsplash (`0.3.0`), curated videos (`0.4.0`), rescue and map/list views (`0.5.0`), then final accessibility/polish (`0.6.0`) and release (`1.0.0`).

Do not assume a milestone is complete merely because code exists; use GitHub issue and milestone state, verification, and the eventual release tag.

## 11. Post-release: Chaos Cat Game

The game is deliberately **not** needed for the first production release. It grew from the Chrome offline dinosaur runner idea, but features a running Bengal instead. It could be included on the 404 page as a playable Easter egg with a standard useful 404 message and a way back to the site.

Brainstormed ingredients: a side-scrolling Bengal; jump over obstacles; score/“Chaos Score”; a **“Start Chaos”** prompt; a mock victory/exit message **“THE MENACE HAS BEEN CONTAINED”**; keyboard and touch controls; a visible pause option; reduced-motion settings; accessible controls or alternative content. The entire site must work normally without interacting with the game.

**Accessibility is the primary design constraint for this later game release**, not something patched in after the runner exists. Consider clear instructions, keyboard and touch input, pausing, reduced-motion alternative, a way to skip or disable play, and a normal usable 404 page. The exact art, gameplay, controls and integration are unapproved concepts for `1.1.0`, not MVP requirements.

## 12. Decision history and unresolved questions

### 12.1 Decision record

| Period | Item | Outcome / current interpretation |
| --- | --- | --- |
| Aug. 28, 2026 | Breed info plus visually fun, API-driven fan page | Adopted as the basic project concept |
| Aug. 28, 2026 | TheCatAPI, Unsplash, RescueGroups, HTTP Cat, Leaflet | Identified as candidate providers; later README also documents YouTube |
| Aug. 28, 2026 | Prefer stable YouTube IDs and manual curation | Strong design preference; don't auto-publish unrestricted search results |
| Aug. 28, 2026 | Bengal-default rescue, optional all-cat view | Preserved in current README |
| Aug. 28, 2026 | Deliberately overdramatic rescue banner | Preserved as an optional humorous interaction with real education |
| Aug. 28, 2026 | Database-stored joke/status lines with code fallback | Accepted content/data strategy idea, not implemented |
| Aug.–Sept. 2026 | Next.js and reusable layouts | Originally considered; implemented in November 2026 with App Router and JavaScript |
| Sept. 15, 2026 | Five-colour Pico CSS palette | Accepted as a workable starting point with tweaks |
| Sept. 15–16, 2026 | Incremental milestones and post-launch runner | Preserved in README; latest game version `1.1.0` |
| Sept. 16, 2026 | GitHub repo and planning README | Repository created; the application was scaffolded in November 2026 |
| Sept. 2026 | Post-1.0 game / maintenance distinction | `1.0.0` complete site; `1.0.x` maintenance; `1.1.0` game in the README (earlier `1.0.2-ish` was a loose example) |
| Sept.–Nov. 2026 | Hosting preference | Netlify initially attractive; DigitalOcean Droplet now preferred if using persistent SQLite, with Netlify still an alternative; not deployed |
| Sept.–Nov. 2026 | GitHub mascot gag | Octocat/Bengal as public frenemies/private accomplices; **🐙🐈‍⬛** warning signature proposed |
| Nov. 2026 | Additional cat APIs/public API | Resist new APIs and finish `1.0`; a Bengal-site-as-a-service/API was a joke, not a requirement |
| Nov. 2026 | Void-cat companion | Black short-haired cat is “night gremlin” or “void cat”; possible crime partner cameo, with Bengal's new counterpart nickname undecided |
| Nov. 24, 2026 | Development progress | Working Next.js/Pico skeleton, shared layout, routes, ESLint/Prettier/Playwright/axe; environment template and developer conventions committed; six `0.1.0` issues closed |

### 12.2 Open decisions

- **Architecture implementation:** define the SQLite schema, `better-sqlite3` initialization, provider-specific sync cadence and freshness policies, backup strategy, deployment scheduling, and final DigitalOcean/Netlify choice. Framework and database direction are **already chosen**; actual integrations remain future work.
- **Brand/navigation:** final page names; final logo/illustration treatment (including chibi cat / PC-tower sketch); whether there is a dedicated Fun page; final typography, exact colour pairings, and optional void-cat/Octocat cameos.
- **Editorial controls:** definition of approved video channels/videos and any review workflow; whether Shorts/live are excluded; proportion of non-Bengal content.
- **API details:** final fields, cache expiry per provider, duplicate handling, refresh jobs, image hosting/display requirements and terms-of-use review.
- **Rescue details:** which geographies/search fields are available, how to represent location safely, handling of stale/adopted listings, and final warning text/interaction.
- **Governance:** original-code license, release/deployment process, contributor guidance, and maintenance cadence. GitHub milestones already exist; open issues incrementally rather than recreating the roadmap.
- **Game:** precise scope, artwork and accessibility requirements to define after `1.0.0`.

### 12.3 Explicitly out of scope for the core release

A complete browser game, a new public Bengal API/service, additional third-party APIs solely for novelty, auto-approved open-ended YouTube search, unverified third-party content, exposing private rescue/foster addresses, a complicated content-management system, or unnecessary features added only because they are amusing. These would undermine the project's stated curation, safety and scope goals.

## 13. GitHub work items and release tracking

**GitHub milestones are already created.** The user chose a light-touch issue strategy: detailed tickets exist for the active `0.1.0` milestone; descriptions of later milestones retain **Possible issues** so tasks are not opened prematurely. Avoid duplicating already-created issues.

**Foundation implemented:** framework/data strategy decision; Next.js project initialization; reusable layout/header/footer with Pico styling; four application routes; lint/format/accessibility/build tooling; `.env.example`, `.gitignore` environment/SQLite exclusions, and `docs/DEVELOPMENT.md`. All six foundation issues are closed. Manual verification and quality checks remain ongoing responsibilities, not an unfinished foundation ticket.

**Potential later issue themes (preserved, not yet implied to exist):**

- **`0.2.0` Content:** useful Home/Facts copy, responsible breed information, glossary, reusable cards and accessible empty/loading/error states.
- **`0.3.0` Photos:** provider contracts, import/normalization, SQLite cache and metadata, image rights/attribution, alt-text policy, gallery.
- **`0.4.0` Videos:** stable IDs, approved catalog/allowlist, editorial workflow, accessible links and embeds.
- **`0.5.0` Rescue:** provider model and freshness, Bengal-first and all-cat filter, original source links, privacy-conscious Leaflet map plus equivalent list, optional warning/signature.
- **`0.6.0` Quality:** responsive/keyboard/screen-reader testing, contrast, privacy/security review, attribution and outage handling.
- **`1.0.0` Launch:** production deployment, user-facing policies, release checks, docs, GitHub Release.
- **`1.0.x` Maintenance:** create patch-version issues and milestones as needed; no fixed release promises.
- **`1.1.0` Game:** post-launch optional runner, accessibility, reduced motion, pause and possible 404 Easter egg.

## 14. References and provenance

**Primary, current project sources**

- [Bengals GitHub repository](https://github.com/jennifert/Bengals) — public project and source location.
- [README.md on `main`](https://github.com/jennifert/Bengals/blob/main/README.md) — site overview; this revision incorporates November 24 foundation progress and is provided as a replacement draft.
- [`.gitignore` on `main`](https://github.com/jennifert/Bengals/blob/main/.gitignore) — committed environment and SQLite exclusions.
- [`.env.example` on `main`](https://github.com/jennifert/Bengals/blob/main/.env.example) — empty configuration placeholders.
- [`docs/DEVELOPMENT.md` on `main`](https://github.com/jennifert/Bengals/blob/main/docs/DEVELOPMENT.md) — committed development and accessibility conventions.
- [GitHub Milestones](https://github.com/jennifert/Bengals/milestones) and [Issues](https://github.com/jennifert/Bengals/issues) — current work tracking; later milestone descriptions hold *Possible issues*.

**Earlier conversation-derived project context**

- August 28–29, 2026: site purpose, page sketches, APIs, curation, rescue banner/interview Easter egg, status jokes, cache/database model and Next.js consideration.
- September 15–16, 2026: palette, version scope, post-release runner idea, Netlify consideration, Octocat/Bengal joking, repository and README plan.
- November 2026: resist feature creep and additional APIs; public-service idea explicitly abandoned; short-haired black cat as void cat/night gremlin; website remains the focus.

**Note on completeness:** This revision consolidates Bengal project decisions, earlier brainstorming, the uploaded README/project-plan baselines, and the user-reported November 24, 2026 implementation session. It is **both a planning record and a development progress snapshot**, not a line-by-line transcript or an audit of every live GitHub commit. Planned features are distinguished from implemented foundation work; all six `0.1.0` GitHub issues were verified as closed.
