# Development Conventions

## Technology

- Next.js App Router
- JavaScript (no TypeScript)
- Pico CSS with custom styles in `src/css/style.css`
- SQLite planned for persistent storage
- npm for package management

## Environment

- Never commit API credentials or secrets.
- Document configuration names in `.env.example`.
- Store local credentials in `.env.local`.
- Keep API credentials server-side.
- Never expose credentials using `NEXT_PUBLIC_`.

## Accessibility

- Use semantic HTML whenever possible.
- Provide one main landmark per page.
- Maintain keyboard-accessible navigation.
- Keep focus indicators visible.
- Provide meaningful page titles and headings.
- Use appropriate alt text for informative images.
- Respect reduced-motion preferences.
- Test both light and dark themes.
- Provide accessible alternatives to interactive maps.
- Include loading, empty, and error states.

## Quality Checks

Run before completing development issues:

`npm run check`

This runs ESLint, Prettier verification,
a production build, and Playwright accessibility tests.

Automated testing does not replace manual keyboard and screen-reader testing.