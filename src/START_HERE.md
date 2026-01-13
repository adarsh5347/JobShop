# 👋 START HERE - Your First Steps

Welcome to The Job Shop Website! This guide will help you get started in just a few minutes.

---

## ✨ What is This?

This is a **complete, modern recruitment website** ready to use! It includes:
- 🏠 7 professional pages (Home, About, Clients, Contact, etc.)
- 📱 Fully responsive (works on phones, tablets, computers)
- 🎨 Modern design with animations
- 💼 Professional features (forms, file uploads, etc.)

---

## 🎯 Choose Your Path

### Path 1: "I just want to see it work!" 
**⏱️ Time: 5 minutes**

1. Make sure you have **Node.js** installed
   - Download from: https://nodejs.org/
   - Get the LTS version (recommended)

2. Open terminal/command prompt in this folder

3. Run these commands:
   ```bash
   npm install
   npm run dev
   ```

4. Open browser to: `http://localhost:5173`

**That's it!** Your website is now running! 🎉

---

### Path 2: "I want to customize it"
**⏱️ Time: 30 minutes**

1. **Follow Path 1 first** (get it running)

2. **Read this file**: [`SETUP_GUIDE.md`](SETUP_GUIDE.md)
   - Explains every folder and file
   - Shows how to customize colors, content, etc.

3. **Make your changes**:
   - Edit pages in `/src/pages/`
   - Edit components in `/src/components/`
   - Change colors in `/src/styles/globals.css`

4. **See changes instantly** - Just save the file!

---

### Path 3: "I want to add a database and deploy it"
**⏱️ Time: 2-4 hours**

1. **Follow Path 1 first** (get it running)

2. **Choose backend option**:
   - Read: [`BACKEND_INTEGRATION.md`](BACKEND_INTEGRATION.md)
   - **Recommended**: Supabase (easiest, free tier)

3. **Deploy to internet**:
   - Read: [`DEPLOYMENT_GUIDE.md`](DEPLOYMENT_GUIDE.md)
   - **Recommended**: Vercel (easiest, free tier)

---

## 🆘 "I'm completely new to this!"

No problem! Here's what you need:

### Step 1: Install Node.js
1. Go to: https://nodejs.org/
2. Click the big green button (LTS version)
3. Download and install
4. Restart your computer

### Step 2: Get a Code Editor
1. Download VS Code: https://code.visualstudio.com/
2. Install it
3. Open it

### Step 3: Open This Project
1. In VS Code, click: **File → Open Folder**
2. Select this project folder
3. Click **Select Folder**

### Step 4: Open Terminal
1. In VS Code, click: **Terminal → New Terminal**
   - Or press: `` Ctrl+` `` (backtick key)
2. You should see a command prompt at the bottom

### Step 5: Install Dependencies
Type this command and press Enter:
```bash
npm install
```

Wait 2-3 minutes. You'll see lots of text - that's normal!

### Step 6: Start the Website
Type this command and press Enter:
```bash
npm run dev
```

You should see:
```
  VITE ready in 500 ms
  ➜  Local: http://localhost:5173/
```

### Step 7: View in Browser
1. Hold Ctrl (or Cmd on Mac) and click the link
2. OR open browser and type: `http://localhost:5173`

**🎉 Success!** Your website is running!

---

## 📚 What Should I Read?

### If you want to...

**...understand what's included**
→ Read: [`PROJECT_SUMMARY.md`](PROJECT_SUMMARY.md)

**...see a list of all guides**
→ Read: [`DOCUMENTATION_INDEX.md`](DOCUMENTATION_INDEX.md)

**...find a command quickly**
→ Read: [`QUICK_REFERENCE.md`](QUICK_REFERENCE.md)

**...export from Figma Make**
→ Read: [`EXPORT_INSTRUCTIONS.md`](EXPORT_INSTRUCTIONS.md)

**...set up step-by-step**
→ Read: [`SETUP_GUIDE.md`](SETUP_GUIDE.md)

**...add backend/database**
→ Read: [`BACKEND_INTEGRATION.md`](BACKEND_INTEGRATION.md)

**...deploy to production**
→ Read: [`DEPLOYMENT_GUIDE.md`](DEPLOYMENT_GUIDE.md)

---

## 🎨 Quick Customization Tips

### Change Colors
Edit this file: `/src/styles/globals.css`

