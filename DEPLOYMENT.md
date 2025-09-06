# UIinfinity Deployment Guide

## Vercel Deployment

### Prerequisites
- Node.js 18+ installed
- Vercel CLI installed (`npm i -g vercel`)
- Git repository with your code

### Steps to Deploy

1. **Prepare your project:**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

3. **Or connect via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository
   - Vercel will automatically detect it's a Vite project
   - Deploy!

### Configuration Files

- `vercel.json` - Vercel configuration
- `vite.config.ts` - Vite build configuration
- `.vercelignore` - Files to exclude from deployment

### Build Settings

- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Troubleshooting

If you encounter build errors:

1. **Clear cache:**
   ```bash
   rm -rf node_modules
   rm -rf dist
   npm install
   npm run build
   ```

2. **Check Node version:**
   ```bash
   node --version
   # Should be 18+
   ```

3. **Test build locally:**
   ```bash
   npm run build:test
   ```

### Environment Variables

No environment variables are required for basic deployment.

### Custom Domain

After deployment, you can add a custom domain in the Vercel dashboard under Project Settings > Domains.
