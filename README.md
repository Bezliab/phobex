# Phobex — React

An immersive phobia discovery platform built with React + Vite. Search any fear and instantly see its clinical name, psychological profile, and atmospheric background.

## Quick Start

```bash
cd Phobex
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Project Structure

```
Phobex/
├── index.html                        # Vite HTML entry point
├── vite.config.js                    # Vite + React plugin config
├── package.json
└── src/
    ├── main.jsx                      # React root mount
    ├── App.jsx                       # Root component — state & view routing
    ├── App.module.css
    ├── data/
    │   └── phobias.js                # 20 phobias with full metadata
    ├── hooks/
    │   ├── useDebounce.js            # Debounce hook (220ms default)
    │   └── useBackground.js          # Dynamic bg image + CSS accent theming
    ├── utils/
    │   └── fuzzySearch.js            # 5-tier fuzzy search engine (no deps)
    ├── styles/
    │   └── global.css                # CSS custom properties, keyframes, reset
    └── components/
        ├── Header.jsx / .module.css  # Logo + Random + Info buttons
        ├── HeroSection.jsx / .module.css  # Title, search, quick tags
        ├── SearchBar.jsx / .module.css    # Input, suggestions, keyboard nav
        ├── ResultCard.jsx / .module.css   # Full phobia profile card
        ├── NoResult.jsx / .module.css     # Zero-results state + suggestions
        ├── InfoModal.jsx / .module.css    # About modal with focus trap
        └── Toast.jsx / .module.css        # Auto-dismissing status toast
```

## Features

- **Fuzzy search** — 5-tier scoring: exact → starts-with → contains → word-level → char-sequential
- **Debounced input** — 200ms debounce, no unnecessary renders
- **Keyboard-first** — `↑ ↓` navigate suggestions, `Enter` confirms, `Escape` goes back, `/` or `⌘K` focuses search
- **Dynamic backgrounds** — atmospheric images fade in per phobia with Ken Burns scale effect
- **Accent theming** — `--accent` CSS variable shifts site-wide per phobia (purple, cyan, amber, etc.)
- **Random phobia** — never repeats the current one
- **Share** — native Web Share API on mobile, clipboard fallback on desktop
- **Info modal** — focus-trapped, Escape to close, backdrop-click to close
- **Accessible** — ARIA live regions, roles, labels, focus management
- **Responsive** — mobile, tablet, desktop

## Adding Phobias

Edit `src/data/phobias.js`. Each entry:

```js
{
  id: 'unique-id',
  name: 'Clinical Name',
  fear: 'what they fear',
  keywords: ['keyword', 'synonym'],
  description: 'Detailed paragraph...',
  prevalence: 'X% of people',
  category: 'Animal | Environmental | Situational | Social | Health-Based | Existential | Pattern-Based',
  accentColor: '#hexcolor',
  backgroundImage: 'https://...',
}
```

## Scripts

| Command         | Description              |
|-----------------|--------------------------|
| `npm run dev`   | Start dev server (HMR)   |
| `npm run build` | Production build         |
| `npm run preview` | Preview production build |
