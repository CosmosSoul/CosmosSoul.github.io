/* =========================================================
   Portfolio v3 — main.js
   ========================================================= */

// ── PROJECT DATA ─────────────────────────────────────────
// Categories: game-design, analysis, music, academic, other
// Set published: false to keep a card in this file without showing it.
// Leave links empty until a real file or URL exists — "#" buttons are not rendered.
const projects = [
    // ── 2026 ──────────────────────────────────────────────
    {
        id: "game-design-joyed-literacy",
        title: "Ground Control",
        category: "game-design",
        year: 2026,
        thumbnail: "",
        emoji: "🌱",
        description: "In progress with Joy Education: working with students, teachers, and caregivers to build research-informed, game-based literacy games — learning mechanics kids can grow with while they play.",
        comingSoon: true,
        links: []
    },
    {
        id: "game-design-assimulation",
        title: "Assimulation",
        category: "game-design",
        year: 2026,
        thumbnail: "",
        emoji: "🎭",
        description: "A Global Game Jam 2026 social sim: assign masks from NPC thoughts and keep a festival from collapsing as happiness spreads — or sours.",
        summary: "Made with Sam You'll and Lendelacreme in Unity. Players click NPCs to read their thoughts, drag on a fitting mask, and watch shade-of-grey happiness rise or fall through social interactions. A wrong mask can be mashed off and retried — but let happiness drop too far and the festival suffers.",
        itchEmbed: "https://itch.io/embed-upload/16341037?color=333333&border_width=0&border_radius=0",
        links: [
            { text: "Play on Itch.io", url: "https://sam-youll.itch.io/assimulation", icon: "fa-gamepad", style: "solid" }
        ]
    },
    // ── 2025 ──────────────────────────────────────────────
    {
        id: "game-design-moon-phases-vr",
        title: "Alien Farm VR",
        category: "game-design",
        year: 2025,
        thumbnail: "",
        emoji: "🌔",
        description: "A VR learning-game design for practicing moon phases for Grades 5~6 based on Mislevy's Evidence-Centered Design for assessment, design, pedagogy, and session flow.",
        summary: "Design and storyboard deck covering the theoretical framework, the core game loop, and 2 example levels. Expand this card to page through the slides here, or open them in Canva.",
        slidesEmbed: "https://www.canva.com/design/DAG2Xss5gew/YvDS3W553V2I-L9cXM9pTQ/view?embed",
        links: [
            { text: "Open in Canva", url: "https://www.canva.com/design/DAG2Xss5gew/YvDS3W553V2I-L9cXM9pTQ/view", icon: "fa-up-right-from-square", style: "ghost" }
        ]
    },
    {
        id: "game-design-phonics-capstone",
        title: "Bubble Letters",
        category: "game-design",
        year: 2025,
        thumbnail: "",
        emoji: "🔤",
        description: "A phonics learning game grounded in Science of Reading research, designed and storyboarded for early literacy practice that also served as my Capstone Thesis Design Project.",
        summary: "Capstone expo poster: research frame, core loop, and how the game turns phonics practice into play. Expand the card to preview the PDF.",
        links: [
            { text: "Expo poster (PDF)", url: "assets/pdfs/SP25.Th2.ExpoPoster.darrylH.v3.pdf", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "analysis-shinobi",
        title: "Design Analysis — Shinobi: Art of Vengeance",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "🥷🏾",
        description: "When combat fights against combatants — a close read of Shinobi: Art of Vengeance's encounter design.",
        summary: "A GameXP-style write-up on how combat systems, enemy roles, and player expression support — or undercut — each other in Treasure's revival of Shinobi.",
        published: false,
        comingSoon: true,
        links: []
    },
    {
        id: "analysis-arc-raiders",
        title: "Design Analysis — Arc Raiders",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "📡",
        description: "Extraction tension, squad communication, and how PvPvE risk shapes every raid decision.",
        published: false,
        comingSoon: true,
        links: []
    },
    {
        id: "analysis-absolum",
        title: "Design Analysis — Absolum",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "👊",
        description: "Beat 'em up encounter pacing, co-op readability, and how Absolum teaches its combat vocabulary.",
        published: false,
        comingSoon: true,
        links: []
    },
    {
        id: "analysis-re-village",
        title: "Design Analysis — Resident Evil Village",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "🧟",
        description: "Resource pressure, first-person survival horror, and how Village moves between exploration and set-piece combat.",
        published: false,
        comingSoon: true,
        links: []
    },
    {
        id: "analysis-elden-ring-nightreign",
        title: "Design Analysis — Elden Ring Nightreign",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "🌙",
        description: "How Nightreign retools Elden Ring's combat for co-op, session-based runs.",
        published: false,
        comingSoon: true,
        links: []
    },
    {
        id: "analysis-clair-obscur",
        title: "Design Analysis — Clair Obscur: Expedition 33",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "🎨",
        description: "Turn-based timing, party identity, and how Expedition 33 gives mechanical encounters narrative weight.",
        published: false,
        comingSoon: true,
        links: []
    },
    {
        id: "analysis-animal-well",
        title: "Design Analysis — Animal Well",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "🐸",
        description: "Secret density and environmental teaching — how Animal Well onboards through space instead of text.",
        summary: "A GameXP case study on how Animal Well teaches through toys, threats, and space instead of a conventional tutorial. Expand the card to preview the PDF.",
        links: [
            { text: "Read PDF", url: "assets/pdfs/GameXP.AnimalWell.pdf", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "analysis-chrono-trigger",
        title: "Design Analysis — Chrono Trigger",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "⏳",
        description: "Double techs, encounter rhythm, and how combat supports a time-travel narrative.",
        published: false,
        comingSoon: true,
        links: []
    },
    {
        id: "analysis-wow-midnight",
        title: "Design Analysis — World of Warcraft: Midnight",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "🌚",
        description: "Notes on upcoming expansion systems — onboarding, activity structure, and how Midnight frames new player goals.",
        published: false,
        comingSoon: true,
        links: []
    },
    {
        id: "music-0.7",
        title: "Vol 0.7 — Jazz-Hop Mix",
        category: "music",
        year: 2025,
        thumbnail: "",
        emoji: "🎧",
        description: "A live jazz-hop and downtempo mix — Nujabes, Freddie Joachim, Toonorth, Middle School, and more.",
        embed: `<iframe width="100%" height="120" src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FCosmos_%2Fmix-v07%2F" frameborder="0" allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"></iframe>`,
        links: [
            { text: "Listen on Mixcloud", url: "https://www.mixcloud.com/Cosmos_/mix-v07/", icon: "fa-headphones", style: "solid" }
        ]
    },
    {
        id: "music-0.6",
        title: "Vol 0.6 — Afro House Mix",
        category: "music",
        year: 2024,
        thumbnail: "",
        emoji: "🎧",
        description: "An Afro house set recorded in 2024, from Iorona through Yara.",
        embed:`<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1855351530&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/darryl_21" title="Cosmos_" target="_blank" style="color: #cccccc; text-decoration: none;">Cosmos_</a> · <a href="https://soundcloud.com/darryl_21/mix-vol-06" title="Mix v0.6" target="_blank" style="color: #cccccc; text-decoration: none;">Mix v0.6</a></div>`,
        links: [
            { text: "Listen on SoundCloud", url: "https://soundcloud.com/darryl_21/mix-vol-06", icon: "fa-headphones", style: "solid" }
        ]
    },
    // ── 2024 ──────────────────────────────────────────────
    {
        id: "game-design-puzzle-prototype",
        title: "Puzzle Game Prototype",
        category: "game-design",
        year: 2024,
        thumbnail: "",
        emoji: "🧩",
        description: "NYU Games for Learning prototype exploring puzzle structure, spatial reasoning, and player onboarding.",
        comingSoon: true,
        links: []
    },
    {
        id: "game-design-reading-prototype",
        title: "Reading Game Prototype",
        category: "game-design",
        year: 2024,
        thumbnail: "",
        emoji: "📚",
        description: "A learning-game prototype focused on reading engagement, feedback, and tutorialization.",
        comingSoon: true,
        links: []
    },
    {
        id: "rework-ffxiv",
        title: "Design Rework — Final Fantasy XIV",
        category: "game-design",
        year: 2024,
        thumbnail: "",
        emoji: "⚔️",
        description: "A systems rework looking at combat identity, job onboarding, and how FFXIV teaches its own complexity.",
        summary: "Two content-designer exercises: a dungeon-boss plan and an Aether Break / Aether Chain growth pitch. Expand the card to preview either PDF.",
        links: [
            { text: "Boss design (PDF)", url: "assets/pdfs/FFXIV-Boss-Design.pdf", icon: "fa-file-pdf", style: "solid", preview: "Preview boss plan" },
            { text: "Aether Break (PDF)", url: "assets/pdfs/FFXIV-Aether-Break.pdf", icon: "fa-file-pdf", style: "ghost", preview: "Preview Aether Break" }
        ]
    },
    {
        id: "rework-super-mario-maker",
        title: "Design Rework — Super Mario Maker",
        category: "game-design",
        year: 2024,
        thumbnail: "",
        emoji: "🍄",
        description: "A design rework that aims at the gap between how Mario Maker facilitates creation within levels instead of only outside of levels.",
        summary: "Expand the card to preview the PDF, or open it in a new tab.",
        links: [
            { text: "Open PDF", url: "assets/pdfs/Mario-Maker-Gameplay-Redesign.pdf", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "analysis-turing-test",
        title: "Design Analysis — The Turing Test",
        category: "analysis",
        year: 2024,
        thumbnail: "",
        emoji: "🔋",
        description: "Energy-transfer puzzles, narrative framing, and how The Turing Test uses a single mechanic to pace discovery.",
        published: false,
        comingSoon: true,
        links: []
    },
    {
        id: "analysis-ff7-remake",
        title: "Design Analysis — Final Fantasy VII Remake",
        category: "analysis",
        year: 2024,
        thumbnail: "",
        emoji: "🌟",
        description: "Real-time combat versus classic structure — character banter, pacing, and how Remake teaches a new battle language.",
        published: false,
        comingSoon: true,
        links: []
    },
    {
        id: "analysis-pokemon-arceus",
        title: "Design Analysis — Pokémon Legends: Arceus",
        category: "analysis",
        year: 2024,
        thumbnail: "",
        emoji: "🪙",
        description: "Catching as the core loop, research tasks, and how Arceus rebuilds Pokémon around exploration instead of gyms.",
        published: false,
        comingSoon: true,
        links: []
    },
    {
        id: "analysis-control",
        title: "Design Analysis — Control",
        category: "analysis",
        year: 2024,
        thumbnail: "",
        emoji: "🏢",
        description: "How does the Oldest House serve as both the main character and The Mentor for the player?",
        summary: "A GameXP case study on how architecture, not UI, onboards Control's sci-fi fantasy via environment, shifting architecture and later unfortunately undercuts some of that teaching with superfluous late-game lore, upgrades, and errands.",
        links: [
            { text: "Read PDF", url: "assets/pdfs/GameXP.Control.UPLOAD.pdf", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    // ── 2021 ──────────────────────────────────────────────
    {
        id: "music-0.2",
        title: "Vol 0.2 — Chillhop Mix",
        category: "music",
        year: 2021,
        thumbnail: "",
        emoji: "🎧",
        description: "An early chillhop set — Vanilla, jinsang, goosetaf, Blue Wednesday, and adjacent lo-fi.",
        embed:`<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1003790935&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/darryl_21" title="Cosmos_" target="_blank" style="color: #cccccc; text-decoration: none;">Cosmos_</a> · <a href="https://soundcloud.com/darryl_21/mix-v02" title="Mix v0.2" target="_blank" style="color: #cccccc; text-decoration: none;">Mix v0.2</a></div>`,
        links: [
            { text: "Listen on SoundCloud", url: "https://soundcloud.com/darryl_21/mix-v02", icon: "fa-headphones", style: "solid" }
        ]
    },
    // ── 2018 ──────────────────────────────────────────────
    {
        id: "game-design-shooter-prototype",
        title: "Shooter Prototype",
        category: "game-design",
        year: 2018,
        thumbnail: "",
        emoji: "🔫",
        description: "An early Unity HTML5 shooter prototype — still playable in the browser.",
        itchEmbed: "https://itch.io/embed-upload/1044737?color=333333",
        links: [
            { text: "Play on Itch.io", url: "https://cosmos-soul.itch.io/shooter-protoype", icon: "fa-gamepad", style: "solid" }
        ]
    },
];

// ── TYPED ROLE ANIMATION ──────────────────────────────────
const roles = [
    "Game Designer",
    "ゲームプランナー",
    "Learning Experience Designer",
    "UX デザイナー",
    "Educator",
    "教師",
    "Producer",
    "ゲームプロデューサー",
    "DJ"
];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
    const el = document.getElementById("typed-role");
    if (!el) return;
    const current = roles[roleIndex];

    if (!deleting) {
        el.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            deleting = true;
            setTimeout(typeRole, 1600);
            return;
        }
    } else {
        el.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(typeRole, deleting ? 55 : 90);
}

// ── NAVBAR SCROLL + ACTIVE LINK ──────────────────────────
function initNavbar() {
    const navbar = document.getElementById("navbar");
    const links  = document.querySelectorAll(".nav-links a[href^='#']");
    const sections = document.querySelectorAll("section[id], footer[id]");

    window.addEventListener("scroll", () => {
        // Scrolled shadow
        navbar.classList.toggle("scrolled", window.scrollY > 40);

        // Active link highlighting
        let current = "";
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
        });
        links.forEach(a => {
            a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
        });
    }, { passive: true });
}

// ── HAMBURGER MENU ────────────────────────────────────────
function initHamburger() {
    const btn   = document.getElementById("hamburger");
    const links = document.getElementById("nav-links");
    if (!btn || !links) return;

    btn.addEventListener("click", () => {
        const open = links.classList.toggle("open");
        btn.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", String(open));
    });

    // Close on link click
    links.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
            links.classList.remove("open");
            btn.classList.remove("open");
            btn.setAttribute("aria-expanded", "false");
        });
    });
}


// ── FADE-IN ON SCROLL ─────────────────────────────────────
function initFadeIn() {
    const els = document.querySelectorAll(".fade-in");
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    els.forEach(el => observer.observe(el));
}

// ── PROJECT CARDS ─────────────────────────────────────────
const CATEGORY_EMOJI = {
    "game-design": "🎮",
    "analysis":    "🔬",
    "music":       "🎧",
    "academic":    "📄",
    "other":       "⚡"
};

function isLiveUrl(url) {
    return Boolean(url) && url !== "#";
}

function visibleProjects() {
    return projects.filter(p => p.published !== false);
}

function liveProjectLinks(p) {
    return (p.links || []).filter(l => isLiveUrl(l.url));
}

function pdfPreviewButtons(p, liveLinks) {
    const pdfs = liveLinks.filter(l => l.url.endsWith(".pdf"));
    return pdfs.map(l => {
        const label = pdfs.length > 1 ? (l.preview || `Preview ${l.text}`) : "Preview";
        const title = pdfs.length > 1 ? `${p.title} — ${l.text.replace(/\s*\(PDF\)\s*$/i, "")}` : p.title;
        return `<button class="project-link ghost project-preview-btn" data-embed="${l.url}" data-title="${title}" data-type="pdf">
                   <i class="fas fa-eye"></i> ${label}
               </button>`;
    }).join("");
}

function loadCardSlides(card) {
    const holder = card.querySelector(".project-slides");
    if (!holder || holder.querySelector("iframe")) return;
    const url = holder.dataset.embed;
    const title = holder.dataset.title || "Slides";
    if (!url) return;
    holder.innerHTML = `<iframe src="${url}" title="${title} slides" loading="lazy" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>`;
}

function unloadCardSlides(card) {
    const holder = card.querySelector(".project-slides");
    if (holder) holder.innerHTML = "";
}

function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;
    grid.innerHTML = "";

    visibleProjects().forEach(p => {
        const card = document.createElement("article");
        card.className = "project-card fade-in";
        card.dataset.category = p.category;

        const thumb = p.thumbnail
            ? `<img class="project-thumb" src="${p.thumbnail}" alt="${p.title}" loading="lazy">`
            : p.embed
                ? `<div class="project-embed">${p.embed}</div>`
                : `<div class="project-thumb-placeholder">${p.emoji || CATEGORY_EMOJI[p.category] || "⚡"}</div>`;

        const liveLinks = liveProjectLinks(p);
        const previewBtn = pdfPreviewButtons(p, liveLinks);

        const playBtn = p.itchEmbed
            ? `<button class="project-link solid project-preview-btn" data-embed="${p.itchEmbed}" data-title="${p.title}" data-type="game">
                   <i class="fas fa-play"></i> Play in Browser
               </button>`
            : "";

        const slidesBtn = p.slidesEmbed
            ? `<button class="project-link ghost project-preview-btn" data-embed="${p.slidesEmbed}" data-title="${p.title}" data-type="slides">
                   <i class="fas fa-expand"></i> Larger view
               </button>`
            : "";

        const linksHtml = liveLinks.map(l =>
            `<a href="${l.url}" class="project-link ${l.style}" ${(l.url.startsWith("http") || l.url.endsWith(".pdf")) ? 'target="_blank" rel="noopener"' : ''}>
                <i class="fas ${l.icon}"></i> ${l.text}
            </a>`
        ).join("") + previewBtn + playBtn + slidesBtn;

        const slidesHolder = p.slidesEmbed
            ? `<div class="project-slides" data-embed="${p.slidesEmbed}" data-title="${p.title}"></div>`
            : "";

        const soonBadge = p.comingSoon ? `<span class="project-soon">Coming soon</span>` : "";

        card.innerHTML = `
            <div class="project-media">${thumb}${soonBadge}</div>
            <div class="project-body">
                <p class="project-category">${p.category.replace("-", " ")} &middot; ${p.year}</p>
                <h3 class="project-title">${p.title}</h3>
                <p class="project-desc">${p.description}</p>
                ${p.summary ? `<p class="project-summary">${p.summary}</p>` : ""}
                ${slidesHolder}
                <div class="project-links" style="display: none;">${linksHtml}</div>
                <span class="project-collapse-hint">Click to collapse</span>
            </div>`;

        grid.appendChild(card);

        card.addEventListener("click", (e) => {
            const previewBtn = e.target.closest(".project-preview-btn");
            if (previewBtn) {
                e.stopPropagation();
                window.openEmbedModal(previewBtn.dataset.embed, previewBtn.dataset.title, previewBtn.dataset.type);
                return;
            }

            if (e.target.closest(".project-link")) return;
            if (e.target.closest(".project-slides")) return;

            const isExpanded = card.classList.contains("expanded");

            // Collapse any other expanded card first
            document.querySelectorAll(".project-card.expanded").forEach(c => {
                unloadCardSlides(c);
                c.classList.remove("expanded");
                c.style.gridColumn = "";
                c.style.gridRow    = "";
                c.querySelector(".project-links").style.display = "none";
            });

            if (!isExpanded) {
                // Only consider visible (non-hidden) cards for column calculation
                const gridEl   = card.parentElement;
                const allCards = Array.from(gridEl.querySelectorAll(".project-card:not(.card-hidden)"));
                const colCount = getComputedStyle(gridEl).gridTemplateColumns.split(" ").length;

                if (colCount > 1) {
                    const cardIndex = allCards.indexOf(card);
                    const colIndex  = cardIndex % colCount;
                    const isLastCol = colIndex === colCount - 1;

                    if (isLastCol) {
                        // Pin the row explicitly so the card doesn't drift to the next
                        // row when its column start shifts left (CSS Grid would otherwise
                        // look for the next available slot at those columns).
                        const rowIndex = Math.floor(cardIndex / colCount) + 1;
                        card.style.gridColumn = `${colCount - 1} / span 2`;
                        card.style.gridRow    = `${rowIndex}`;
                    } else {
                        card.style.gridColumn = "span 2";
                    }
                }

                card.classList.add("expanded");
                card.querySelector(".project-links").style.display = "flex";
                loadCardSlides(card);
                card.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        });
    });

    initFadeIn();
}

function filterProjects(filter) {
    // Collapse any expanded card before filtering
    document.querySelectorAll(".project-card.expanded").forEach(c => {
        unloadCardSlides(c);
        c.classList.remove("expanded");
        c.style.gridColumn = "";
        c.style.gridRow    = "";
        c.querySelector(".project-links").style.display = "none";
    });

    document.querySelectorAll(".project-card").forEach(card => {
        const matches = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("card-hidden", !matches);
    });
}

function initProjectFilters() {
    const publishedCats = new Set(visibleProjects().map(p => p.category));
    const tabs = document.querySelectorAll(".filter-tab");
    tabs.forEach(tab => {
        const filter = tab.dataset.filter;
        if (filter !== "all" && !publishedCats.has(filter)) {
            tab.hidden = true;
            return;
        }
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            filterProjects(tab.dataset.filter);
        });
    });
}

