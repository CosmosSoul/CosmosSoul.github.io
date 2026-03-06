# Portfolio v2

A clean, single-page personal portfolio ready to host on **GitHub Pages** for free.

---

## 🚀 Going Live on GitHub Pages (5 minutes)

1. **Create a GitHub repository** named exactly:
   ```
   yourgithubusername.github.io
   ```
   (Replace `yourgithubusername` with your actual GitHub username.)

2. **Upload this folder's contents** to the root of that repository.  
   You can drag-and-drop files in the GitHub web UI, or use Git:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourgithubusername/yourgithubusername.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages** — go to your repo → Settings → Pages → Source: `main` branch, `/ (root)`.

4. Your site will be live at `https://yourgithubusername.github.io` within ~60 seconds.

---

## ✏️ Personalising the Site

### index.html — things to update
| What | Where |
|---|---|
| Your name | `.nav-logo`, `.hero-name`, `<footer>` |
| GitHub / LinkedIn / email links | `.hero-socials`, `#contact` socials, `.about-facts` |
| About blurb | `#about` section paragraphs |
| Tag cloud skills | `.tag-cloud` spans |
| Experience entries | `#experience` `.timeline` items |
| Skill bar labels & percentages | `#skills` `.skill-bar` items (update `data-pct` and label text) |

### js/main.js — things to update
| What | Where |
|---|---|
| Typed role strings | `const roles = [...]` at the top |
| Your projects | `const projects = [...]` — add/edit objects |

### Adding a project
Copy this object into the `projects` array in `js/main.js`:
```js
{
    id: "unique-id",
    title: "Your Project Title",
    category: "game-design",   // game-design | analysis | music | academic | other
    year: 2024,
    thumbnail: "assets/images/your-image.png",  // or leave "" for emoji placeholder
    emoji: "🎮",
    description: "Short description shown on the card.",
    links: [
        { text: "View PDF",  url: "assets/pdfs/your-file.pdf", icon: "fa-file-pdf", style: "solid" },
        { text: "Live Demo", url: "https://...",               icon: "fa-play",     style: "ghost" }
    ]
}
```

### Adding your resume
Drop your PDF into `assets/pdfs/resume.pdf`. The navbar and hero buttons already link to it.

### Adding your photo
Drop your photo into `assets/images/profile.jpg`.  
The `<img>` in the hero already points there; if it's missing it falls back to your initials.

---

## 📁 File Structure
```
portfolio-v2/
├── index.html          ← all HTML sections
├── css/
│   └── style.css       ← all styles
├── js/
│   └── main.js         ← projects data + all interactivity
└── assets/
    ├── images/
    │   └── profile.jpg ← your photo (add this)
    └── pdfs/
        └── resume.pdf  ← your resume (add this)
```