Find these lines:
```css
:root {
  --primary: #0A66C2;    /* Change this to your primary color */
  --secondary: #057642;   /* Change this to your secondary color */
  --accent: #FFD700;      /* Change this to your accent color */
}
```

### Change Homepage Text
Edit this file: `/src/pages/HomePage.tsx`

Find text between `>` and `<` and change it:
```tsx
<h1>Your New Title Here</h1>
<p>Your new description here</p>
```

### Add Your Logo
Edit this file: `/src/components/Logo.tsx`

Replace with your company name or logo image.

---

## 💡 Important Commands

```bash
# Start the website (development mode)
npm run dev

# Stop the website
Press: Ctrl + C (in terminal)

# Build for production
npm run build

# Install a new package
npm install package-name
```

---

## 🐛 Common Problems & Solutions

### Problem: "npm: command not found"
**Solution**: Node.js is not installed or not in PATH
- Install Node.js from: https://nodejs.org/
- Restart your computer
- Try again

### Problem: "Port 5173 already in use"
**Solution**: Another app is using that port
```bash
npm run dev -- --port 3000
```

### Problem: "Module not found"
**Solution**: Dependencies not installed
```bash
npm install
```

### Problem: "Can't find the file"
**Solution**: Make sure you're in the right folder
```bash
# Check current directory
pwd

# List files
ls
```

### Problem: "Permission denied"
**Solution**: Run without sudo on Mac/Linux
```bash
npm install --unsafe-perm
```

---

## 📱 Testing on Your Phone

1. **Find your computer's IP address**

   **Windows:**
   ```bash
   ipconfig
   # Look for "IPv4 Address"
   ```

   **Mac/Linux:**
   ```bash
   ifconfig
   # Look for "inet" under en0
   ```

2. **Start server with host flag**
   ```bash
   npm run dev -- --host
   ```

3. **On your phone**
   - Connect to same WiFi as your computer
   - Open browser
   - Go to: `http://YOUR-IP:5173`
   - Example: `http://192.168.1.100:5173`

---

## ✅ Success Checklist

After following this guide, you should be able to:

- [ ] Open the project in VS Code
- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` successfully
- [ ] See the website in browser
- [ ] Navigate between pages
- [ ] Stop the server (Ctrl+C)

---

## 🎓 Learning Resources

### Absolute Beginners
- **HTML/CSS Basics**: https://www.w3schools.com/
- **JavaScript Basics**: https://javascript.info/
- **Command Line Basics**: Search "command line tutorial" on YouTube

### React Learners
- **React Tutorial**: https://react.dev/learn
- **React in 30 minutes**: Search on YouTube

### Advanced
- **TypeScript**: https://www.typescriptlang.org/docs
- **Vite**: https://vitejs.dev
- **Tailwind CSS**: https://tailwindcss.com

---

## 🎯 Next Steps

Once you have it running:

1. ✅ **Explore the website** - Click through all pages
2. ✅ **Make a small change** - Edit some text and save
3. ✅ **Read SETUP_GUIDE.md** - Understand the structure
4. ✅ **Customize it** - Make it yours!
5. ✅ **Deploy it** - Put it on the internet!

---

## 🆘 Still Stuck?

1. **Read the error message** - It usually tells you what's wrong
2. **Google the error** - Someone else has probably had this issue
3. **Check troubleshooting** - Every guide has a troubleshooting section
4. **Ask for help** - Stack Overflow, Reddit r/webdev

---

## 🎉 You're Ready!

You now know enough to get started! Here's your action plan:

1. ✅ Install Node.js (if not installed)
2. ✅ Open project in VS Code
3. ✅ Run `npm install`
4. ✅ Run `npm run dev`
5. ✅ Open `http://localhost:5173` in browser
6. 🎊 Celebrate! Your website is running!

---

## 📞 Quick Help Reference

**Command to install**: `npm install`
**Command to run**: `npm run dev`
**Command to stop**: `Ctrl + C`
**Local URL**: `http://localhost:5173`

**Terminal not working?**
- Make sure you're in the project folder
- Look at the folder path in terminal

**Website not loading?**
- Check if terminal shows "ready" message
- Try `http://localhost:5173` in browser
- Check if port 5173 is available

---

**🚀 Now go build something amazing!**

Remember: Every expert was once a beginner. You've got this! 💪

---

*Need more help? Check out [DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md) for all available guides!*
