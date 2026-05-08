# Cloudflare Deployment Configuration Guide

## ✅ Changes Made

### 1. Updated package.json Scripts

**File:** `package.json`

**Scripts configured:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "deploy": "opennextjs-cloudflare build --dangerouslyUseUnsupportedNextVersion && opennextjs-cloudflare deploy",
    "preview": "opennextjs-cloudflare build --dangerouslyUseUnsupportedNextVersion && opennextjs-cloudflare preview"
  }
}
```

**Key Changes:**
- ✅ Added `--dangerouslyUseUnsupportedNextVersion` flag to support Next.js 14.2.35
- ✅ Removed port specification from "start" script (Cloudflare doesn't need it)
- ✅ Added "deploy" script for production deployment
- ✅ Added "preview" script for preview deployments

### 2. Git Commit & Push

**Committed changes:**
```bash
git add .
git commit -m "Fix Cloudflare OpenNext deploy"
git push
```

**Status:** ✅ Successfully pushed to GitHub

---

## 🚀 Cloudflare Dashboard Configuration

### Step 1: Go to Cloudflare Dashboard

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages**
3. Select your project (or create a new one)

### Step 2: Configure Build Settings

Go to: **Settings → Builds & deployments**

#### Build Configuration:

| Setting | Value |
|---------|-------|
| **Framework preset** | Next.js |
| **Build command** | `npm run deploy` |
| **Build output directory** | `.worker-next` |
| **Root directory** | `/` (or leave empty) |
| **Node.js version** | 18.x or higher |

#### Environment Variables (if needed):

Add these if your app requires them:
```
NODE_VERSION=18
NEXT_PUBLIC_API_URL=https://doctoratesacademybackend.onrender.com
```

### Step 3: Deploy

1. Click **Save and Deploy**
2. Cloudflare will automatically:
   - Clone your repository
   - Run `npm install`
   - Run `npm run deploy` (which includes the `--dangerouslyUseUnsupportedNextVersion` flag)
   - Deploy to Cloudflare Workers

---

## 📋 Quick Reference

### Local Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview Cloudflare build locally
```

### Deployment
```bash
npm run deploy       # Deploy to Cloudflare Workers
```

### What Each Script Does

**`npm run deploy`:**
```bash
opennextjs-cloudflare build --dangerouslyUseUnsupportedNextVersion && opennextjs-cloudflare deploy
```
- Builds your Next.js app for Cloudflare Workers
- Uses `--dangerouslyUseUnsupportedNextVersion` to bypass Next.js 14.2.35 version check
- Deploys to Cloudflare Workers

**`npm run preview`:**
```bash
opennextjs-cloudflare build --dangerouslyUseUnsupportedNextVersion && opennextjs-cloudflare preview
```
- Builds your Next.js app for Cloudflare Workers
- Starts a local preview server
- Useful for testing before deploying

---

## 🔧 Troubleshooting

### Issue: "Unsupported Next.js version"
**Solution:** ✅ Already fixed! The `--dangerouslyUseUnsupportedNextVersion` flag is now included in the deploy script.

### Issue: Build fails with "command not found: opennextjs-cloudflare"
**Solution:** Install the package:
```bash
npm install -D @opennextjs/cloudflare
```

### Issue: Deployment succeeds but site doesn't work
**Possible causes:**
1. **Environment variables missing** - Add them in Cloudflare Dashboard
2. **API URLs incorrect** - Check `BASE_ASSET_URL` in `utils.js`
3. **Static files not loading** - Ensure `public` folder is included

### Issue: Images not loading after deployment
**Solution:** ✅ Already fixed! Images now use the correct backend URL:
```javascript
https://doctoratesacademybackend.onrender.com/uploads/[filename]
```

---

## 📝 Important Notes

### Next.js Version
- **Current version:** 14.2.35
- **OpenNext support:** Using `--dangerouslyUseUnsupportedNextVersion` flag
- **Recommendation:** This flag allows deployment but may have compatibility issues. Consider upgrading to a supported Next.js version in the future.

### Backend API
- **Backend URL:** `https://doctoratesacademybackend.onrender.com`
- **No changes required** - Backend remains unchanged
- **CORS:** Ensure backend allows requests from your Cloudflare domain

### Static Assets
- **Public folder:** All files in `/public` are served as static assets
- **Images:** Served from backend at `/uploads/` path
- **Fonts, CSS, JS:** Served from Cloudflare Workers

---

## ✅ Deployment Checklist

Before deploying, ensure:

- [x] package.json scripts updated with `--dangerouslyUseUnsupportedNextVersion`
- [x] Changes committed and pushed to GitHub
- [ ] Cloudflare project connected to GitHub repository
- [ ] Build command set to `npm run deploy`
- [ ] Build output directory set to `.worker-next`
- [ ] Environment variables configured (if needed)
- [ ] Custom domain configured (optional)

---

## 🎯 Expected Result

After successful deployment:

1. **Cloudflare Workers URL:** `https://your-project.pages.dev`
2. **Custom domain:** (if configured) `https://yourdomain.com`
3. **All images loading** from backend
4. **All pages working** correctly
5. **API calls** connecting to backend

---

## 📞 Support

If deployment fails:

1. Check Cloudflare build logs
2. Verify build command is exactly: `npm run deploy`
3. Ensure Node.js version is 18.x or higher
4. Check that all dependencies are installed
5. Verify environment variables are set correctly

---

## 🔄 Future Updates

To update your deployment:

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```
3. Cloudflare will automatically rebuild and redeploy

---

## Summary

✅ **package.json updated** with correct OpenNext scripts  
✅ **Changes committed and pushed** to GitHub  
✅ **Ready for Cloudflare deployment**  

**Next step:** Configure Cloudflare Dashboard with build command: `npm run deploy`
