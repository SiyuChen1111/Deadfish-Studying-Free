# My Study Notes

Personal study notes hosted on GitHub Pages.

## 🌐 Live Website

[https://siyuchen1111.github.io/My-Study-Notes/](https://siyuchen1111.github.io/My-Study-Notes/)

## 📁 Project Structure

```
My-Study-Notes/
├── vitepress-main/       # VitePress website source
│   ├── docs/             # Documentation content
│   ├── .github/          # GitHub Actions workflows
│   └── package.json      # Dependencies
└── Reinforce Learning/   # Source notes (archived)
```

## 🚀 Local Development

```bash
cd vitepress-main

# Install dependencies
npm install

# Start dev server
npm run docs:dev

# Build for production
npm run docs:build
```

## 📝 Adding New Subjects

1. Create a new folder in `vitepress-main/docs/`
2. Add markdown files (e.g., `lecture-1.md`)
3. Update `vitepress-main/docs/subjects.md`
4. Commit and push - GitHub Actions will deploy automatically

## 🔗 Links

- [VitePress Documentation](https://vitepress.dev/)
- [GitHub Pages](https://pages.github.com/)
