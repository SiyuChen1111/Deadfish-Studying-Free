# PROJECT KNOWLEDGE BASE

**Generated:** 2026-03-27
**Commit:** Not available (use `git rev-parse --short HEAD`)
**Branch:** main

## OVERVIEW
Personal study notes website built with VitePress, currently hosting reinforcement learning lecture notes (7 lectures). Uses custom theme with EB Garamond font and KaTeX for math rendering.

## STRUCTURE
```
vitepress-main/
├── docs/                 # VitePress source directory
│   ├── index.md          # Home page with subject cards
│   ├── subjects.md        # Subjects index page
│   ├── reinforcement-learning/
│   │   ├── README.md      # Subject index (all lectures combined)
│   │   ├── lecture-1.md through lecture-7.md
│   │   └── assets/       # RL lecture images
│   ├── .vitepress/
│   │   └── theme/       # Custom theme (index.ts, override.css)
│   └── assets/
│       └── reinforcement-learning/assets/
├── package.json            # VitePress dependencies and scripts
├── vite.config.ts          # VitePress configuration (math enabled, bilingual)
└── README.md              # Project documentation
```

**Note:** Root-level `Reinforce Learning/` folder contains pre-VitePress source files and can be archived.

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Add new subject | Create folder under `docs/`, add `README.md` with all lectures + individual `lecture-N.md` files |
| Modify styling | Edit `docs/.vitepress/theme/override.css` (colors: #AFD1F2, font: EB Garamond) |
| Configure math | Use KaTeX syntax: `$equation$` or `$$equation$$` in markdown |
| Theme config | Modify `docs/.vitepress/theme/index.ts` |
| Build/dev | `npm run docs:dev` / `npm run docs:build` / `npm run docs:preview` |

## CONVENTIONS

**File Naming:**
- Lecture files: `lecture-N.md` (no zero-padding, e.g., `lecture-1.md`, `lecture-2.md`)
- Subject index: Use `README.md` within subject folder
- Images: Hashed filenames in `docs/assets/[subject]/` or `docs/[subject]/assets/`

**Directory Structure:**
- Subject folders under `docs/` in kebab-case (e.g., `reinforcement-learning`)
- Assets stored in subject-specific `assets/` folder or central `docs/assets/`
- Image paths use absolute references: `/assets/reinforcement-learning/filename.png`

**Frontmatter:**
- Home page: `layout: home`, `# Title`
- Pages: `layout: page`, `# Title`
- Lecture files: No frontmatter (default layout)

**Content Pattern:**
- Each subject has BOTH: `README.md` (combined content) + individual `lecture-N.md` (for sidebar navigation)
- Primary reading happens in `README.md` with individual lectures for sequential access

## ANTI-PATTERNS (THIS PROJECT)
None documented. This is a personal study notes repository with no explicit forbidden practices.

## UNIQUE STYLES

**Dual Content Strategy:** Each lecture exists as both individual file (`lecture-N.md`) AND combined in `README.md`. The individual files provide sidebar navigation while README.md serves as the main reading experience.

**Custom Theme Override:** The `index.ts` theme returns `null` for Layout, disabling default VitePress navbar and relying on custom CSS for all navigation.

**Asset Hashing:** Images use SHA256-style hashes as filenames (e.g., `lksIJhrPs0l3bx6melO3GRytcEX52dXEGmw8ITx99nw=.png`).

## COMMANDS
```bash
# Development
npm run docs:dev              # Start dev server (http://localhost:5173)

# Build
npm run docs:build            # Build to .vitepress/dist/

# Preview
npm run docs:preview           # Preview production build locally
```

## NOTES

**Missing Deployment:** README references `.github/workflows/deploy.yml` for GitHub Pages auto-deployment, but this file does NOT exist. To enable auto-deployment, create this workflow file.

**Non-Standard Config:** VitePress config is `vite.config.ts` in project root (not `.vitepress/config.ts`), but this pattern works correctly.

**Duplicate Content:** Root-level `Reinforce Learning/` folder contains source files that mirror the organized content in `vitepress-main/docs/reinforcement-learning/`. Consider archiving to avoid confusion.
