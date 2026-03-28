# Deadfish🐟 Studying Free

Personal study notes hosted on GitHub Pages.

## 🌐 访问网站

点击链接访问：[https://siyuchen1111.github.io/My-Study-Notes/](https://siyuchen1111.github.io/My-Study-Notes/)

## 📁 Project Structure

```
My-Study-Notes/
├── docs/                    # VitePress documentation content
│   ├── assets/              # Images and static files
│   ├── reinforcement-learning/  # RL lecture notes
│   └── index.md             # Homepage
├── .github/workflows/       # GitHub Actions for deployment
└── package.json             # Dependencies
```

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run docs:dev

# Build for production
npm run docs:build
```

## 📝 Adding New Courses

1. Create a new folder in `docs/`
2. Add markdown files (e.g., `lecture-1.md`)
3. Update `docs/index.md` to link the new course
4. Commit and push - GitHub Actions will deploy automatically

## 🔗 Links

- [VitePress Documentation](https://vitepress.dev/)
- [GitHub Pages](https://pages.github.com/)
