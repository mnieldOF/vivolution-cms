# Vivolution Website

The Vivolution company website, built with [Gatsby](https://www.gatsbyjs.com/) and powered by [DatoCMS](https://www.datocms.com).

Content (text, images, SEO metadata) is managed in DatoCMS. Gatsby reads that content and generates a fast, static website.

---

## Prerequisites

Before you can run this project you need the following installed:

- **Node.js v18** — the project requires this specific version (Node 24+ is not supported)
- **nvm-windows** — recommended for managing Node versions on Windows ([download here](https://github.com/coreybutler/nvm-windows/releases))

### Install Node v18 via nvm

```bash
nvm install 18
nvm use 18
node --version  # should print v18.x.x
```

---

## Getting Started

### 1. Navigate to the project folder

```bash
cd C:\Users\{yourUsernameHere}\RiderProjects\vivolution-cms
```

Always run commands from this folder, not from another directory.

### 2. Install dependencies

```bash
npm install
```

This downloads all required packages into a `node_modules/` folder. Only needs to be run once, or after pulling changes that update `package.json`.

### 3. Create the `.env` file

Create a file called `.env` in the project root with the DatoCMS API token:

```
DATO_API_TOKEN=your_token_here - This can be found in 1 pass.
```

Get the token from the DatoCMS dashboard under **Settings → API Tokens**. This file is not committed to git and must be created manually on each machine.

### 4. Start the development server

```bash
npm run develop
```

After 30–60 seconds, the site will be available at `http://localhost:8000`.

The dev server has **live reload** — any changes you save to files will automatically refresh the browser.

---

## Available Commands

| Command | Description |
|---|---|
| `npm run develop` | Start local dev server at `http://localhost:8000` |
| `npm run build` | Build the production-ready site into the `public/` folder |
| `npm run serve` | Preview the production build locally |
| `npm run clean` | Clear the `.cache` and `public` folders (run this if you get odd errors) |

---

## Project Structure

```
vivolution-cms/
├── src/
│   ├── pages/          # One file per page (index.js = homepage, about.js = /about, etc.)
│   ├── components/     # Reusable UI sections (header, footer, hero, etc.)
│   ├── templates/      # Templates for dynamic pages (e.g. individual blog posts)
│   └── styles/         # SCSS stylesheets organised by component
├── gatsby-config.js    # Gatsby settings and plugin configuration
├── gatsby-node.js      # Gatsby Node API (advanced build configuration)
├── package.json        # Project dependencies and scripts
└── .env                # Secret API keys — do NOT commit this file
```

### How pages work

- Files in `src/pages/` automatically become routes. For example, `src/pages/about.js` is served at `/about`.
- Dynamic pages (like `/blog/some-post-slug`) are generated from DatoCMS data using files like `src/pages/blog/{DatoCmsBlog.slug}.js`.

### How content works

All copy, images, and metadata come from DatoCMS — not from the code. The flow is:

```
DatoCMS (editors update content)
    ↓
Gatsby fetches it via GraphQL at build time
    ↓
React components render it into HTML
    ↓
Users see the finished website
```

Each page file contains a GraphQL query at the bottom that specifies what data to fetch from DatoCMS. If a field name in the code doesn't match what exists in DatoCMS, you'll get a GraphQL validation error — fix it by checking the field names in DatoCMS under **Settings → Models**.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Gatsby v5](https://www.gatsbyjs.com/) | Static site generator |
| [React 18](https://react.dev/) | UI component framework |
| [DatoCMS](https://www.datocms.com/) | Headless CMS (content management) |
| [SCSS/SASS](https://sass-lang.com/) | Styling |
| [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup) | Form handling and validation |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [npm](https://www.npmjs.com/) | Package manager |

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `node` or `nvm` not recognised | Close and reopen terminal, then retry. If using Rider, restart the IDE after installing nvm. |
| `Couldn't find a package.json` error | You're in the wrong folder — run `cd C:\Users\{yourUsernameHere}\RiderProjects\vivolution-cms` first |
| GraphQL field error on startup | A field name in the code doesn't match DatoCMS — check **Settings → Models** in DatoCMS and update the field name in the relevant component |
| Strange errors after pulling new code | Run `npm run clean` then `npm run develop` |
| `node_modules` errors | Delete the `node_modules` folder and run `npm install` again |
| LMDB / buffer errors on startup | You're likely on Node 24+. Switch to Node 18: `nvm use 18` then retry. |
| Site builds but shows no content | Check your `.env` file exists and contains a valid `DATO_API_TOKEN` |
