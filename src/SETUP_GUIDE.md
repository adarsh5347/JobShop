# Complete Setup Guide - The Job Shop Website

## 🎯 Overview

This guide will help you set up The Job Shop website on your local machine and prepare it for deployment.

---

## 📋 Prerequisites

Before you begin, ensure you have:

- ✅ **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- ✅ **npm** (comes with Node.js) or **yarn**
- ✅ **VS Code** (recommended) - [Download](https://code.visualstudio.com/)
- ✅ **Git** (optional but recommended) - [Download](https://git-scm.com/)

### Verify Installation

Open terminal and run:

```bash
node --version
# Should show: v18.x.x or higher

npm --version
# Should show: 9.x.x or higher
```

---

## 🚀 Getting Started

### Step 1: Get the Project Files

**Option A: Export from Figma Make**
1. Click "Export" or "Download" button
2. Save and extract the ZIP file
3. Navigate to the extracted folder

**Option B: If you already have the files**
1. Locate your project folder
2. Open terminal in that folder

### Step 2: Open in VS Code

```bash
# Navigate to project folder
cd path/to/jobshopindia-website

# Open in VS Code
code .
```

Or use VS Code's File → Open Folder menu.

### Step 3: Install Dependencies

Open terminal in VS Code (`` Ctrl+` `` or View → Terminal):

```bash
npm install
```

This will:
- Read `package.json`
- Download all dependencies
- Create `node_modules/` folder
- Create `package-lock.json`

**Expected output:**
```
added 437 packages in 45s
```

### Step 4: Start Development Server

```bash
npm run dev
```

**Expected output:**
```
  VITE v5.x.x  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### Step 5: View in Browser

1. Open browser
2. Go to: `http://localhost:5173`
3. You should see the homepage!

---

## 📁 Project Structure Explained

```
jobshopindia-website/
│
├── 📂 src/                        # Source code (YOUR CODE)
│   │
│   ├── 📄 main.tsx               # Application entry point
│   ├── 📄 App.tsx                # Main app component with routing
│   │
│   ├── 📂 components/            # Reusable components
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── Footer.tsx            # Footer
│   │   ├── Logo.tsx              # Brand logo
│   │   ├── FloatingContact.tsx   # Floating contact button
│   │   ├── ScrollToTop.tsx       # Scroll to top button
│   │   └── ui/                   # UI components library
│   │
│   ├── 📂 pages/                 # Page components
│   │   ├── HomePage.tsx          # Landing page
│   │   ├── AboutPage.tsx         # About us page
│   │   ├── HeadhuntingPage.tsx   # Headhunting services
│   │   ├── EmployersPage.tsx     # For employers page
│   │   ├── ClientsPage.tsx       # Client showcase page
│   │   ├── ContactPage.tsx       # Contact form
│   │   └── UploadResumePage.tsx  # Resume upload
│   │
│   ├── 📂 styles/                # Styling
│   │   └── globals.css           # Global CSS + Tailwind
│   │
│   ├── 📂 data/                  # Mock data
│   │   └── jobsData.ts           # Sample job listings
│   │
│   └── 📂 hooks/                 # Custom React hooks
│       └── useScrollAnimation.ts  # Scroll animations
│
├── 📂 public/                     # Static files (served as-is)
│   └── (any images, favicon, etc.)
│
├── 📂 node_modules/               # Dependencies (DON'T COMMIT)
│   └── (created by npm install)
│
├── 📂 dist/                       # Build output (DON'T COMMIT)
│   └── (created by npm run build)
│
├── 📄 package.json               # Project metadata & dependencies
├── 📄 package-lock.json          # Locked dependency versions
├── 📄 vite.config.ts             # Vite bundler configuration
├── 📄 tsconfig.json              # TypeScript configuration
├── 📄 tsconfig.node.json         # TS config for Node scripts
├── 📄 index.html                 # HTML entry point
├── 📄 .gitignore                 # Files to ignore in Git
├── 📄 .env.example               # Environment variables template
│
└── 📂 Documentation/
    ├── README.md                  # Main documentation
    ├── SETUP_GUIDE.md            # This file
    ├── BACKEND_INTEGRATION.md    # Backend setup
    ├── DEPLOYMENT_GUIDE.md       # Deployment instructions
    └── EXPORT_INSTRUCTIONS.md    # Export from Figma Make
```

---

## 🛠️ Available Commands

### Development

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

### Common Tasks

```bash
# Install new package
npm install package-name

# Install new dev dependency
npm install -D package-name

# Remove package
npm uninstall package-name

# Update all packages
npm update

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## ⚙️ Configuration Files

### `package.json` - Project Dependencies

Key sections:
- **dependencies**: Runtime packages (React, Router, etc.)
- **devDependencies**: Development tools (TypeScript, Vite)
- **scripts**: Commands you can run (dev, build, preview)

### `vite.config.ts` - Build Tool Configuration

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,      // Development server port
    open: true,      // Auto-open browser
  },
})
```

### `tsconfig.json` - TypeScript Settings

Configures TypeScript compiler options and rules.

### `.env` - Environment Variables

Create `.env` file in root for local development:

```env
VITE_API_URL=http://localhost:5000/api
```

**Important:** Never commit `.env` with secrets!

---

## 🎨 Customization Guide

### Change Colors

Edit `src/styles/globals.css`:

```css
:root {
  --primary: #0A66C2;      /* Main blue */
  --secondary: #057642;    /* Green */
  --accent: #FFD700;       /* Yellow */
}
```

### Update Logo

Edit `src/components/Logo.tsx` to change branding.

### Add New Page

1. Create file: `src/pages/NewPage.tsx`
```tsx
export function NewPage() {
  return <div>New Page Content</div>;
}
```

2. Add route in `src/App.tsx`:
```tsx
import { NewPage } from './pages/NewPage';

// In Routes:
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link in `src/components/Navbar.tsx`

### Modify Content

- **Homepage**: Edit `src/pages/HomePage.tsx`
- **About**: Edit `src/pages/AboutPage.tsx`
- **Clients**: Edit `src/pages/ClientsPage.tsx`
- **Footer**: Edit `src/components/Footer.tsx`

---

## 🔌 Backend Integration

### Option 1: No Backend (Current State)

The app currently works with:
- ✅ Mock data for job listings
- ✅ Client-side form validation
- ✅ No actual data submission

Perfect for:
- Demo/prototype
- Testing frontend
- Design review

### Option 2: Add Backend

See `BACKEND_INTEGRATION.md` for:
- Node.js + Express setup
- Supabase integration (recommended)
- Firebase integration
- Database schemas
- API endpoints
- File upload handling

Quick Supabase Setup:
```bash
npm install @supabase/supabase-js
```

Create `src/lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://your-project.supabase.co',
  'your-anon-key'
)
```

---

## 🚀 Deployment

See `DEPLOYMENT_GUIDE.md` for complete instructions.

### Quick Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect GitHub repo to Vercel dashboard for auto-deployments.

### Build for Production

```bash
npm run build
```

Creates optimized files in `dist/` folder ready for deployment.

---

## 🐛 Troubleshooting

### "Cannot find module"

```bash
npm install
```

### Port 5173 already in use

```bash
# Use different port
npm run dev -- --port 3000

# Or kill the process using the port
# Mac/Linux:
lsof -ti:5173 | xargs kill

# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### TypeScript errors

```bash
npm install -D typescript @types/react @types/react-dom
```

### Module resolution errors

Check import paths match file locations:
```tsx
// Correct
import { Navbar } from './components/Navbar'

// Wrong (missing ./)
import { Navbar } from 'components/Navbar'
```

### Build fails

```bash
# Clear cache
rm -rf node_modules dist .vite package-lock.json

# Reinstall
npm install

# Rebuild
npm run build
```

### Hot reload not working

1. Save file (Ctrl+S)
2. Check terminal for errors
3. Restart dev server (Ctrl+C, then `npm run dev`)

---

## 📱 Testing

### Browser Testing

Test on:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

### Responsive Testing

In browser DevTools:
1. Press F12
2. Click device icon (Ctrl+Shift+M)
3. Test different screen sizes

### Mobile Testing

**Option 1: DevTools (Quick)**
- Use responsive mode in browser

**Option 2: Real Device (Best)**
1. Get your local IP:
```bash
# Mac/Linux
ifconfig | grep inet

# Windows
ipconfig
```

2. Start dev server with host:
```bash
npm run dev -- --host
```

3. On mobile, visit:
```
http://192.168.x.x:5173
```

---

## 🔒 Security Best Practices

Before deploying:

1. **Never commit sensitive data**
   - Add `.env` to `.gitignore` ✅
   - Use environment variables
   - Don't hardcode API keys

2. **Validate all inputs**
   - Client-side validation ✅
   - Server-side validation
   - Sanitize user data

3. **Use HTTPS in production**
   - Vercel/Netlify auto-provides ✅
   - Configure SSL certificate

4. **Keep dependencies updated**
```bash
npm audit
npm audit fix
```

---

## 📊 Performance Optimization

### Check Bundle Size

```bash
npm run build
# Check dist/ folder size
```

### Optimize Images

- Use WebP format
- Compress images
- Lazy load images

### Code Splitting

Use React.lazy() for large components:

```tsx
const ClientsPage = lazy(() => import('./pages/ClientsPage'));
```

### Lighthouse Audit

1. Open DevTools
2. Lighthouse tab
3. Run audit
4. Fix issues

---

## 🎓 Learning Resources

### Official Docs
- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/docs
- **Vite**: https://vitejs.dev
- **Tailwind CSS**: https://tailwindcss.com
- **React Router**: https://reactrouter.com

### Tutorials
- React tutorial: https://react.dev/learn
- TypeScript handbook: https://www.typescriptlang.org/docs/handbook
- Tailwind tutorials: https://tailwindcss.com/docs

---

## ✅ Checklist

### Initial Setup
- [ ] Node.js installed
- [ ] Project extracted/cloned
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] App opens in browser
- [ ] All pages accessible

### Customization
- [ ] Update branding/colors
- [ ] Replace placeholder content
- [ ] Update company information
- [ ] Add real images
- [ ] Configure contact details

### Backend (Optional)
- [ ] Choose backend option
- [ ] Set up database
- [ ] Configure API endpoints
- [ ] Test form submissions
- [ ] Set up file uploads

### Deployment
- [ ] Build successfully (`npm run build`)
- [ ] Choose hosting platform
- [ ] Configure environment variables
- [ ] Deploy to production
- [ ] Test live site
- [ ] Configure custom domain

---

## 🆘 Getting Help

1. **Read documentation files**
   - README.md
   - BACKEND_INTEGRATION.md
   - DEPLOYMENT_GUIDE.md

2. **Check common errors**
   - Review troubleshooting section
   - Search error message online

3. **Community resources**
   - Stack Overflow
   - React Discord
   - Reddit r/reactjs

4. **Official support**
   - Vite Discord
   - React GitHub discussions

---

## 🎉 You're All Set!

Your development environment is ready. Here's what to do next:

1. ✅ Explore the codebase
2. ✅ Customize content and styling
3. ✅ Add backend integration (optional)
4. ✅ Test thoroughly
5. ✅ Deploy to production
6. ✅ Share with the world!

**Happy coding! 🚀**

---

*Last updated: January 2025*
*For questions or issues, refer to the documentation files or community resources.*
