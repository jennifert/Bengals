# Bengal Fan Page 🐆🐈

A fun, accessible fan site dedicated to Bengal cats — affectionately known as **danger floofs**, **chaos menaces**, and tiny household leopards.

> Fascinating animals are fun to learn about. That doesn't necessarily mean you should bring one home. 😸

This project will combine information about Bengal cats with curated photos and videos, rescue/adoption resources, and appropriately excessive amounts of cat humour.

**Not to be confused with The Bangles.**

## Project Status

🚧 **Active development — `0.1.0` foundation implemented**

The Next.js application is running locally, and implementation has started. The initial foundation includes:

- Next.js App Router with **JavaScript** (not TypeScript), React, and Pico CSS
- Shared header, navigation, footer, and a custom Bengal stylesheet
- Working **Home**, **Facts**, **Rescue & Adoption**, and **About** routes
- ESLint, Prettier, Playwright, and axe-core tooling
- Automated accessibility checks on all four routes (four tests passing in the latest local run)

**Foundation tracking:** all six `0.1.0` GitHub issues are closed. `.env.example`, `docs/DEVELOPMENT.md`, and the environment/SQLite Git exclusions are committed. The application is **not deployed**, and real breed content, API integrations, SQLite storage, and photo/rescue features belong to later milestones. Manual accessibility testing remains ongoing as the site grows.

