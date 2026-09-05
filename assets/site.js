// Builds the shared header, nav and footer on every page from config.js.
// Sections switched off in SITE.sections disappear from the nav everywhere.

(function () {
  const NAV_ITEMS = [
    { key: "home",     label: "About",    href: "index.html",    always: true },
    { key: "papers",   label: "Papers",   href: "papers.html" },
    { key: "notes",    label: "Notes",    href: "notes.html" },
    { key: "teaching", label: "Teaching", href: "teaching.html" },
    { key: "cv",       label: "CV",       href: "cv.html" },
    { key: "misc",     label: "Misc",     href: "misc.html" },
  ];

  const page = document.body.dataset.page || "home";

  // ----- header -----
  const header = document.createElement("header");
  const links = NAV_ITEMS
    .filter(item => item.always || SITE.sections[item.key])
    .map(item =>
      `<a href="${item.href}"${item.key === page ? ' class="current"' : ""}>${item.label}</a>`)
    .join("");

  header.innerHTML =
    `<div class="wrap header-inner">
       <a class="site-name" href="index.html">${SITE.name}</a>
       <nav>${links}<button class="theme-toggle" type="button"
         aria-label="Toggle light/dark mode" title="Toggle light/dark mode"></button></nav>
     </div>`;
  document.body.prepend(header);

  // ----- favicon -----
  const fav = document.createElement("link");
  fav.rel = "icon";
  fav.href = "data:image/svg+xml," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
    '<rect width="64" height="64" rx="14" fill="#7d2e2b"/>' +
    '<text x="32" y="45" font-family="Georgia,serif" font-size="38" fill="#faf7f2" text-anchor="middle">D</text></svg>');
  document.head.append(fav);

  // ----- light/dark toggle -----
  const toggle = header.querySelector(".theme-toggle");
  const theme = () =>
    document.documentElement.dataset.theme ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const paint = () => { toggle.textContent = theme() === "dark" ? "☀" : "☾"; };
  paint();
  toggle.addEventListener("click", () => {
    const next = theme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    paint();
  });

  // ----- footer -----
  const footer = document.createElement("footer");
  const year = new Date().getFullYear();
  const parts = [];
  if (SITE.github)
    parts.push(`<a href="https://github.com/${SITE.github}">GitHub</a>`);
  footer.innerHTML =
    `<div class="wrap">
       <span>© ${year} ${SITE.name}</span>
       <span>${parts.join(" · ")}</span>
     </div>`;
  document.body.append(footer);

  // ----- hide research section on home if toggled off -----
  if (!SITE.sections.research) {
    document.querySelectorAll("[data-section='research']")
      .forEach(el => el.remove());
  }

  // ----- contact row (home page) -----
  const contact = document.querySelector(".contact");
  if (contact) {
    const items = [];
    if (SITE.email)
      items.push(`<li><span class="label">Email</span><a href="mailto:${SITE.email}">${SITE.email}</a></li>`);
    if (SITE.arxiv)
      items.push(`<li><span class="label">arXiv</span><a href="${SITE.arxiv}">profile</a></li>`);
    if (SITE.linkedin)
      items.push(`<li><span class="label">LinkedIn</span><a href="${SITE.linkedin}">profile</a></li>`);
    contact.innerHTML = items.join("");
  }
})();
