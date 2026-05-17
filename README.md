# Stopwatch App

A small React + TypeScript + Vite app that implements a simple stopwatch with start, stop, lap, and reset functionality. Built with Vite, React 19, TypeScript and Tailwind CSS.

## Features
- Start / Stop / Reset
- Lap recording with timestamps
- Responsive layout using Tailwind CSS

## Quick start
Requirements: Node.js 18+ and npm (or pnpm/yarn).

1. Install dependencies

   npm install

2. Start development server

   npm run dev

3. Build for production

   npm run build

4. Preview production build

   npm run preview

5. Lint the project

   npm run lint

## Project structure
- src/ — application source (App.tsx, components, styles)
- public/ — static assets
- index.html — Vite entry
- vite.config.ts — Vite config

## Technologies
- React 19
- TypeScript
- Vite
- Tailwind CSS
- ESLint

## Development notes
- Type definitions are included (@types/react, @types/node).
- Tailwind is configured; edit styles in src/index.css / App.css.
- To add tests, integrate a test runner (Vitest, Jest, or similar).

## Deployment
Build output is produced by `npm run build` and can be served by any static host (Netlify, Vercel, GitHub Pages, nginx).

## Contributing
Contributions welcome. Open an issue or a PR with a clear description of the change.

## License
MIT

