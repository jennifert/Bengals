# Bengal Fan Page

**Consolidated project plan and decision record**  
**Updated:** November 24, 2026  
**Repository:** [github.com/jennifert/Bengals](https://github.com/jennifert/Bengals)  
**Status:** Planning / pre-development  
**Working tagline:** *It Started With a Cat API. Things Escalated.*

> A friendly, accessible site about Bengal cats: beautiful animals, delightful chaos, practical breed education, carefully curated media, and responsible rescue resources. The site should be helpful and funny without making ownership sound effortless.

## Latest updates since the October 26 plan

- **Netlify preference documented:** Website hosting on Netlify is appealing; data/API calls run privately ahead of builds or content publishing, potentially using a separately hosted backend/database. No hosting or database deployment has been done.
- **Release scope reaffirmed:** Complete all core pages and accessibility for `1.0.0`; reserve `1.0.x` for bug fixes and package updates; target the browser game as an accessible post-1.0 feature (`1.1.0` in the README).
- **No new service/API:** Resist accumulating cat APIs; the site is not becoming a public API or SDK.
- **Cat lore enriched:** Black short-haired **void cat / night gremlin** is a prospective partner in crime; the Octocat and Bengal are *public frenemies, private accomplices*; **🐙🐈‍⬛** may sign the rescue warning.
- **Repository rechecked:** Still pre-development with only README and gitignore at root, and no returned GitHub issues. The README has not yet incorporated these later conversational details.

## 1. Project at a glance

| Item | Current direction |
| --- | --- |
| Project name | Bengal Fan Page; repository `jennifert/Bengals` |
| Project type | Personal, public hobby / educational fan site |
| Core purpose | Explain Bengal cats, showcase credited photos and selected videos, and point visitors toward trustworthy adoption information |
| Brand voice | Warm, playful, slightly dramatic, cat-obsessed; responsible about the realities of pet ownership |
| Main areas | Home; About Bengals / Learn; Photos / Gallery; Videos; Rescue & Adoption; About / Sources |
| Planned integrations | TheCatAPI, Unsplash, YouTube, RescueGroups, Leaflet, HTTP Cat |
| Design | Simple, content-first, responsive, Pico CSS-oriented; contrast-tested five-colour palette |
| Technical direction | Next.js has been considered, but final framework and database remain **unselected**; scheduled preprocessing and caching rather than browser-to-API calls on every visit |
| Hosting preference | **Netlify** for the website was raised as a preferred option (familiar from another project); upstream data/API work could occur before deploy, with Netlify receiving generated content. Deployment not yet configured. |
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

As rechecked on **November 24, 2026**, the public GitHub repository is [`jennifert/Bengals`](https://github.com/jennifert/Bengals), with default branch `main`. Its root contains `README.md` and `.gitignore`; application files have not yet been added. The README itself calls the work **“Planning / Pre-development.”** No GitHub issues were returned by the repository issues listing at the time of review. Therefore the features below are plans, not claims of completed functionality.

The README already documents the purpose, sources, style palette, accessibility and data strategy, planned releases, attribution, security expectations and future game. `.gitignore` has Next.js-related exclusions and excludes `.env` and `.env*.local`; this **does not** mean Next.js is a final framework decision. A code license has not yet been finalized.

**Source hierarchy for this document:** the repository README is the written planning baseline; subsequent project chats add decisions and preferences that have **not yet been incorporated into that README**. Where these disagree, this document records the newer conversational direction without pretending that GitHub has already been updated. GitHub issues were empty on the review date; no milestone completion status has been inferred.

## 3. Audience, tone and editorial policy

The site can serve cat enthusiasts, people curious about the breed, prospective adopters looking for realistic expectations, and visitors who simply enjoy cat photos or entertaining videos. No breeder affiliation or endorsement is implied.

**Recognizable voice:** “Danger Floof,” “Chaos Menace,” and “Tiny Household Leopard” are recurring Bengal nicknames. A further definitive Bengal nickname was discussed but **not settled**; don't invent one as canon. The black short-haired cat is a proposed partner-in-crime, called a **“void cat”** or **“night gremlin”** (because it practically disappears in the dark). The README opens with an affectionate warning that fascinating animals are not necessarily the right pet for everyone. Another established joke is **“Not to be confused with The Bangles.”** Additional non-Bengal cat content may appear when it is especially funny or useful, without undermining the Bengal focus.

Practical educational subjects proposed in the early chats: origins/history, appearance, coats, patterns and rosettes, temperament, energy/activity, play, exercise, environmental enrichment, care, and the trade-offs of Bengal ownership. Avoid presenting every Bengal as having the same behaviour, and treat external breed/adoption information as material to verify before publication.

## 4. Site map and page specifications

The working site map in the README is **Home → About Bengals, Photos, Videos, Rescue & Adoption, About.** Early sketches also used **Learn, Look, Watch, Adopt, Fun**, or **Bengals, Gallery, Videos, Rescue, About**. These are naming alternatives, not separately approved routes.

### 4.1 Home

**Goal:** immediately explain the project and guide users to learning, photos, videos and rescue resources.

- Short Bengal introduction, personality and visual identity; featured cat or photograph with proper credit.
- Reusable navigation cards to the main sections and a “Bengal fact” or rotating fact teaser.
- A conspicuous but friendly reminder that admiration and suitable ownership are different things.
- An optional playful tagline, e.g. *“It Started With a Cat API. Things Escalated.”*
- Stable loading/error/empty states for any externally supplied content.

### 4.2 About Bengals / Learn

**Goal:** useful, accessible Bengal-breed background, not just a photo wall.

- History and origins; physical appearance, coat colours and patterns.
- Temperament, energy level, athleticism, intelligence and common enrichment needs.
- Exercise, interaction, play and care; considerations for prospective adopters.
- A glossary or humorous Bengal dictionary where terms such as “Danger Floof” are defined as jokes rather than scientific categories.
- Credible references and a clear statement that every cat is an individual.

### 4.3 Photos / Gallery (early name: Look)

**Goal:** a curated, attractive gallery with identifiable rights and sources.

- Use TheCatAPI for relevant cat/breed imagery and facts where supported.
- Use Unsplash for selected photographs, with creator/photographer name and link back to original work per provider terms.
- Candidate cards include thumbnail, title or caption, photographer/author, short blurb, and source/details link.
- Prefer approved or filtered content, optimized thumbnails, descriptive alternative text and resilient image fallbacks.
- Potential browsing facets or featured/random-image cards are ideas rather than settled requirements.

### 4.4 Videos (early name: Watch)

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

Use a fairly conventional, content-led structure rather than a busy novelty interface: generous spacing, strong Bengal photography, short educational blocks, restrained animal-print accents and a responsive layout. Pico CSS was the planned foundation.

Reusable pieces proposed in discussions: **Header / logo / navigation, footer, BengalCard, FactCard, PhotoCard, VideoCard, RescueCard, WarningBanner, LoadingMessage and ErrorMessage**. Shared layout/header/footer were specifically requested in the Next.js discussion. A small chibi cat/mascot or logo was floated as optional branding, including a whimsical **chibi cat perched on/near a PC tower** concept; no final design was chosen.

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

The original architecture conversation suggested SQLite or PostgreSQL; the README says **local database** without choosing a platform. Possible normalized entities include: `breeds` / `facts`; `photos` and `photo_sources`; `videos` and `approved_channels`; `rescues` / `adoption_listings`; `status_messages`; `sync_runs`; and `sources` / credits. These are **design proposals**, not a finalized schema.

A particularly useful accepted idea is to keep Bengal-themed status/loading lines in a database (or equivalent content catalog) with a technical message as a hard-coded fallback. Suggested fields are code/category, playful text, standard text, active flag and attribution (if any). Standard HTTP meaning must remain clear.

### 6.3 Secrets and configuration

The README anticipates `.env.example` with placeholders for `CAT_API_KEY`, `UNSPLASH_ACCESS_KEY`, `YOUTUBE_API_KEY`, `RESCUEGROUPS_API_KEY` and `DATABASE_URL`. These are **illustrative names**, not finalized integration settings. Put credentials in server-only environment configuration, exclude local secrets via `.gitignore`, and never ship them to the browser or commit them to source control.

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

The README explicitly establishes an accessibility-first approach. Development and release checks should include semantic HTML/headings; keyboard navigation and focus; contrast; alt text; screen-reader labels; accessible form/filter states; video embed alternatives; touch sizing; responsive screens; map/list equivalence; and reduced-motion preferences. Automated axe-style checks are helpful, but manual keyboard and screen-reader evaluation remain required.

For content and user trust: credit creators and link to sources; observe API and image license/attribution rules; avoid uploading or exposing secrets; cache only what agreements allow; link users back to originating rescue listings; avoid exposing private foster-home addresses; and avoid overstating accuracy/freshness of third-party data. Include an unofficial-site disclaimer and clarify that the original-code license **does not cover** third-party photos, media or API data.

An **MIT license** for the project's original code was discussed as a possible choice, but the current README says the license is **undecided**. Do not treat MIT as selected until a license file is added and approved.

## 9. Framework and repository decisions

**Confirmed:** GitHub repository `jennifert/Bengals`; source tree currently consists of README and gitignore; Pico CSS-oriented, modular/reusable UI; documented config/secrets; API fetch-normalize-cache design; incremental version milestones.

**Discussed but not final:** Next.js, specific version; choice of SQLite vs PostgreSQL; where imports run; a final directory structure; database schema; schedules; a public URL; deployment model. **Netlify is the preferred hosting candidate from a later discussion**, not a deployed or confirmed selection. A database or import process could run separately (DigitalOcean was mentioned); exact vendor/configuration and whether data is bundled at build time or read from a server remain open. The `.gitignore` includes Next.js paths because the project was being considered in that ecosystem, not because a working Next.js site has been created.

A reasonable **illustrative** future organization (not current repository contents) is:

```text
app/ or pages/          # selected framework routes
components/             # reusable cards, navigation, banner, states
lib/                    # providers, validation, data access
scripts/                # scheduled import/sync utilities
data/                   # local database or content catalog, if appropriate
public/                 # static assets with cleared rights
README.md
.env.example            # placeholders only
```

Any structure should be adapted to the ultimately selected framework and deployment, rather than creating it as a requirement prematurely.

### 9.1 Hosting and deployment direction (newer discussion)

The latest hosting thought was to use **Netlify** for the visible website, since it has been used on another project. The appeal of hosting two sites on a free offering was raised as a hope—not a verified pricing or account entitlement claim. API access and data processing should take place **before publishing/deploying** whenever practical, with Netlify pulling or receiving the prepared, nonsecret content.

```text
TheCatAPI / Unsplash / YouTube / RescueGroups
                 ↓
Private scheduled import + normalization
(possibly on DigitalOcean or another backend)
                 ↓
Database / approved content snapshots
                 ↓
Netlify build or generated-data publishing
                 ↓
Accessible Bengal Fan Page (no client-side API keys)
```

**Design implications / checks:** decide which content can be pre-rendered and which listings need genuinely fresh information; don't disclose provider credentials or private rescue locations in published data; ensure stale listing indicators and source links; document deploy/build triggers, data export format, caching allowances and provider licensing. Netlify's current plan limits, scheduled-function support and exact integration with any DigitalOcean database must be checked **before** the architecture is finalized. This is **a preference and proposed flow**, not a working deployment.

### 9.2 Resist the feature creep

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

The checklist items in the third column are **planning targets** assembled from the discussions, not tickets already implemented or a promise of exact release dates. An early casual example placed the game around `1.0.2 (ish)`, but the **formal README roadmap now uses `1.1.0`** for a new game feature while `1.0.x` denotes maintenance. That is the version to follow until the roadmap is intentionally revised.

### 10.1 Suggested near-term implementation order

1. Confirm whether a **Netlify static/generated site plus separately refreshed content** works for the core pages and rescue listing needs; select framework, data format/storage and scheduled-job mechanism accordingly.
2. Set up `.env.example`, repository conventions, reusable layout, palette and route skeletons.
3. Write the first clear breed-info/facts pages before adding API-driven complexity.
4. Build TheCatAPI importer and local cache, then Unsplash attributed gallery.
5. Add the approved video catalog, followed by RescueGroups and map/list views.
6. Complete accessibility, privacy, provider-terms, attribution and deployment checks before `1.0.0`.

These steps are proposed execution guidance consistent with the milestones; no issue tracker has been created yet.

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
| Aug.–Sept. 2026 | Next.js and reusable layouts | Considered; not locked in by repo |
| Sept. 15, 2026 | Five-colour Pico CSS palette | Accepted as a workable starting point with tweaks |
| Sept. 15–16, 2026 | Incremental milestones and post-launch runner | Preserved in README; latest game version `1.1.0` |
| Sept. 16, 2026 | GitHub repo and planning README | Repository created; remains pre-development at Nov. 24 check |
| Sept. 2026 | Post-1.0 game / maintenance distinction | `1.0.0` complete site; `1.0.x` maintenance; `1.1.0` game in the README (earlier `1.0.2-ish` was a loose example) |
| Sept.–Nov. 2026 | Hosting preference | Netlify desired for website; process API/database content beforehand; DigitalOcean mentioned as possible upstream source, not finalized |
| Sept.–Nov. 2026 | GitHub mascot gag | Octocat/Bengal as public frenemies/private accomplices; **🐙🐈‍⬛** warning signature proposed |
| Nov. 2026 | Additional cat APIs/public API | Resist new APIs and finish `1.0`; a Bengal-site-as-a-service/API was a joke, not a requirement |
| Nov. 2026 | Void-cat companion | Black short-haired cat is “night gremlin” or “void cat”; possible crime partner cameo, with Bengal's new counterpart nickname undecided |
| Nov. 24, 2026 | Repo check | Only `README.md` and `.gitignore` at root; README says planning/pre-development and GitHub issues listing is empty |

### 12.2 Open decisions

- **Technology:** confirm Next.js or another framework; database (SQLite, PostgreSQL or alternative); whether Netlify is suitable on the available plan; upstream database location (possible DigitalOcean); and how updates trigger static builds or refreshes.
- **Brand/navigation:** final page names; final logo/illustration treatment (including chibi cat / PC-tower sketch); whether there is a dedicated Fun page; final typography, exact colour pairings, and optional void-cat/Octocat cameos.
- **Editorial controls:** definition of approved video channels/videos and any review workflow; whether Shorts/live are excluded; proportion of non-Bengal content.
- **API details:** final fields, cache expiry per provider, duplicate handling, refresh jobs, image hosting/display requirements and terms-of-use review.
- **Rescue details:** which geographies/search fields are available, how to represent location safely, handling of stale/adopted listings, and final warning text/interaction.
- **Governance:** original-code license, release/deployment process, GitHub issue/milestone creation, contributor guidance and update cadence.
- **Game:** precise scope, artwork and accessibility requirements to define after `1.0.0`.

### 12.3 Explicitly out of scope for the core release

A complete browser game, a new public Bengal API/service, additional third-party APIs solely for novelty, auto-approved open-ended YouTube search, unverified third-party content, exposing private rescue/foster addresses, a complicated content-management system, or unnecessary features added only because they are amusing. These would undermine the project's stated curation, safety and scope goals.

## 13. Ready-to-create work items

These are proposed GitHub Issues/milestones derived from the plan, **not existing issues**:

- **Foundation:** evaluate Netlify and preprocessing/DB update path; choose architecture; initialize app; implement shared layout/nav/footer; choose accessible palette pairings; add `.env.example`; document local setup and deployment flow.
- **Content:** write Home and breed facts; confirm sources; add glossary; define reusable card/data states.
- **Photos:** provider contracts; import/normalize; cache and metadata; attribution and alt-text policy; gallery.
- **Video:** stable IDs, allowlist/catalog, editorial approval process, metadata caching and accessible links/embeds.
- **Rescue:** API data model, Bengals-plus-mixes/all-cats filter, source links, freshness indicators, privacy-safe Leaflet map and text alternative, warning banner with optional 🐙🐈‍⬛ signature.
- **Quality & launch:** responsive/keyboard/screen-reader testing; privacy/credits/licensing; provider outage behaviour; deployment checks; release notes.
- **Later:** 404 Bengal runner, game accessibility/pause/reduced-motion, balance and polish. Keep Octocat/void-cat cameo copy in the low-priority ideas backlog; do **not** create a separate API/service issue.

## 14. References and provenance

**Primary, current project sources**

- [Bengals GitHub repository](https://github.com/jennifert/Bengals) — public project and source location.
- [README.md on `main`](https://github.com/jennifert/Bengals/blob/main/README.md) — written planning baseline, rechecked November 24, 2026.
- [`.gitignore` on `main`](https://github.com/jennifert/Bengals/blob/main/.gitignore) — current exclusion patterns, rechecked November 24, 2026.

**Earlier conversation-derived project context**

- August 28–29, 2026: site purpose, page sketches, APIs, curation, rescue banner/interview Easter egg, status jokes, cache/database model and Next.js consideration.
- September 15–16, 2026: palette, version scope, post-release runner idea, Netlify consideration, Octocat/Bengal joking, repository and README plan.
- November 2026: resist feature creep and additional APIs; public-service idea explicitly abandoned; short-haired black cat as void cat/night gremlin; website remains the focus.

**Note on completeness:** This updated document consolidates the Bengal-specific decisions and ideas from earlier and newer project discussions together with the GitHub README as of **November 24, 2026**. It is a **planning record**, not a line-by-line transcript, and should be amended whenever a choice is finalized or development moves into code.