// ── THEME TOGGLE ─────────────────────────────────────────
function initThemeToggle() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;

    const icon = btn.querySelector("i");

    function applyTheme(theme) {
        document.documentElement.dataset.theme = theme;
        icon.className = theme === "light" ? "fas fa-moon" : "fas fa-sun";
        btn.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
    }

    // Restore saved preference, defaulting to dark
    const saved = localStorage.getItem("theme") || "dark";
    applyTheme(saved);

    btn.addEventListener("click", () => {
        const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", next);
        applyTheme(next);
    });
}

// ── PROJECT DETAIL MODAL ──────────────────────────────────
function initProjectModal() {
    const modal    = document.getElementById("project-modal");
    const backdrop = modal.querySelector(".project-modal-backdrop");
    const closeBtn = document.getElementById("project-modal-close");
    const thumbEl  = document.getElementById("project-modal-thumb");
    const metaEl   = document.getElementById("project-modal-meta");
    const titleEl  = document.getElementById("project-modal-title");
    const descEl   = document.getElementById("project-modal-desc");
    const summaryEl= document.getElementById("project-modal-summary");
    const linksEl  = document.getElementById("project-modal-links");
    if (!modal) return;

    window.openProjectModal = function(p) {
        thumbEl.textContent = p.emoji || CATEGORY_EMOJI[p.category] || "⚡";
        metaEl.textContent  = `${p.category.replace("-", " ")} · ${p.year}`;
        titleEl.textContent = p.title;
        descEl.textContent  = p.description;
        summaryEl.textContent = p.summary || "";

        const liveLinks = liveProjectLinks(p);
        const previewBtn = pdfPreviewButtons(p, liveLinks);
        const playBtn = p.itchEmbed
            ? `<button class="project-link solid project-preview-btn" data-embed="${p.itchEmbed}" data-title="${p.title}" data-type="game">
                   <i class="fas fa-play"></i> Play in Browser
               </button>`
            : "";
        const slidesBtn = p.slidesEmbed
            ? `<button class="project-link ghost project-preview-btn" data-embed="${p.slidesEmbed}" data-title="${p.title}" data-type="slides">
                   <i class="fas fa-expand"></i> Larger view
               </button>`
            : "";
        linksEl.innerHTML = liveLinks.map(l =>
            `<a href="${l.url}" class="project-link ${l.style}" ${(l.url.startsWith("http") || l.url.endsWith(".pdf")) ? 'target="_blank" rel="noopener"' : ''}>
                <i class="fas ${l.icon}"></i> ${l.text}
            </a>`
        ).join("") + previewBtn + playBtn + slidesBtn;

        // Wire up preview/play buttons inside the detail modal
        linksEl.querySelectorAll(".project-preview-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                window.openEmbedModal(btn.dataset.embed, btn.dataset.title, btn.dataset.type);
            });
        });

        modal.hidden = false;
        document.body.style.overflow = "hidden";
        closeBtn.focus();
    };

    function closeModal() {
        modal.hidden = true;
        document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.hidden) closeModal();
    });
}

