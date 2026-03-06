# Render Static Site Deployment Guide

## Quick Setup for Static Site

### Step 1: Create Static Site on Render

1. **Go to [Render Dashboard](https://dashboard.render.com/)**
2. **Click "New +" → "Static Site"**
3. **Connect your GitHub repository:** `ranbidgesolutionspvtltd/Ranbidge-Internship-Website`

### Step 2: Configure Static Site Settings

```
Name: ranbidge-internship-website
Branch: main
Build Command: cd "Ranbidge Intern Website" && npm install && npm run build
Publish Directory: Ranbidge Intern Website/dist
Auto-Deploy: Yes
```

### Step 3: Add Environment Variables

Go to "Environment" tab and add:
```
GEMINI_API_KEY=your_gemini_api_key_here
NODE_ENV=production
```

### Step 4: Deploy

Click "Create Static Site" - Render will automatically build and deploy!

## What Happens During Deployment

1. **Render clones your repository**
2. **Runs the build command:** `cd "Ranbidge Intern Website" && npm install && npm run build`
3. **Publishes the `dist` folder** to the global CDN
4. **Activates your site** at the provided URL

## Your Live URLs

After deployment, your site will be available at:
- **Primary:** `https://ranbidge-internship-website.onrender.com`
- **Custom domain:** Add in settings if needed

## Static Site Benefits

✅ **Lightning fast** - No server overhead  
✅ **Global CDN** - Automatic worldwide distribution  
✅ **Free SSL** - HTTPS automatically enabled  
✅ **Auto-scaling** - Handles unlimited traffic  
✅ **Cost-effective** - Free tier available  

## SEO Features Included

- ✅ Meta tags and Open Graph data
- ✅ Structured data schema
- ✅ Sitemap.xml at `/sitemap.xml`
- ✅ Robots.txt at `/robots.txt`
- ✅ Semantic HTML structure

## Security Headers (Auto-configured)

- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Content-Security-Policy: Default security policy

## Custom Domain (Optional)

1. **Go to service settings → Custom Domains**
2. **Add domain:** `ranbidge.com`
3. **Update DNS:**
   ```
   Type: CNAME
   Name: @
   Value: ranbidge-internship-website.onrender.com
   ```

## Troubleshooting

### Build Fails
- Check `GEMINI_API_KEY` environment variable
- Verify build command path: `cd "Ranbidge Intern Website"`
- Test locally: `npm run build`

### 404 Errors
- Verify publish directory: `Ranbidge Intern Website/dist`
- Check if `dist` folder exists after build
- Ensure React Router is working (SPA routing configured)

### Slow Loading
- Enable caching in Render settings
- Optimize images and assets
- Check CDN propagation

## Automatic Updates

Render automatically redeploys when:
- You push to `main` branch
- Environment variables change
- Build settings update

## Performance Monitoring

- **Render Dashboard:** View build logs and status
- **Analytics:** Built-in performance metrics
- **Uptime:** 99.9% uptime guarantee

## Rollback

If deployment fails:
1. Go to service → Deploys
2. Click "Rollback" on previous successful deploy
3. Or push a fix to trigger new deployment

## Support Resources

- [Render Static Sites Docs](https://render.com/docs/static-sites)
- [Render Status Page](https://status.render.com)
- Contact Render support for platform issues

## Production Checklist

Before going live:
- [ ] Add `GEMINI_API_KEY` environment variable
- [ ] Test build locally: `npm run build`
- [ ] Verify all pages load correctly
- [ ] Check SEO meta tags
- [ ] Test mobile responsiveness
- [ ] Set up custom domain (optional)

---

**Your static site is ready for deployment!** 🚀

The deployment process is fully automated - just connect your repo and Render handles the rest.