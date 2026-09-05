# Personal academic website

A hand-built static site, hosted on GitHub Pages.

## How it works

- `config.js` — the one file to edit for site-wide changes: your name, email,
  links, and **which sections are switched on**. Set e.g. `teaching: true`
  and the Teaching link appears in the navigation on every page.
- `index.html`, `papers.html`, `notes.html`, `teaching.html`, `cv.html` — the
  pages. Each contains commented-out templates: copy one, remove the
  `<!-- -->` markers, and fill it in.
- `assets/style.css` — the design (colours at the top under `:root`).
- `assets/site.js` — builds the shared header/footer; you shouldn't need to
  touch it.

## Adding files

- Put your CV at `files/cv.pdf` (the CV page links to it).
- Put a photo at `assets/portrait.jpg` (the home page shows it automatically;
  without one, the space simply collapses).
- Put paper/note PDFs in `files/` and link them from the entry templates.

## Editing

Edit files directly on github.com (press `.` in the repo for a full editor,
or click any file → pencil icon), or clone the repo and push. Changes go
live at your `https://<username>.github.io` address within a minute or two.
