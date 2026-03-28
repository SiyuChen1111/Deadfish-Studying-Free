# Deadfish🐟 Studying Free

Personal study notes hosted on Vercel.

## 🌐 访问网站

点击链接访问：[https://my-study-notes-lemon.vercel.app/](https://my-study-notes-lemon.vercel.app/)

## 📁 Project Structure

```
My-Study-Notes/
├── docs/                    # VitePress documentation content
│   ├── assets/              # Images and static files
│   ├── reinforcement-learning/  # RL lecture notes
│   └── index.md             # Homepage
├── .github/workflows/       # GitHub Actions for deployment
├── vercel.json              # Vercel deployment config
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
4. Commit and push - Vercel will deploy automatically

## 🚀 部署到 Vercel

1. 访问 [vercel.com](https://vercel.com) 并登录（可用 GitHub 账号）
2. 点击 "Add New Project"
3. 导入你的 GitHub 仓库 `SiyuChen1111/My-Study-Notes`
4. Vercel 会自动检测配置并部署
5. 部署完成后你会获得一个 `.vercel.app` 域名

## 🔗 Links

- [VitePress Documentation](https://vitepress.dev/)
- [Vercel](https://vercel.com/)
