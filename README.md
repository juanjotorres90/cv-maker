# CV Maker

A single-page CV renderer built with pure HTML, CSS, and JavaScript. No frameworks, no build tools — just open `index.html` in a browser.

## Usage

1. Open `index.html` in any modern browser.
2. Use the dropdown to switch between English and Spanish.
3. Click **Export PDF** to open the browser print dialog — choose "Save as PDF" for an A4 export.

## Editing Your CV

All content lives in `js/data.js` inside the `CV_DATA` object. Each language is a top-level key (`en`, `es`).

### Update existing content

Edit the corresponding fields directly:

```js
profile: "Your new profile text here.",
```

Timeline entries (education/experience) are arrays of objects:

```js
{
  period: "2023 – Present",
  org: "Company Name",
  title: "JOB TITLE",
  description: "What you did there.",
}
```

Add, remove, or reorder entries in the arrays as needed.

### Change contact info

Each contact item has `icon`, `text`, and an optional `href`:

```js
{ icon: "email", text: "you@example.com", href: "mailto:you@example.com" }
```

Available icons: `email`, `phone`, `globe`, `mapPin`, `linkedin`, `github`. To add new icons, define the SVG in `js/icons.js`.

### Change skill badges

Each skill has a `name`, `color` (background), and `textColor`:

```js
{ name: "React", color: "#61dafb", textColor: "#000" }
```

### Add a new language

1. Copy an existing language block (e.g. `en`).
2. Paste it as a new key (e.g. `fr`).
3. Translate the content.

The language dropdown auto-discovers keys from `CV_DATA`, so no other changes are needed.

### Replace the profile photo

Swap `assets/photo.jpg` with your own image. Keep the same filename or update the `photo` path in `meta`:

```js
meta: {
  name: "Your Name",
  title: "Your Title",
  photo: "assets/photo.jpg",
},
```

## Customizing the Design

Edit `css/style.css`. Key variables are at the top:

```css
:root {
  --sidebar-bg: #2d2d2d;
  --sidebar-text: #e0e0e0;
  --sidebar-width: 30%;
  --accent: #3b82f6;
  --heading-color: #1a1a2e;
  --text-color: #333;
}
```

## File Structure

```
cv-maker/
├── index.html          # App shell
├── css/style.css       # Layout, theming, print styles
├── js/
│   ├── data.js         # All CV content (en + es)
│   ├── icons.js        # Inline SVG icons
│   ├── render.js       # Data → DOM rendering
│   └── app.js          # Language switcher, PDF export
└── assets/photo.jpg    # Profile photo
```
