# Render Deployment Guide for Ranbidge Internship Website

## Quick Start

### Option 1: Using render.yaml (Recommended)

1. **Connect your GitHub repository to Render:**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Connect your GitHub account
   - Select the `ranbidgesolutionspvtltd/Ranbidge-Internship-Website` repository

2. **Configure the service:**
   - Name: `ranbidge-internship-website`
   - Environment: `Static Site`
   - Build Command: `cd "Ranbidge Intern Website" && npm install && npm run build`
   - Publish Directory: `Ranbidge Intern Website/dist`
   - Add Environment Variable: `GEMINI_API_KEY` (your actual API key)

3. **Deploy:** Click "Create Web Service"

### Option 2: Manual Configuration

1. **Create a new Static Site on Render:**
   - Go to Render Dashboard → "+" → "Static Site"
   - Connect your GitHub repository

2. **Configure settings:**
   ```
   Name: ranbidge-internship-website
   Branch: main
   Build Command: cd "Ranbidge Intern Website" && npm install && npm run build
   Publish Directory: Ranbidge Intern Website/dist
   Auto-Deploy: Yes
   ```

3. **Add Environment Variables:**
   - `GEMINI_API_KEY`: Your Gemini API key
   - `NODE_ENV`: production

## Environment Variables

Add these in your Render service settings:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
NODE_ENV=production
```

## Custom Domain (Optional)

1. **Go to your service settings → Custom Domains**
2. **Add your domain:** `ranbidge.com`
3. **Update DNS records:**
   ```
   Type: CNAME
   Name: @
   Value: your-service-name.onrender.com
   ```

## SSL Certificate

Render automatically provides:
- Free SSL certificates for all services
- Automatic HTTPS redirection
- Certificate renewal

## Performance Optimization

Render automatically includes:
- Global CDN
- HTTP/2 support
- Gzip compression
- Caching headers

## Monitoring

### Check deployment status:
- Visit Render Dashboard
- View service logs
- Monitor build progress

### Common issues:
1. **Build fails:** Check `GEMINI_API_KEY` environment variable
2. **404 errors:** Verify build output directory path
3. **Slow loading:** Enable caching headers in settings

## Automatic Deployments

Render automatically redeploys when:
- You push to the configured branch
- Environment variables change
- Build settings update

## Rollback

If deployment fails:
1. Go to service → Deploys
2. Click "Rollback" on a previous successful deploy
3. Or push a fix to trigger new deployment

## Troubleshooting

### Build Issues:
```bash
# Test locally before pushing
cd "Ranbidge Intern Website"
npm install
npm run build
```

### Environment Issues:
- Verify all required environment variables are set
- Check API key validity
- Ensure Node.js version compatibility

### Performance Issues:
- Monitor Render analytics
- Check CDN propagation
- Verify asset optimization

## Advanced Configuration

### Custom Headers (in render.yaml):
```yaml
headers:
  - path: /*
    name: X-Frame-Options
    value: SAMEORIGIN
```

### Redirects:
```yaml
redirects:
  - source: /old-path
    destination: /new-path
    statusCode: 301
```

## Support

- [Render Documentation](https://render.com/docs)
- [Render Status Page](https://status.render.com)
- Contact Render support for platform issues

## Deployment URL

After deployment, your site will be available at:
- Primary: `https://ranbidge-internship-website.onrender.com`
- Custom domain (if configured): `https://ranbidge.com`
