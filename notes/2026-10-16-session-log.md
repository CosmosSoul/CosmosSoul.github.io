# Portfolio session log — 16 Oct 2026

Local notes for Darryl. Not linked from the live site. Do not treat this as a commit or a push.

Repo: `CosmosSoul.github.io` (v3, continuing v2). Local preview: `http://127.0.0.1:5500/`.

---

## Standing rules (still in effect)

- Do not push unless asked. Keep the GitHub repo private.
- Do not commit unless asked.
- Do not invent finished PDFs or fake playable builds.
- Canva links use `/view`, never `/edit`.
- Card copy lives in `js/main.js`. Darryl edits that file directly.
- Hide empty analysis titles rather than showing a pile of blank case studies — except placeholders Darryl explicitly wants visible.
- NDA work (JoyEd, MoMI): keep Work-card copy light; Experience carries confidential detail.
- Cursor credit is a footer tools line, not an academic citation: *Site Designed & Organized by Darryl H. Assisted by Cursor*.

---

## How Work cards work now

Collapsed card shows:

- category · year
- title
- `description` (short summary)

Expanded card shows:

- the same summary
- **Role & responsibilities** (`role` + `responsibilities[]`)
- artifact buttons (Play, Preview, PDF, Canva, Mixcloud, etc.)
- Coming soon pill stays on the thumbnail when `comingSoon: true`

Card data fields in `js/main.js`:

| Field | Use |
|---|---|
| `description` | Collapsed blurb |
| `role` | Title under “Role & responsibilities” |
| `responsibilities` | Bullets on expand |
| `comingSoon: true` | Yellow “Coming soon” badge |
| `published: false` | Keep the object in the file, hide it from the grid |
| `links` | Empty until a real file/URL exists. `"#"` is not rendered |

Edit copy in `js/main.js`. Preview buttons are auto-generated for any `links` URL that ends in `.pdf`.

---

## What this session changed

### Design-thinking examples (finished artifacts)

Wired real files onto cards instead of empty analysis titles:

- **Bubble Letters** — capstone expo poster PDF. `comingSoon` removed. Preview opens `assets/pdfs/SP25.Th2.ExpoPoster.darrylH.v3.pdf`.
- **Animal Well** — GameXP case study PDF. Preview opens `assets/pdfs/GameXP.AnimalWell.pdf`.
- **Control** — already had Darryl’s uploaded PDF: `assets/pdfs/GameXP.Control.UPLOAD.pdf`.
- **FFXIV rework** — two PDFs with labeled Preview buttons: `FFXIV-Boss-Design.pdf`, `FFXIV-Aether-Break.pdf`.
- **Mario Maker rework** — `Mario-Maker-Gameplay-Redesign.pdf`.

### Placeholder policy

Empty analysis cards were taken off the public grid (`published: false`) so finished close reads read as design thinking.

Darryl asked **not** to remove all placeholders. Restored as visible Coming soon cards:

- Design Analysis — Clair Obscur: Expedition 33
- Design Analysis — Chrono Trigger

Still hidden (data kept in `js/main.js`): Shinobi, Arc Raiders, Absolum, Resident Evil Village, Elden Ring Nightreign, WoW Midnight, The Turing Test, FF7 Remake, Pokémon Legends: Arceus.

Shinobi is hidden because `assets/pdfs/GameXP.Shinobi.UPLOAD.pdf` is **not in the folder**. Re-publish when the PDF is dropped in.

### Role & responsibilities on expand

Every card (published and unpublished) now has `role` and `responsibilities`. First-pass titles:

| Card | Role |
|---|---|
| Ground Control | Product & Game Designer · Joy Education |
| Assimulation | Game Designer |
| Alien Farm VR | Learning Game Designer |
| Bubble Letters | Game Designer · Capstone Thesis |
| Animal Well, Control, Expedition 33, Chrono Trigger | Design Analyst |
| FFXIV rework | Content Designer |
| Super Mario Maker rework | Game Designer |
| Puzzle prototype | Game Designer · NYU Games for Learning |
| Reading prototype | Learning Game Designer · NYU Games for Learning |
| Mixes | DJ / Selector |
| Shooter Prototype | Game Designer |

