# ⚡ Quick Reference Card

## 🚀 Essential Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📁 Key Files

```
/src/App.tsx          → Main app + routing
/src/main.tsx         → Entry point
/src/styles/globals.css → Global styles
/package.json         → Dependencies
/vite.config.ts       → Build config
```

## 🎨 Important Directories

```
/src/components/      → Reusable components
/src/pages/          → Page components
/src/data/           → Mock data
/src/hooks/          → Custom hooks
/public/             → Static assets
```

## 🌐 All Pages

```
/                    → Home
/about               → About Us
/headhunting         → Headhunting
/employers           → For Employers
/clients             → Our Clients ← NEW!
/contact             → Contact
/upload-resume       → Upload Resume
```

## 🎨 Color Scheme

```css
Primary:   #0A66C2  (LinkedIn Blue)
Secondary: #057642  (Green)
Accent:    #FFD700  (Yellow)
Black:     #000000
White:     #FFFFFF
```

## 📱 Breakpoints

```
Mobile:  < 768px
Tablet:  768px - 1023px
Desktop: 1024px+
Large:   1280px+
```

## 🔧 Common Issues

**Module not found**
```bash
npm install
```

**Port in use**
```bash
npm run dev -- --port 3000
```

**Clear cache**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Documentation

```
README.md                 → Overview
SETUP_GUIDE.md           → Setup steps
BACKEND_INTEGRATION.md   → Backend options
DEPLOYMENT_GUIDE.md      → Deploy guide
EXPORT_INSTRUCTIONS.md   → Export help
PROJECT_SUMMARY.md       → Complete summary
```

## 🚀 Deploy to Vercel

```bash
npm install -g vercel
vercel login
vercel
```

## 🔐 Environment Variables

Create `.env`:
```env
VITE_API_URL=http://localhost:5000/api
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=your-key
```

## 📦 Tech Stack

- React 18.3
- TypeScript
- Vite
- Tailwind CSS v4
- React Router v6
- Motion (animations)
- Lucide Icons

## ✅ Pre-Deployment Checklist

- [ ] Build succeeds
- [ ] All pages load
- [ ] Forms work
- [ ] Mobile responsive
- [ ] Environment variables set
- [ ] Backend connected
- [ ] No console errors

## 🆘 Quick Help

**Can't install?** → Check Node.js version (18+)
**Won't start?** → Delete node_modules, reinstall
**Port error?** → Use different port
**Build fails?** → Check for TypeScript errors

## 📞 Resources

- **Docs**: See files in root folder
- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **Tailwind**: https://tailwindcss.com

---

**🎯 Keep this for quick reference!**