// ── EMBED MODAL (PDFs + Itch.io games) ────────────────────
function initPdfModal() {
    const modal     = document.getElementById("pdf-modal");
    const container = modal.querySelector(".pdf-modal-container");
    const frame     = document.getElementById("pdf-modal-frame");
    const title     = document.getElementById("pdf-modal-title");
    const closeBtn  = document.getElementById("pdf-modal-close");
    const backdrop  = modal.querySelector(".pdf-modal-backdrop");
    if (!modal) return;

    window.openEmbedModal = function(url, label, type) {
        title.textContent = label || "Preview";
        frame.src = url;
        // Games get more vertical space than documents
        container.dataset.type = type || "pdf";
        modal.hidden = false;
        document.body.style.overflow = "hidden";
        closeBtn.focus();
    };

    // Keep old name working just in case
    window.openPdfModal = (url, label) => window.openEmbedModal(url, label, "pdf");

    function closeModal() {
        modal.hidden = true;
        frame.src = "";
        document.body.style.overflow = "";
        delete container.dataset.type;
    }

    closeBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.hidden) closeModal();
    });

    document.querySelectorAll(".hero-btns .project-preview-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            window.openEmbedModal(btn.dataset.embed, btn.dataset.title, btn.dataset.type);
        });
    });
}

// ── FOOTER YEAR ───────────────────────────────────────────
function setYear() {
    const el = document.getElementById("footer-year");
    if (el) el.textContent = new Date().getFullYear();
}

// ── INIT ──────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    setYear();
    initThemeToggle();
    initNavbar();
    initHamburger();
    renderProjects();
    initProjectFilters();
    initFadeIn();
    initProjectModal();
    initPdfModal();
    setTimeout(typeRole, 500);
});
