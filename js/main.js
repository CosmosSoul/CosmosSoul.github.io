/* =========================================================
   Portfolio v2 — main.js
   ========================================================= */

// ── PROJECT DATA ─────────────────────────────────────────
// Add your real projects here. Categories: game-design, analysis, music, academic, other
const projects = [
    // ── 2026 ──────────────────────────────────────────────
    {
        id: "game-design-assimulation",
        title: "Assimulation",
        category: "game-design",
        year: 2026,
        thumbnail: "",
        emoji: "🎮",
        description: "Coming soon.",
        itchEmbed: "https://itch.io/embed-upload/16341037?color=333333&border_width=0&border_radius=0",  // paste your Itch.io embed URL here, e.g. "https://itch.io/embed-upload/XXXXXX"
        links: [
            { text: "Play on Itch.io", url: "https://sam-youll.itch.io/assimulation", icon: "fa-gamepad", style: "solid" }
        ]
    },
    // ── 2025 ──────────────────────────────────────────────
    {
        id: "analysis-1",
        title: "Design Analysis: Narrative Structures in Indie Games",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "📖",
        description: "A deep-dive analysis of non-linear storytelling in contemporary indie games, examining how mechanics and narrative intertwine.",
        links: [
            { text: "Read PDF", url: "assets/pdfs/analysis.pdf", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "analysis-shinobi",
        title: "Design Analysis - Shinobi: Art of Vengeance",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "📖",
        description: "When combat fights against combatants",
        links: [
            { text: "Read PDF", url: "assets/pdfs/GameXP.Shinobi.UPLOAD.pdf", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "analysis-arc-raiders",
        title: "Design Analysis - Arc Raiders",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "📖",
        description: "Coming soon.",
        links: [
            { text: "Read PDF", url: "#", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "analysis-absolum",
        title: "Design Analysis - Absolum",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "📖",
        description: "Coming soon.",
        links: [
            { text: "Read PDF", url: "#", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "analysis-re-village",
        title: "Design Analysis - Resident Evil Village",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "📖",
        description: "Coming soon.",
        links: [
            { text: "Read PDF", url: "#", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "analysis-elden-ring-nightreign",
        title: "Design Analysis - Elden Ring Nightreign",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "📖",
        description: "Coming soon.",
        links: [
            { text: "Read PDF", url: "#", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "analysis-clair-obscur",
        title: "Design Analysis - Clair Obscur: Expedition 33",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "📖",
        description: "Coming soon.",
        links: [
            { text: "Read PDF", url: "#", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "analysis-animal-well",
        title: "Design Analysis - Animal Well",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "📖",
        description: "Coming soon.",
        links: [
            { text: "Read PDF", url: "#", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "analysis-chrono-trigger",
        title: "Design Analysis - Chrono Trigger",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "📖",
        description: "Coming soon.",
        links: [
            { text: "Read PDF", url: "#", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "analysis-wow-midnight",
        title: "Design Analysis - WoW Midnight",
        category: "analysis",
        year: 2025,
        thumbnail: "",
        emoji: "📖",
        description: "Coming soon.",
        links: [
            { text: "Read PDF", url: "#", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "music-0.7",
        title: "Vol 0.7 — Electronic Mix",
        category: "music",
        year: 2025,
        thumbnail: "",
        emoji: "🎧",
        description: "90-minute mix blending house, techno, and ambient electronica. Recorded live.",
        embed: `<iframe width="100%" height="120" src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FCosmos_%2Fmix-v07%2F" frameborder="0" allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"></iframe>`,
        links: [
            { text: "Listen on Mixcloud", url: "https://www.mixcloud.com/Cosmos_/mix-v07/", icon: "fa-headphones", style: "solid" }
        ]
    },
    {
        id: "music-0.6",
        title: "Vol 0.6 — Electronic Mix",
        category: "music",
        year: 2025,
        thumbnail: "",
        emoji: "🎧",
        description: "90-minute mix blending house, techno, and ambient electronica. Recorded live.",
        embed:`<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1855351530&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/darryl_21" title="Cosmos_" target="_blank" style="color: #cccccc; text-decoration: none;">Cosmos_</a> · <a href="https://soundcloud.com/darryl_21/mix-vol-06" title="Mix v0.6" target="_blank" style="color: #cccccc; text-decoration: none;">Mix v0.6</a></div>`,
        links: [
            { text: "Listen on SoundCloud", url: "https://soundcloud.com/darryl_21/mix-vol-06", icon: "fa-headphones", style: "solid" }
        ]
    },
    // ── 2024 ──────────────────────────────────────────────
    {
        id: "game-design-1",
        title: "Example Game Design Project",
        category: "game-design",
        year: 2024,
        thumbnail: "",        // put "assets/images/your-image.png" here
        emoji: "🎮",
        description: "A short description of your game design project — what it is, what you designed, and what makes it interesting.",
        links: [
            { text: "View Slides", url: "#", icon: "fa-file-powerpoint", style: "solid" },
            { text: "Play Demo",   url: "#", icon: "fa-gamepad",         style: "ghost" }
        ]
    },
    {
        id: "game-design-puzzle-prototype",
        title: "School Project — Puzzle Game Prototype",
        category: "game-design",
        year: 2024,
        thumbnail: "",
        emoji: "🧩",
        description: "Coming soon.",
        links: [
            { text: "View Design Doc", url: "#", icon: "fa-file-alt", style: "solid" },
            { text: "Play Prototype",  url: "#", icon: "fa-gamepad",  style: "ghost" }
        ]
    },
    {
        id: "game-design-reading-prototype",
        title: "School Project — Reading Game Prototype",
        category: "game-design",
        year: 2024,
        thumbnail: "",
        emoji: "📚",
        description: "Coming soon.",
        links: [
            { text: "View Design Doc", url: "#", icon: "fa-file-alt", style: "solid" },
            { text: "Play Prototype",  url: "#", icon: "fa-gamepad",  style: "ghost" }
        ]
    },
    {
        id: "rework-ffxiv",
        title: "Game Design Rework — Final Fantasy XIV",
        category: "game-design",
        year: 2024,
        thumbnail: "",
        emoji: "⚔️",
        description: "Coming soon.",
        links: [
            { text: "Read PDF", url: "#", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "rework-super-mario-maker",
        title: "Game Design Rework — Super Mario Maker",
        category: "game-design",
        year: 2024,
        thumbnail: "",
        emoji: "🍄",
        description: "Coming soon.",
        links: [
            { text: "Read PDF", url: "#", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "game-design-2",
        title: "Game Prototype — Puzzle Mechanic",
        category: "game-design",
        year: 2024,
        thumbnail: "",
        emoji: "🧩",
        description: "A playable prototype exploring spatial reasoning and environmental storytelling through minimalist puzzle design.",
        links: [
            { text: "Play Prototype", url: "#", icon: "fa-play", style: "solid" }
        ]
    },
    {
        id: "analysis-turing-test",
        title: "Design Analysis - The Turing Test",
        category: "analysis",
        year: 2024,
        thumbnail: "",
        emoji: "📖",
        description: "Coming soon.",
        links: [
            { text: "Read PDF", url: "#", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "analysis-ff7-remake",
        title: "Design Analysis - Final Fantasy VII Remake",
        category: "analysis",
        year: 2024,
        thumbnail: "",
        emoji: "📖",
        description: "Coming soon.",
        links: [
            { text: "Read PDF", url: "#", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "analysis-pokemon-arceus",
        title: "Design Analysis - Pokémon Legends: Arceus",
        category: "analysis",
        year: 2024,
        thumbnail: "",
        emoji: "📖",
        description: "Coming soon.",
        links: [
            { text: "Read PDF", url: "#", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "analysis-control",
        title: "Design Analysis - Control",
        category: "analysis",
        year: 2024,
        thumbnail: "",
        emoji: "📖",
        description: "Coming soon.",
        links: [
            { text: "Read PDF", url: "#", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    {
        id: "analysis-2",
        title: "Design Proposal: Adaptive Difficulty System",
        category: "analysis",
        year: 2024,
        thumbnail: "",
        emoji: "📊",
        description: "A design proposal outlining a data-driven adaptive difficulty framework for mid-core mobile games.",
        links: [
            { text: "View PDF", url: "assets/pdfs/proposal.pdf", icon: "fa-file-pdf", style: "solid" }
        ]
    },
    // ── 2023 ──────────────────────────────────────────────
    {
        id: "academic-1",
        title: "Academic Paper: Player Agency vs. Authorial Intent",
        category: "academic",
        year: 2023,
        thumbnail: "",
        emoji: "📄",
        description: "Research paper exploring the tension between player freedom and designed experiences in game design education.",
        links: [
            { text: "Download PDF", url: "assets/pdfs/paper.pdf", icon: "fa-download", style: "solid" }
        ]
    },
    // ── 2020 ──────────────────────────────────────────────
    {
        id: "music-0.2",
        title: "Vol 0.2 — Electronic Mix",
        category: "music",
        year: 2020,
        thumbnail: "",
        emoji: "🎧",
        description: "90-minute mix blending house, techno, and ambient electronica. Recorded live.",
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
        description: "Coming soon.",
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

function renderProjects(filter = "all") {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;
    grid.innerHTML = "";

    const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="color:var(--text-muted);text-align:center;grid-column:1/-1;padding:40px 0;">No projects in this category yet.</p>`;
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement("article");
        card.className = "project-card fade-in";
        card.dataset.category = p.category;
        card.dataset.expanded = "false";

        const thumb = p.thumbnail
            ? `<img class="project-thumb" src="${p.thumbnail}" alt="${p.title}" loading="lazy">`
            : p.embed
                ? `<div class="project-embed">${p.embed}</div>`
                : `<div class="project-thumb-placeholder">${p.emoji || CATEGORY_EMOJI[p.category] || "⚡"}</div>`;

        const pdfLink = (p.links || []).find(l => l.url.endsWith(".pdf") && l.url !== "#");
        const previewBtn = pdfLink
            ? `<button class="project-link ghost project-preview-btn" data-embed="${pdfLink.url}" data-title="${p.title}" data-type="pdf">
                   <i class="fas fa-eye"></i> Preview
               </button>`
            : "";

        const playBtn = p.itchEmbed
            ? `<button class="project-link solid project-preview-btn" data-embed="${p.itchEmbed}" data-title="${p.title}" data-type="game">
                   <i class="fas fa-play"></i> Play in Browser
               </button>`
            : "";

        const linksHtml = (p.links || []).map(l =>
            `<a href="${l.url}" class="project-link ${l.style}" ${(l.url.startsWith("http") || l.url.endsWith(".pdf")) ? 'target="_blank" rel="noopener"' : ''}>
                <i class="fas ${l.icon}"></i> ${l.text}
            </a>`
        ).join("") + previewBtn + playBtn;

        card.innerHTML = `
            ${thumb}
            <div class="project-body">
                <p class="project-category">${p.category.replace("-", " ")} &middot; ${p.year}</p>
                <h3 class="project-title">${p.title}</h3>
                <p class="project-desc">${p.description}</p>
                <div class="project-links" style="display: none;">${linksHtml}</div>
            </div>`;

        grid.appendChild(card);

        // Add click handler for the entire card
        const links = card.querySelector(".project-links");

        card.addEventListener("click", (e) => {
            // Open embed modal when clicking preview or play button
            const previewBtn = e.target.closest(".project-preview-btn");
            if (previewBtn) {
                e.stopPropagation();
                window.openEmbedModal(previewBtn.dataset.embed, previewBtn.dataset.title, previewBtn.dataset.type);
                return;
            }

            // Don't toggle if clicking on a link
            if (e.target.closest(".project-link")) {
                return;
            }
            
            const isExpanded = card.dataset.expanded === "true";
            
            if (isExpanded) {
                // Collapse
                card.dataset.expanded = "false";
                card.setAttribute("aria-expanded", "false");
                links.style.display = "none";
            } else {
                // Expand
                card.dataset.expanded = "true";
                card.setAttribute("aria-expanded", "true");
                links.style.display = "flex";
            }
        });
    });

    // Re-init fade-in for newly added cards
    initFadeIn();
}

function initProjectFilters() {
    const tabs = document.querySelectorAll(".filter-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            renderProjects(tab.dataset.filter);
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
    initPdfModal();
    setTimeout(typeRole, 500);
});
