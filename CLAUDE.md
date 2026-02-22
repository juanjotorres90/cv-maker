# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Zero-dependency CV web app (pure HTML/CSS/JS). Renders an A4-formatted CV from a centralized data object, supports EN/ES language switching, and exports to PDF via `window.print()`.

## Development

No build tools or package manager. Open `index.html` directly in a browser or serve with any static server:

```bash
python3 -m http.server 8080
```

## Architecture

**Script load order matters** — no module system, globals linked by dependency chain:

1. `js/data.js` — `CV_DATA` object keyed by language (`en`, `es`). All content, skill colors, and UI strings live here.
2. `js/icons.js` — `ICONS` object mapping string keys to inline SVG strings (used by contact items).
3. `js/render.js` — Pure functions that read `CV_DATA[lang]` and return HTML strings via `innerHTML`. `renderCV(lang)` is the main entry point.
4. `js/app.js` — IIFE that wires language dropdown, auto-detects browser language, and binds `window.print()` for PDF export.

**CSS** (`css/style.css`): A4-fixed layout (210mm x 297mm), sidebar 30% + content flex, CSS custom properties at `:root` for theming. `@media print` block handles PDF output (hides `.no-print`, resets margins).

## Key Conventions

- **Adding a language**: Copy an existing block in `CV_DATA`, translate, add the new key. The dropdown auto-discovers keys.
- **Adding a skill**: Append to the `skills` array with `name`, `color`, `textColor`. Keep the array length even (2-column grid).
- **Adding an icon**: Define SVG in `ICONS` object, reference by key in contact items' `icon` field.
- **Adding a section**: Create a `render*()` function in `render.js`, add the data key to `CV_DATA`, call it from `renderCV()`.
- **Flags**: Inline SVGs (not emoji) for cross-platform consistency. All 16x12px with `vertical-align: -1px`.
- Timeline entries (education + experience) share the same shape: `{ period, org, title, description }`.
- Class names: kebab-case. JS identifiers/data keys: camelCase.