The first complete public release remains targeted for `1.0.0`. See [GitHub Milestones](https://github.com/jennifert/Bengals/milestones) and [Issues](https://github.com/jennifert/Bengals/issues) for implementation tracking. Later milestones hold *Possible issues* notes until individual tickets are needed.

The detailed scope, decisions, and deferred ideas are recorded in the [project plan](docs/project-plan.md). Development conventions are in [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md).

## Planned Features

The initial website will include:

- Bengal breed information and fun facts
- Curated Bengal photography and videos
- Rescue and adoption listings
- Bengal-specific rescue filtering, with an option to view all cats
- Interactive rescue location maps
- Accessible alternatives to interactive maps
- Responsive and accessible design
- Cat-themed loading, error, and empty states
- Privacy-conscious API usage and caching

Photos and videos will initially be integrated into the
existing pages rather than requiring separate sections.

The Chaos Cat Game is planned for after version 1.0.0.

## Planned Data Sources

The project may use external APIs and services including:

### TheCatAPI

Bengal breed information and cat imagery.

### Unsplash

Curated photography with appropriate photographer attribution and links to the original content.

### YouTube

A curated collection of Bengal and cat-related videos.

The goal is **curation rather than unrestricted search results**. Videos and/or channels may be manually approved before appearing on the site.

### RescueGroups

Rescue and adoption information, with Bengals as the primary/default filter and an optional view for other cats.

### Leaflet

Interactive mapping for rescue/adoption locations.

An accessible non-map representation of location information will also be provided.

### HTTP Cat

Because ordinary HTTP errors clearly do not contain enough cats.

## API & Database Strategy

External APIs should not need to be queried every time somebody visits the website.

**Architecture decision:** Next.js with a planned **SQLite** data store (using `better-sqlite3`), populated by scheduled fetch/normalize/cache jobs. Neither the database nor the import jobs have been implemented yet.

A likely workflow is:

```text
External API
     ↓
Scheduled fetch
     ↓
Validation / normalization
     ↓
Local database
     ↓
Application
     ↓
User
```

The application is intended to be a website, not a public API service.

External data will be periodically fetched, validated, normalized, and cached or stored locally where appropriate.

A weekly refresh may be suitable for relatively static content, while time-sensitive rescue listings may require more frequent updates.

API failures should not make the entire website unusable when cached data is available.

## Environment Variables

Secrets and API credentials must **never** be committed to the repository.

The committed [`.env.example`](.env.example) contains **empty placeholders only**. No external API credentials are needed to run the current placeholder pages.

Example:

```env
# Cat data
CAT_API_KEY=

# Photography
UNSPLASH_ACCESS_KEY=

# YouTube
YOUTUBE_API_KEY=

# Rescue data
RESCUEGROUPS_API_KEY=

# Database
DATABASE_PATH=
```

Actual variable names will be finalized when the integrations are implemented.

Local credentials should be stored in `.env.local` or the equivalent environment-specific configuration and excluded through `.gitignore`.

## Accessibility

Accessibility is part of the project architecture rather than a final checklist before release.

Development will consider:

- Semantic HTML
- Keyboard navigation
- Visible focus indicators
- Appropriate colour contrast
- Screen-reader usability
- Alternative text
- Reduced-motion preferences
- Accessible forms and filters
- Accessible embedded media
- Accessible alternatives to interactive maps
- Touch target sizing
- Responsive layouts

The project now uses **Playwright + axe-core** to scan the four existing routes for common WCAG A/AA issues. All four automated tests passed in the latest local run. Automated checks will be supplemented by manual keyboard, focus, contrast, and screen-reader testing as development continues.

## Design

The site uses a simple, content-focused layout built around **Pico CSS**, with overrides in `src/css/style.css`. The initial custom palette has been introduced, and Pico currently follows the visitor's light/dark system preference.

Planned palette:

| Colour | Hex |
| --- | --- |
| Indian Red | `#c8586d` |
| Dark Slate Gray | `#1c202c` |
| Light Grey | `#d8d2ce` |
| Light Slate Gray | `#afb0b3` |
| Gray | `#867e79` |

Individual colour combinations will be tested for sufficient contrast before use.

## Planned Site Structure

```text
Home
├── Facts (Bengal breed information)
├── Rescue & Adoption
└── About
```

Additional pages may be added as the project develops.

## Fun Stuff

The site should be useful without taking itself too seriously.

Possible terminology and status messages include:

- Danger Floof
- Chaos Menace
- Tiny Household Leopard
- Bengal loading messages
- Bengal-themed error messages
- HTTP Cat integration
- Completely unnecessary warnings about the consequences of living with an athletic cat

Some non-Bengal cat content may also appear when it is simply too good not to include.

## Rescue Page

The rescue section will default to searching for **Bengal cats**.

Users may optionally broaden the results to include other cats.

The page may also contain a deliberately dramatic informational banner along the lines of:

> **ARE YOU SURE?**
>
> Bengals are intelligent, energetic, athletic cats that can require substantial enrichment and attention.
>
> Please research the breed before deciding whether one fits your home.

The warning is intended to be humorous while still pointing visitors toward responsible adoption and breed research.

## Future: Chaos Cat Game 🐈💨

The game is intentionally **post-1.0 scope**.

After the primary website is complete, a small browser game inspired by the simplicity of the Chrome offline dinosaur game may be added.

Instead of a dinosaur:

**Bengal.**

Naturally.

Potential features include:

- Running Bengal
- Jumping
- Obstacles
- Score tracking
- Keyboard controls
- Touch controls
- Accessible game controls/options
- Reduced-motion support
- Pause functionality
- 404-page integration

The website must remain completely usable without playing the game.

## Development Roadmap

Planned release structure:

| Version | Focus |
| --- | --- |
| `0.1.0` | Project foundation |
| `0.2.0` | Bengal basics and site content |
| `0.3.0` | Cat data and photography |
| `0.4.0` | Curated videos |
| `0.5.0` | Rescue and adoption |
| `0.6.0` | Accessibility and polish |
| `1.0.0` | First complete release |
| `1.0.x` | Maintenance and bug fixes |
| `1.1.0` | Chaos Cat Game |

Ideas beyond the current roadmap should generally be recorded as future ideas rather than immediately added to a release milestone.

This is an important anti-feature-creep mechanism.

Especially for this project.

## Development

The application is initialized with **Next.js App Router**, JavaScript, npm, Pico CSS, and a local development/test toolchain. The current pages are placeholders, not finished content.

### Local setup

Requires a suitable current Node.js and npm installation. Clone and install dependencies:

```bash
git clone https://github.com/jennifert/Bengals.git
cd Bengals
npm install
npx playwright install chromium
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the local site. Configuration names are documented as empty placeholders in the committed `.env.example` template. **Do not put secrets in Git.** A `.env.local` file is only needed later when integrations require credentials.

For future configuration, copy `.env.example` to `.env.local` using `cp .env.example .env.local` on macOS (or a Unix-style shell), or `Copy-Item .env.example .env.local` in Windows PowerShell.

### Project structure

```text
src/
├── app/             # App Router layout and Home / Facts / Rescue / About routes
├── components/      # Reusable header and footer
├── css/style.css    # Bengal overrides layered after Pico CSS
└── tests/           # Playwright accessibility checks
```

### Quality checks

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint |
| `npm run format` | Apply Prettier formatting |
| `npm run format:check` | Check formatting without changes |
| `npm run build` | Verify a production build |
| `npm run test:a11y` | Run Playwright + axe-core page scans |
| `npm run check` | Run lint, formatting check, build, and accessibility tests |

Manual keyboard and screen-reader checks remain essential. Database migrations, scheduled refreshes, and deployment instructions will be documented when those features are implemented.

## Hosting & Deployment

**DigitalOcean Droplet is the current production-hosting preference** because a continuously updated SQLite database needs persistent storage. Netlify remains an option for previews or an architecture adapted to serverless storage; it is not the selected host for a writable on-disk SQLite database.

No deployment has been configured. The final deployment architecture will depend on the database, caching, and scheduled refresh requirements. Development supports both Windows and macOS.

## Contributing

This is primarily a personal hobby project, but suggestions, bug reports, accessibility feedback, and improvements are welcome through GitHub Issues.

Please do not submit API credentials, private keys, or other secrets in issues or pull requests.

## Content & Attribution

External photographs, videos, rescue listings, and other API-provided content remain the property of their respective creators and providers.

The application will provide attribution and links as required by each service's terms.

Use of an external API does not imply endorsement by or affiliation with that provider.

## License

The source-code license has not yet been finalized. Any default license field created by `npm init` is not, by itself, a final licensing decision.

The eventual license will apply to the project's original source code and **will not grant rights to third-party photographs, videos, API data, trademarks, or other externally sourced content**.

## Disclaimer

This is an unofficial fan/educational project.

It is not affiliated with Bengal cat breeders, rescue organizations, TheCatAPI, Unsplash, YouTube, RescueGroups, Leaflet, HTTP Cat, or other referenced services.

Rescue listings and other externally sourced information should be verified with the organization responsible for the original listing before making adoption or travel decisions.

---

Made for fun, learning, accessibility practice, and an entirely reasonable appreciation of chaos floofs. 🐆🐈
