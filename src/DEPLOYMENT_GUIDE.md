# Deployment Guide

Complete guide to deploy The Job Shop website to production.

## 🚀 Deployment Options

1. [Vercel](#vercel-recommended) - Easiest, best for React apps
2. [Netlify](#netlify) - Similar to Vercel, great free tier
3. [AWS S3 + CloudFront](#aws-s3--cloudfront) - More control, enterprise
4. [Traditional Hosting](#traditional-hosting-cpanel) - cPanel/shared hosting

---

## Vercel (Recommended)

### Why Vercel?
- ✅ Free tier available
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments from Git
- ✅ Perfect for React/Vite apps
- ✅ Built by creators of Next.js

### Deployment Steps

#### Option 1: Deploy via Git (Recommended)

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/jobshop-website.git
   git push -u origin main
   ```

2. **Sign up for Vercel**
   - Go to https://vercel.com
   - Click "Sign Up"
   - Choose "Continue with GitHub"

3. **Import Repository**
   - Click "Add New Project"
   - Select your repository
   - Configure project:
     ```
     Framework Preset: Vite
     Build Command: npm run build
     Output Directory: dist
     Install Command: npm install
     ```

4. **Add Environment Variables**
   - Click "Environment Variables"
   - Add your variables:
     ```
     VITE_API_URL=https://your-api.com
     VITE_SUPABASE_URL=https://your-project.supabase.co
     VITE_SUPABASE_ANON_KEY=your-key
     ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Get your live URL: `https://your-project.vercel.app`

6. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., jobshopindia.com)
   - Update DNS records as instructed
   - Vercel auto-configures HTTPS

#### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Automatic Deployments

Once connected to Git:
- ✅ Every push to `main` → auto-deploys to production
- ✅ Pull requests → get preview deployments
- ✅ Rollback to any previous deployment in one click

---

## Netlify

### Deployment Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Sign up for Netlify**
   - Go to https://www.netlify.com
   - Sign up with GitHub/GitLab/Bitbucket

3. **Deploy Options**

   **Option A: Drag & Drop**
   - Drag the `dist/` folder to Netlify dashboard
   - Your site is live!

   **Option B: Git Integration**
   - Click "New site from Git"
   - Connect repository
   - Configure:
     ```
     Build command: npm run build
     Publish directory: dist
     ```

4. **Add Environment Variables**
   - Site Settings → Environment Variables
   - Add your variables

5. **Configure Redirects**

   Create `public/_redirects` file:
   ```
   /*    /index.html   200
   ```
   This ensures React Router works properly.

6. **Custom Domain**
   - Domain Settings → Add custom domain
   - Update DNS as instructed

### Netlify CLI Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

---

## AWS S3 + CloudFront

### Step 1: Build the Project

```bash
npm run build
```

### Step 2: Create S3 Bucket

1. Go to AWS Console → S3
2. Create bucket:
   - Name: `jobshopindia.com`
   - Region: Asia Pacific (Mumbai) for India
   - Uncheck "Block all public access"
3. Enable static website hosting:
   - Properties → Static website hosting → Enable
   - Index document: `index.html`
   - Error document: `index.html` (for React Router)

### Step 3: Upload Files

1. Upload all files from `dist/` folder
2. Set permissions:
   - Select all files → Actions → Make public

### Step 4: Configure Bucket Policy

Bucket Permissions → Bucket Policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::jobshopindia.com/*"
    }
  ]
}
```

### Step 5: Create CloudFront Distribution

1. Go to CloudFront → Create Distribution
2. Configure:
   - Origin Domain: Your S3 bucket website endpoint
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Allowed HTTP Methods: GET, HEAD, OPTIONS
   - Compress Objects: Yes
3. Custom Error Responses:
   - 403 → /index.html (200)
   - 404 → /index.html (200)

### Step 6: Configure Custom Domain

1. Route 53 or your DNS provider
2. Add CNAME record pointing to CloudFront distribution

### Deployment Script

Create `deploy.sh`:

```bash
#!/bin/bash

# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://jobshopindia.com --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"

echo "Deployment complete!"
```

---

## Traditional Hosting (cPanel)

### Step 1: Build the Project

```bash
npm run build
```

### Step 2: Prepare Files

1. Your `dist/` folder contains all files
2. Create `.htaccess` file in `dist/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures React Router works on Apache servers.

### Step 3: Upload Files

1. Login to cPanel
2. Open File Manager
3. Navigate to `public_html/` (or your domain folder)
4. Upload all files from `dist/`
5. Make sure `.htaccess` is uploaded

### Step 4: Configure Domain

- If using subdomain, point it to the upload directory
- Ensure SSL certificate is installed (Let's Encrypt free)

---

## Environment Variables for Production

### Create `.env.production`

```env
# Production API URL
VITE_API_URL=https://api.jobshopindia.com

# Supabase Production
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-production-key

# Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Sentry (Error Tracking)
VITE_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
```

### Build with Production Variables

```bash
npm run build
```

Vite automatically uses `.env.production` when building.

---

## Pre-Deployment Checklist

### Performance

- [ ] Run `npm run build` successfully
- [ ] Check bundle size (`dist/` folder)
- [ ] Optimize images (use WebP, compress)
- [ ] Remove console.logs
- [ ] Enable compression (gzip/brotli)

### SEO

- [ ] Update meta tags in `index.html`
- [ ] Add `robots.txt`
- [ ] Add `sitemap.xml`
- [ ] Configure Open Graph tags
- [ ] Set up Google Analytics
- [ ] Submit to Google Search Console

### Security

- [ ] Enable HTTPS
- [ ] Configure CORS properly
- [ ] Validate all environment variables
- [ ] Remove sensitive data from code
- [ ] Set up CSP headers
- [ ] Configure security headers

### Functionality

- [ ] Test all pages and routes
- [ ] Test forms (contact, upload, employer)
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Check 404 error handling
- [ ] Verify navigation works
- [ ] Test file uploads

### Backend

- [ ] Backend API is deployed
- [ ] Database is set up
- [ ] Email service is configured
- [ ] File storage is working
- [ ] Test all API endpoints
- [ ] Set up monitoring

---

## Post-Deployment

### 1. Create `robots.txt`

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://jobshopindia.com/sitemap.xml
```

### 2. Create `sitemap.xml`

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://jobshopindia.com/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://jobshopindia.com/about</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jobshopindia.com/headhunting</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jobshopindia.com/employers</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jobshopindia.com/clients</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://jobshopindia.com/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://jobshopindia.com/upload-resume</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

### 3. Set up Google Analytics

1. Create account at https://analytics.google.com
2. Get tracking ID (G-XXXXXXXXXX)
3. Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 4. Performance Monitoring

Install web-vitals:

```bash
npm install web-vitals
```

Add to `src/main.tsx`:

```typescript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### 5. Error Tracking with Sentry

```bash
npm install @sentry/react
```

Configure in `src/main.tsx`:

```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0,
});
```

---

## Custom Domain Setup

### DNS Configuration

For `jobshopindia.com`:

**Vercel/Netlify:**
```
Type    Name    Value
A       @       76.76.21.21 (Vercel IP)
CNAME   www     cname.vercel-dns.com
```

**CloudFront:**
```
Type    Name    Value
A       @       CloudFront Distribution URL
CNAME   www     CloudFront Distribution URL
```

### SSL Certificate

- **Vercel/Netlify**: Automatic (Let's Encrypt)
- **CloudFront**: Request from AWS Certificate Manager
- **cPanel**: Use Let's Encrypt SSL

---

## Monitoring & Maintenance

### Uptime Monitoring

- **UptimeRobot** (free): https://uptimerobot.com
- **Pingdom**: https://www.pingdom.com

### Performance Monitoring

- **Google PageSpeed Insights**: https://pagespeed.web.dev
- **GTmetrix**: https://gtmetrix.com
- **WebPageTest**: https://www.webpagetest.org

### Analytics

- **Google Analytics**: User behavior
- **Hotjar**: Heatmaps, recordings
- **Mixpanel**: Event tracking

---

## Troubleshooting

### React Router not working (404 errors)

**Vercel**: Automatically handled

**Netlify**: Add `_redirects` file:
```
/*    /index.html   200
```

**Apache/cPanel**: Add `.htaccess` (see above)

**Nginx**: Configure:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Slow Loading

1. Enable compression
2. Use CDN for static assets
3. Optimize images (WebP format)
4. Code splitting with React.lazy()
5. Enable caching headers

### CORS Errors

Configure backend to allow your domain:
```typescript
app.use(cors({
  origin: ['https://jobshopindia.com', 'https://www.jobshopindia.com'],
  credentials: true
}));
```

---

## Cost Estimates

### Free Tier

- **Vercel**: Free (hobby projects)
- **Netlify**: Free (100GB bandwidth/month)
- **Supabase**: Free (500MB database, 1GB storage)
- **Firebase**: Free (Spark plan)

### Paid Hosting

- **Vercel Pro**: $20/month
- **Netlify Pro**: $19/month
- **AWS**: ~$5-50/month (varies by traffic)
- **DigitalOcean**: $5-10/month
- **Traditional Hosting**: $3-10/month

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **AWS Docs**: https://docs.aws.amazon.com
- **Community**: Stack Overflow, Reddit r/webdev

Good luck with your deployment! 🚀
