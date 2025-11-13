
# Cute Cat Swipe

A small React + Vite TypeScript app for swiping through cute cat cards (like/dislike). It uses Vite for bundling, React for UI, and Tailwind for styling. The UI includes components such as `CatCard`, `LoadingScreen`, and `Summary`.

## Features

- Swipeable cat cards (uses `react-swipeable`).
- Lightweight, Vite-powered dev server for fast iteration.
- TypeScript + React components under `src/`.

## Prerequisites

- Node.js 16+ (LTS recommended)
- npm (bundled with Node) or an equivalent package manager

On Windows, these instructions assume you're using PowerShell.

## Install

Open a terminal in the project folder and run:

```powershell
npm install
```

This installs the dependencies declared in `package.json`.

## Run (development)

Start the Vite dev server:

```powershell
npm run dev
```

By default Vite will print a localhost URL (for example `http://localhost:5173`) — open that in your browser.

## Build and Preview

Create a production build:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

## Available npm scripts

- `npm run dev` — start Vite dev server

## Project structure (important files)

- `index.html` — Vite entry HTML
- `src/main.tsx` — app bootstrap
- `src/App.tsx` — main app component
- `src/components/CatCard.tsx` — swipe card component
- `src/components/LoadingScreen.tsx` — loading UI
- `src/components/Summary.tsx` — summary/score UI

## Development notes

- The app uses `react-swipeable` for swipe gestures. Look for usage in `CatCard.tsx`.
- Tailwind is present in dependencies; check `index.css` / `App.css` for utility classes and Tailwind setup.
- If you add new TypeScript paths or change build targets, update `tsconfig*.json` accordingly.