Treat this as draft copy Darryl can rewrite in `js/main.js`.

### Hero, resume, footer (earlier in the same stretch of work)

- Hero **View Resume** is an in-page PDF preview (`assets/pdfs/DarrylH-Resume.pdf`), not a new tab. Nav Resume still opens a new tab.
- Footer credit as written by Darryl (see standing rules).

### Coming soon (still visible)

- Ground Control (JoyEd literacy games)
- Puzzle Game Prototype
- Reading Game Prototype
- Expedition 33
- Chrono Trigger

### Pixel-art hero (parked)

Goal: SNES 16-bit look of the hero photo. Live `assets/images/profile.jpg` was **not** swapped unless asked.

- Locked look: **pass 5b** — small afro, light fade taper ending around the top of the ear. File: `assets/images/profile-snes-draft-pass5b.jpg`. Original photo kept as `assets/images/profile.original.jpg`.
- Later 8-bit tests (pass 10 / 11) were “okay for now”; do not replace 5b unless asked.
- Older drafts were kept (pass 4–11, afro variants). Do not delete them.

---

## Current public Work grid

**Game design**

- Ground Control — Coming soon
- Assimulation — playable itch embed
- Alien Farm VR — Canva ECD deck
- Bubble Letters — expo poster PDF
- Puzzle Game Prototype — Coming soon
- Reading Game Prototype — Coming soon
- Design Rework — Final Fantasy XIV — two PDFs
- Design Rework — Super Mario Maker — PDF
- Shooter Prototype — playable itch embed

**Analysis**

- Expedition 33 — Coming soon
- Animal Well — PDF
- Chrono Trigger — Coming soon
- Control — PDF

**Music**

- Vol 0.7 Jazz-Hop (Mixcloud)
- Vol 0.6 Afro House (SoundCloud)
- Vol 0.2 Chillhop (SoundCloud)

---

## Files that matter

| Path | Why |
|---|---|
| `js/main.js` | All Work-card data and expand behavior |
| `css/style.css` | Card expand, Coming soon pill, role block |
| `index.html` | Hero resume button, footer credit, Experience |
| `assets/pdfs/` | Resume + wired project PDFs |
| `assets/GameXP-AnimalWell.docx` | Animal Well Word source |
| `assets/GameXP-Control.docx` | Control Word source |
| `assets/images/profile.jpg` | Live hero photo |
| `assets/images/profile.original.jpg` | Photo before pixel-art experiments |
| `assets/images/profile-snes-draft-pass5b.jpg` | Approved SNES afro + ear-top taper |

PDFs currently in `assets/pdfs/`:

- `DarrylH-Resume.pdf`
- `GameXP.AnimalWell.pdf`
- `GameXP.Control.UPLOAD.pdf`
- `SP25.Th2.ExpoPoster.darrylH.v3.pdf`
- `FFXIV-Boss-Design.pdf`
- `FFXIV-Aether-Break.pdf`
- `Mario-Maker-Gameplay-Redesign.pdf`

Word lock files (`~$meXP-…`) mean Control / Animal Well / Turing Test / FF7 Remake were opened in Word. Turing Test and FF7 Remake case studies are **not** finished PDFs yet.

---

## Open / next (not done unless asked)

- Swap live hero to pass 5b.
- Drop Shinobi PDF into `assets/pdfs/` and set `published: true` (remove `published: false`; add the link).
- Next GameXP case studies if Darryl pastes notes or adds PDFs: Turing Test, FF7 Remake, Expedition 33, Chrono Trigger.
- Hide or restore other unpublished analysis cards.
- Commit / push — only when Darryl asks.

---

## Quick “how do I…?”

**Change a collapsed blurb** — edit `description` on that project in `js/main.js`.

**Change expanded role copy** — edit `role` and the `responsibilities` array.

**Show a hidden analysis again** — delete `published: false` (keep `comingSoon: true` until a PDF exists).

**Wire a new PDF** — put the file in `assets/pdfs/`, add a `links` entry with a `.pdf` URL. A Preview button appears automatically.

**Make a Word draft first** — same pattern as Control / Animal Well: save `.docx` under `assets/`, Darryl edits, then drop the PDF and wire the card.
