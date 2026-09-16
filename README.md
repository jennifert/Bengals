# Bengal Fan Page 🐆🐈

A fun, accessible fan site dedicated to Bengal cats — affectionately known as **danger floofs**, **chaos menaces**, and tiny household leopards.

> Fascinating animals are fun to learn about. That doesn't necessarily mean you should bring one home. 😸

This project will combine information about Bengal cats with curated photos and videos, rescue/adoption resources, and appropriately excessive amounts of cat humour.

**Not to be confused with The Bangles.**

## Project Status

🚧 **Planning / Pre-development**

Development has not started yet. This repository will be used to build the project incrementally through a series of pre-1.0 milestones.

See the GitHub Issues and Milestones for the development roadmap once they are available.

## Planned Features

The initial site is planned to include:

- Bengal breed information
- Bengal-themed terminology and humour
- Curated Bengal photography
- Curated Bengal and cat videos
- Rescue and adoption resources
- Bengal-specific rescue filtering
- Optional all-cat rescue results
- Location/map support for rescue listings
- Accessible loading, empty, and error states
- Cat-themed HTTP status messages
- Responsive design
- Accessibility as a core project requirement
- Privacy-conscious API usage and caching

After the main site reaches `1.0.0`, a small Bengal-themed browser game is planned as a separate feature release.

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

Where appropriate, API results will be periodically fetched, normalized, and stored locally.

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

Refresh frequency will depend on the type of information. Relatively static content such as photographs may be refreshed infrequently, while rescue information may require more frequent updates.

API failures should not make the entire website unusable when cached data is available.

## Environment Variables

Secrets and API credentials must **never** be committed to the repository.

The project will include an `.env.example` documenting required configuration.

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
DATABASE_URL=
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

Automated accessibility testing will be supplemented by manual keyboard and screen-reader testing.

## Design

The site will use a simple, content-focused layout built around Pico CSS.

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
├── About Bengals
├── Photos
├── Videos
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

Development instructions will be added once the project's final framework and dependencies are selected.

The eventual setup should be approximately:

```bash
git clone <repository-url>
cd bengal-fan-page

npm install

cp .env.example .env.local

npm run dev
```

Additional database initialization and migration instructions will be documented here once implemented.

## Contributing

This is primarily a personal hobby project, but suggestions, bug reports, accessibility feedback, and improvements are welcome through GitHub Issues.

Please do not submit API credentials, private keys, or other secrets in issues or pull requests.

## Content & Attribution

External photographs, videos, rescue listings, and other API-provided content remain the property of their respective creators and providers.

The application will provide attribution and links as required by each service's terms.

Use of an external API does not imply endorsement by or affiliation with that provider.

## License

The source-code license has not yet been finalized.

The eventual license will apply to the project's original source code and **will not grant rights to third-party photographs, videos, API data, trademarks, or other externally sourced content**.

## Disclaimer

This is an unofficial fan/educational project.

It is not affiliated with Bengal cat breeders, rescue organizations, TheCatAPI, Unsplash, YouTube, RescueGroups, Leaflet, HTTP Cat, or other referenced services.

Rescue listings and other externally sourced information should be verified with the organization responsible for the original listing before making adoption or travel decisions.

---

Made for fun, learning, accessibility practice, and an entirely reasonable appreciation of chaos floofs. 🐆🐈
