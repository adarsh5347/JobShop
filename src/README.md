# The Job Shop - Modern Recruitment Website

A modern, production-ready recruitment website built with React, TypeScript, Vite, and Tailwind CSS.

---

## 📚 **Complete Documentation Available!**

This project includes comprehensive guides for every step:

- 📖 **[DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md)** - Start here! Complete documentation guide
- 📦 **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - What's included in this package
- ⚡ **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Essential commands and quick lookups
- 📤 **[EXPORT_INSTRUCTIONS.md](EXPORT_INSTRUCTIONS.md)** - How to export from Figma Make
- 🛠️ **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Detailed setup instructions
- 🔌 **[BACKEND_INTEGRATION.md](BACKEND_INTEGRATION.md)** - Connect to backend (3 options)
- 🚀 **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Deploy to production

**New to this project?** → Start with [DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **VS Code** (recommended) - [Download here](https://code.visualstudio.com/)

### Installation Steps

1. **Clone or download this project**
   ```bash
   # If using git
   git clone <repository-url>
   cd jobshopindia-website

   # Or extract the ZIP file and navigate to the folder
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   - Navigate to: http://localhost:5173
   - The app will auto-reload when you make changes

## 📁 Project Structure

```
jobshopindia-website/
├── public/                 # Static assets
├── src/
│   ├── App.tsx            # Main app component with routing
│   ├── main.tsx           # Application entry point
│   ├── components/        # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ClientsPage.tsx
│   │   ├── EmployersPage.tsx
│   │   └── ...
│   ├── styles/            # CSS files
│   │   └── globals.css
│   ├── data/              # Mock data
│   │   └── jobsData.ts
│   └── hooks/             # Custom React hooks
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── index.html             # HTML entry point
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally

# Linting
npm run lint         # Run ESLint
```

## 🎨 Features

- ✅ **Modern React** with TypeScript
- ✅ **Fast Build** with Vite
- ✅ **Tailwind CSS v4** for styling
- ✅ **React Router** for navigation
- ✅ **Motion (Framer Motion)** for animations
- ✅ **Lucide Icons** for beautiful icons
- ✅ **Fully Responsive** design
- ✅ **Glassmorphism** effects
- ✅ **Professional Branding** (Black, White, Yellow theme)
- ✅ **7 Complete Pages**:
  - Home
  - About Us
  - Headhunting
  - For Employers
  - Our Clients
  - Contact
  - Upload Resume

## 🔧 Customization

### Update Colors

Edit `/src/styles/globals.css` to change the color scheme:

```css
:root {
  --primary: #0A66C2;      /* LinkedIn Blue */
  --secondary: #057642;     /* Green accent */
  --accent: #FFD700;        /* Yellow accent */
}
```

### Update Content

- **Pages**: Edit files in `/src/pages/`
- **Components**: Edit files in `/src/components/`
- **Mock Data**: Edit `/src/data/jobsData.ts`

### Update Logo

Edit `/src/components/Logo.tsx` to customize your branding

## 📱 Mobile Optimization

The site is fully optimized for mobile browsers with:
- Touch-friendly tap targets (minimum 44px)
- Instant touch response (touch-manipulation)
- Responsive navigation menu
- Optimized spacing for mobile devices

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deploy Options

**Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**Netlify**
1. Drag and drop the `dist/` folder to netlify.com
2. Or connect your Git repository

**Other Hosting**
- Upload the `dist/` folder to any static hosting service
- Configure server to redirect all routes to `index.html` for React Router

## 📦 Building the ZIP File

To create a downloadable ZIP:

1. **Exclude node_modules and build files**:
   - Do NOT include `node_modules/`
   - Do NOT include `dist/`
   - Include only source files

2. **Files to include**:
   - All `/src/` files
   - All `/public/` files (if any)
   - Configuration files (package.json, vite.config.ts, etc.)
   - README.md
   - .gitignore

3. **Compress**:
   ```bash
   # On Mac/Linux
   zip -r jobshopindia-website.zip . -x "node_modules/*" "dist/*" ".git/*"
   
   # On Windows
   # Use 7-Zip or WinRAR to create ZIP, exclude node_modules and dist folders
   ```

## 🆘 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
npm install -D typescript @types/react @types/react-dom
```

## 💡 Recommended VS Code Extensions

1. **ES7+ React/Redux/React-Native snippets**
2. **Tailwind CSS IntelliSense**
3. **Prettier - Code formatter**
4. **ESLint**
5. **Auto Rename Tag**
6. **Path Intellisense**

## 📄 License

This project is private and proprietary.

## 🤝 Support

For issues or questions, please contact the development team.

---

Built with ❤️ using React + TypeScript + Vite + Tailwind CSS