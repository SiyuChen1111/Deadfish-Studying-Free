# VitePress Study Notes

Personal study notes website built with VitePress.

## 🎨 Features

- **Custom Theme**: Creative/personal style with EB Garamond font
- **Color Palette**: Vibrant colors (#FF6B9D brand)
- **Math Rendering**: KaTeX for LaTeX equations
- **Mobile Responsive**: Optimized for all devices
- **Auto-Deployment**: GitHub Actions for gh-pages

## 📚 Subjects

Currently available:
- [Reinforcement Learning](/reinforcement-learning/) — 7 lectures on RL foundations, MDPs, model-free methods, and value function approximation

## 🚀 Getting Started

### Prerequisites

You need Node.js and pnpm installed:

```bash
# Install Node.js (if not already installed)
brew install node

# Install pnpm globally
npm install -g pnpm

# Or verify installations
node --version
pnpm --version
```

### Adding New Subjects

1. Create a new folder for your subject in `docs/` directory
2. Move your Markdown lecture files into that folder (e.g., `docs/your-subject/`)
3. Create an `index.md` file for your subject (optional, can include lecture navigation)

### Example Structure

```
docs/
├── index.md (home page)
├── subjects.md (subjects index)
├── reinforcement-learning/
│   ├── index.md (subject overview)
│   ├── lecture-1.md (first lecture)
│   ├── lecture-2.md (second lecture)
│   └── ...
├── your-subject/
│   ├── index.md
│   ├── lecture-1.md
│   └── ...
```

## 📝 Development

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview build locally
npm run docs:preview
```

## 🚢 Deployment

This site is configured for GitHub Pages with automatic deployment:

1. The `.github/workflows/deploy.yml` workflow will:
   - Build the site on every push to `main` branch
   - Deploy to `gh-pages` branch
   - GitHub Pages will serve from the `gh-pages` branch

2. To deploy:
   ```bash
   # Create and switch to gh-pages branch
   git checkout -b gh-pages
   
   # Add all files and commit
   git add .
   git commit -m "Your commit message"
   
   # Push to remote
   git push origin gh-pages
   ```

3. Enable GitHub Pages:
   - Go to your repository settings on GitHub
   - Navigate to Settings → Pages
   - Select `gh-pages` as source
   - Click Save

4. Your site will be live at:
   `https://username.github.io/My-Study-Notes/`

## 📖 Project Structure

```
vitepress-main/
├── docs/
│   ├── index.md (home page)
│   ├── subjects.md (subjects index)
│   ├── reinforcement-learning/
│   │   ├── README.md (notes index)
│   │   ├── lecture-1.md through lecture-7.md (individual lectures)
│   │   └── assets/ (images organized by lecture)
├── .vitepress/
│   ├── theme/ (custom theme)
│   │   ├── index.ts (theme configuration)
│   │   └── override.css (vibrant colors, EB Garamond)
├── .github/
│   └── workflows/
│       └── deploy.yml (auto-deployment workflow)
├── vite.config.ts (VitePress configuration)
└── package.json (project configuration)
```

## ⚙️ Git Ignore

The `.gitignore` file will exclude:
- `node_modules/`
- `dist/`
- `.vitepress/dist/`
- `.DS_Store`

## 💡 Tech Stack

- **VitePress** v1.7.4 - Modern static site generator
- **Vue** 3 - Reactive UI framework
- **KaTeX** - Mathematical formula rendering
- **GitHub Actions** - Continuous integration
- **Node.js** v20.18.0 - JavaScript runtime

---

**Ready to add your subjects!** Just create a new subject folder and follow the structure above. Happy learning! 📚
