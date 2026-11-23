import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "./styles.css";
import { categories, site, tabs, themes } from "./data.js";

const app = document.querySelector("#app");
const themeColors = {
  cyberpunk: "#070910",
  vigilai: "#071422",
  clinical: "#eef2f5",
};
const desktopQuery = window.matchMedia("(min-width: 1100px)");

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (value == null || value === false) continue;
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else node.setAttribute(key, value);
  }
  for (const child of children) {
    if (child == null) continue;
    node.append(child);
  }
  return node;
}

function externalLink(href, label) {
  const link = el("a", { href, target: "_blank", rel: "noopener noreferrer" });
  link.append(label, el("span", { class: "sr-only", text: " (opens in a new tab)" }));
  return link;
}

function textLink(item) {
  if (item.href.startsWith("http")) return externalLink(item.href, item.label);
  return el("a", { href: item.href, text: item.label });
}

const themeIds = themes.map((theme) => theme.id);

function currentTheme() {
  const value = document.documentElement.getAttribute("data-theme");
  return themeIds.includes(value) ? value : "vigilai";
}

function applyTheme(id, options = {}) {
  document.documentElement.setAttribute("data-theme", id);
  if (options.persist) {
    try {
      localStorage.setItem("theme-choice", id);
    } catch (e) {
      /* storage can be blocked; the page still switches */
    }
    const url = new URL(location.href);
    url.searchParams.set("theme", id);
    history.replaceState(null, "", url);
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", themeColors[id]);
}

function renderThemeButton() {
  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  icon.setAttribute("class", "palette-icon");
  icon.setAttribute("viewBox", "0 0 24 24");
  icon.setAttribute("aria-hidden", "true");
  icon.innerHTML =
    '<path fill="currentColor" fill-rule="evenodd" d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>';
  const button = el("button", {
    class: "theme-toggle",
    type: "button",
    "data-theme-toggle": "true",
    "aria-label": "Change look",
  }, [icon, el("span", { text: "Change look" })]);
  button.addEventListener("click", () => {
    const index = themeIds.indexOf(currentTheme());
    applyTheme(themeIds[(index + 1) % themeIds.length], { persist: true });
  });
  return button;
}

function renderProfile() {
  const detailsInner = el("div", { class: "profile-details-inner" }, [
    el(
      "ul",
      { class: "contact-rows" },
      [
        el("li", {}, [
          el("span", { class: "row-label", text: "Email" }),
          textLink(site.contact[0]),
        ]),
        el("li", {}, [
          el("span", { class: "row-label", text: "Location" }),
          el("span", { text: site.location }),
        ]),
        ...site.contact.slice(1).map((item) => {
          const labels = {
            "linkedin.com/in/sangeeta-sinha76": "LinkedIn",
            "vigilaisolutions.com": "Website",
            "github.com/vigilai-stack": "GitHub",
          };
          return el("li", {}, [
            el("span", { class: "row-label", text: labels[item.label] || "Link" }),
            textLink(item),
          ]);
        }),
      ],
    ),
  ]);

  const details = el("div", { id: "profile-contacts", class: "profile-details" }, [detailsInner]);
  const toggle = el("button", {
    class: "contacts-toggle",
    type: "button",
    "aria-expanded": "false",
    "aria-controls": "profile-contacts",
    text: "Show contacts",
  });

  const profile = el("aside", { class: "profile", "aria-label": "Profile" }, [
    el("div", { class: "profile-top" }, [
      el("div", { class: "monogram", "aria-hidden": "true", text: "SS" }),
      el("div", { class: "profile-id" }, [
        el("h1", { text: site.name }),
        el("p", { class: "role", text: site.role }),
        el("p", { class: "descriptor", text: site.descriptor }),
      ]),
    ]),
    el("div", { class: "profile-actions" }, [toggle, renderThemeButton()]),
    details,
  ]);

  function setOpen(open) {
    profile.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.textContent = open ? "Hide contacts" : "Show contacts";
    if (open || desktopQuery.matches) details.removeAttribute("inert");
    else details.setAttribute("inert", "");
  }

  function syncToViewport(fromBreakpoint) {
    if (desktopQuery.matches) {
      toggle.hidden = true;
      setOpen(true);
      return;
    }
    toggle.hidden = false;
    if (fromBreakpoint || !profile.classList.contains("is-open")) setOpen(false);
  }

  toggle.addEventListener("click", () => {
    setOpen(!profile.classList.contains("is-open"));
  });
  desktopQuery.addEventListener("change", () => syncToViewport(true));
  syncToViewport(false);
  return profile;
}

function sectionTitle(text, id) {
  return el("h2", { id, text });
}

function renderClosing() {
  const phrase = "Let's talk.";
  const text = site.about.closing;
  const splitAt = text.lastIndexOf(phrase);
  const paragraph = el("p", { class: "closing" });
  paragraph.append(
    text.slice(0, splitAt),
    el("a", { href: site.contact[0].href, text: "Let's talk" }),
    ".",
  );
  return paragraph;
}

function renderAbout() {
  return el("section", {
    class: "tab-panel",
    id: "about",
    role: "tabpanel",
    "aria-labelledby": "tab-about",
    tabindex: "0",
  }, [
    sectionTitle("About", "about-title"),
    el("p", { class: "place", text: site.about.place }),
    el("p", { class: "statement", text: site.statement }),
    ...site.about.paragraphs.map((paragraph) => el("p", { text: paragraph })),
    renderClosing(),
  ]);
}

function renderResume() {
  const groups = site.experience.map((group) =>
    el("div", { class: "exp-group" }, [
      el("h3", { text: group.heading }),
      el(
        "ol",
        { class: "timeline" },
        group.roles.map((role) =>
          el("li", {}, [
            el("p", { class: "dates", text: role.dates }),
            el("div", {}, [
              role.kicker ? el("p", { class: "context", text: role.kicker }) : null,
              el("h4", { text: role.title }),
              el("p", { class: "org", text: role.org }),
              role.focus ? el("p", { class: "focus", text: role.focus }) : null,
              role.note ? el("p", { class: "note", text: role.note }) : null,
              el(
                "ul",
                {},
                role.bullets.map((bullet) => el("li", { text: bullet })),
              ),
            ]),
          ]),
        ),
      ),
    ]),
  );

  return el("section", {
    class: "tab-panel",
    id: "resume",
    role: "tabpanel",
    "aria-labelledby": "tab-resume",
    hidden: true,
    tabindex: "0",
  }, [
    sectionTitle("Resume", "resume-title"),
    ...groups,
    el("h3", { text: "Skills" }),
    el(
      "ul",
      { class: "skill-grid" },
      site.skills.map((skill) =>
        el("li", { class: "card" }, [
          el("h4", { text: skill.name }),
          el("p", { text: skill.text }),
        ]),
      ),
    ),
    el("h3", { text: "Certifications" }),
    el(
      "ul",
      { class: "plain-list" },
      site.certifications.map((item) => el("li", { text: item })),
    ),
    el("h3", { text: "Training" }),
    el("p", { text: site.training }),
    el("h3", { text: "Education" }),
    el(
      "ol",
      { class: "timeline education" },
      site.education.map((item) => el("li", {}, [el("p", { text: item })])),
    ),
  ]);
}

function renderProject(project) {
  const body = [
    el("p", { class: "card-cats", text: project.categories.join(" · ") }),
    project.context ? el("p", { class: "context", text: project.context }) : null,
    el("h3", { text: project.name }),
    el("p", { class: "tagline", text: project.tagline }),
    el("p", { text: project.description }),
  ];
  if (project.builtWith) {
    body.push(
      el("div", { class: "built" }, [
        el("p", { class: "built-label", text: "Built with" }),
        el(
          "ul",
          { class: "chips" },
          project.builtWith.map((item) => el("li", { text: item })),
        ),
      ]),
    );
  }
  const meta = [];
  if (project.tests) meta.push(el("p", { class: "tests", text: project.tests }));
  if (project.labels?.length || project.demo) {
    const row = el("p", { class: "card-links" });
    for (const label of project.labels || []) {
      row.append(el("span", { class: "text-label", text: label }));
    }
    if (project.demo) row.append(textLink(project.demo));
    meta.push(row);
  }
  if (meta.length) body.push(el("div", { class: "card-meta" }, meta));
  const card = el("article", { class: "card project-card" }, body);
  card.dataset.categories = project.categories.join("|");
  return card;
}

function renderPortfolio() {
  const cards = site.projects.map(renderProject);
  const status = el("p", { class: "filter-status", "aria-live": "polite" });
  const filters = el("div", { class: "filters", role: "toolbar", "aria-label": "Project categories" });

  function applyFilter(category) {
    let shown = 0;
    for (const card of cards) {
      const match = category === "All" || card.dataset.categories.split("|").includes(category);
      card.hidden = !match;
      if (match) shown += 1;
    }
    for (const button of filters.querySelectorAll("button")) {
      const on = button.dataset.category === category;
      button.setAttribute("aria-pressed", on ? "true" : "false");
    }
    status.textContent = category === "All" ? `${shown} projects` : `${shown} in ${category}`;
  }

  for (const category of categories) {
    const button = el("button", {
      type: "button",
      text: category,
      "data-category": category,
      "aria-pressed": category === "All" ? "true" : "false",
    });
    button.addEventListener("click", () => applyFilter(category));
    filters.append(button);
  }
  applyFilter("All");

  return el("section", {
    class: "tab-panel",
    id: "portfolio",
    role: "tabpanel",
    "aria-labelledby": "tab-portfolio",
    hidden: true,
    tabindex: "0",
  }, [
    sectionTitle("Selected projects", "portfolio-title"),
    filters,
    status,
    el("div", { class: "card-grid" }, cards),
  ]);
}

function renderContact() {
  return el("section", {
    class: "tab-panel",
    id: "contact",
    role: "tabpanel",
    "aria-labelledby": "tab-contact",
    hidden: true,
    tabindex: "0",
  }, [
    sectionTitle("Contact", "contact-title"),
    el("p", { class: "place", text: site.location }),
    el("p", { class: "contact-email" }, [textLink(site.contact[0])]),
    el(
      "ul",
      { class: "contact-list" },
      site.contact.slice(1).map((item) => el("li", {}, [textLink(item)])),
    ),
    renderClosing(),
  ]);
}

function icon(name) {
  const paths = {
    about: "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-3.3 0-8 1.7-8 5v1h16v-1c0-3.3-4.7-5-8-5z",
    resume: "M6 2h8l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V7h3.5",
    portfolio: "M4 4h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm9 0h7v7h-7z",
    contact: "M3 5h18v14H3zm0 0 9 7 9-7",
  };
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("class", "tab-icon");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", paths[name]);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "currentColor");
  path.setAttribute("stroke-width", "1.7");
  path.setAttribute("stroke-linejoin", "round");
  svg.append(path);
  return svg;
}

function renderTabs(panels) {
  const tabButtons = tabs.map((tab, index) => {
    const button = el("button", {
      id: `tab-${tab.id}`,
      type: "button",
      role: "tab",
      "aria-selected": index === 0 ? "true" : "false",
      "aria-controls": tab.id,
      tabindex: index === 0 ? "0" : "-1",
    });
    button.append(icon(tab.id), el("span", { text: tab.label }));
    return button;
  });
  const list = el("div", { class: "tablist", role: "tablist", "aria-label": "Sections" }, tabButtons);

  function select(id, moveFocus) {
    for (const button of tabButtons) {
      const on = button.getAttribute("aria-controls") === id;
      button.setAttribute("aria-selected", on ? "true" : "false");
      button.tabIndex = on ? 0 : -1;
      if (on && moveFocus) button.focus();
    }
    for (const panel of panels) {
      const on = panel.id === id;
      panel.hidden = !on;
    }
    const url = new URL(location.href);
    url.hash = id;
    history.replaceState(null, "", url);
  }

  list.addEventListener("click", (event) => {
    const button = event.target.closest("[role='tab']");
    if (button) select(button.getAttribute("aria-controls"), false);
  });
  list.addEventListener("keydown", (event) => {
    const current = tabButtons.findIndex((button) => button.getAttribute("aria-selected") === "true");
    if (current < 0) return;
    let next = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (current + 1) % tabButtons.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (current - 1 + tabButtons.length) % tabButtons.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabButtons.length - 1;
    if (next == null) return;
    event.preventDefault();
    select(tabButtons[next].getAttribute("aria-controls"), true);
  });

  const hash = location.hash.replace("#", "");
  if (tabs.some((tab) => tab.id === hash)) select(hash, false);
  return { list, select };
}

const profile = renderProfile();
const panels = [renderAbout(), renderResume(), renderPortfolio(), renderContact()];
const { list } = renderTabs(panels);
const main = el("main", { id: "content", class: "panel", tabindex: "-1" }, [
  list,
  ...panels,
]);
const shell = el("div", { class: "shell" }, [profile, main]);
const footer = el("footer", { class: "site-footer" }, [
  el("p", { text: site.footer }),
]);
app.replaceChildren(shell, footer);
applyTheme(currentTheme());
