# Deployment Guide for Ranbidge Internship Website

## Overview
This guide covers deployment options for the Ranbidge Internship Portal, a React-based web application built with Vite.

## Prerequisites
- Node.js 18+ 
- Docker & Docker Compose
- Domain name (ranbidge.com)
- SSL certificate (optional but recommended)

## Environment Setup

1. **Copy environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Deployment Options

### Option 1: Docker Deployment (Recommended)

1. **Build and run with Docker Compose:**
   ```bash
   docker-compose up -d
   ```

2. **For SSL setup:**
   ```bash
   docker-compose --profile ssl up -d
   ```

3. **View logs:**
   ```bash
   docker-compose logs -f
   ```

### Option 2: Manual Deployment

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Serve with nginx:**
   ```bash
   # Copy dist files to nginx web root
   sudo cp -r dist/* /var/www/html/
   
   # Restart nginx
   sudo systemctl restart nginx
   ```

### Option 3: CI/CD with GitHub Actions

1. **Set up GitHub Secrets:**
   - `DOCKER_USERNAME`: Your Docker Hub username
   - `DOCKER_PASSWORD`: Your Docker Hub password/token
   - `GEMINI_API_KEY`: Your Gemini API key
   - `PROD_HOST`: Production server IP/hostname
   - `PROD_USER`: SSH username for production server
   - `PROD_SSH_KEY`: SSH private key for production server

2. **Push to main branch to trigger deployment:**
   ```bash
   git push origin main
   ```

## SSL Certificate Setup

### Using Let's Encrypt (Recommended)

1. **Install certbot:**
   ```bash
   sudo apt update
   sudo apt install certbot python3-certbot-nginx
   ```

2. **Obtain certificate:**
   ```bash
   sudo certbot --nginx -d ranbidge.com -d www.ranbidge.com
   ```

3. **Auto-renewal:**
   ```bash
   sudo crontab -e
   # Add: 0 12 * * * /usr/bin/certbot renew --quiet
   ```

## Performance Optimization

1. **Enable gzip compression** (configured in nginx.conf)
2. **Set up caching headers** (configured in nginx.conf)
3. **Use CDN for static assets**
4. **Enable HTTP/2** (configured in nginx.conf)

## Monitoring and Maintenance

1. **Check application health:**
   ```bash
   curl -I https://ranbidge.com
   ```

2. **Monitor Docker containers:**
   ```bash
   docker stats
   docker-compose ps
   ```

3. **Update application:**
   ```bash
   git pull origin main
   docker-compose build
   docker-compose up -d
   ```

## SEO Configuration

- **Sitemap:** Available at `/sitemap.xml`
- **Robots.txt:** Available at `/robots.txt`
- **Meta tags:** Configured in `index.html`
- **Structured data:** JSON-LD schema included

## Security Considerations

- **Security headers:** Configured in nginx.conf
- **CSP policy:** Configured in nginx.conf
- **Rate limiting:** Consider implementing in nginx
- **Regular updates:** Keep dependencies updated

## Troubleshooting

### Common Issues

1. **Build fails:**
   - Check Node.js version (requires 18+)
   - Verify API keys in .env
   - Check for missing dependencies

2. **Docker issues:**
   - Check Docker daemon status
   - Verify port availability (80, 443)
   - Check nginx configuration

3. **SSL issues:**
   - Verify domain DNS records
   - Check certificate expiration
   - Validate nginx SSL configuration

### Log Locations

- **Nginx logs:** `/var/log/nginx/`
- **Docker logs:** `docker-compose logs`
- **Application logs:** Console output in browser

## Backup Strategy

1. **Database backups** (if applicable)
2. **Configuration backups:**
   ```bash
   tar -czf backup-$(date +%Y%m%d).tar.gz nginx.conf docker-compose.yml .env
   ```
3. **Code repository:** Git provides version control

## Support

For deployment issues:
1. Check logs for error messages
2. Verify configuration files
3. Test with local development setup
4. Review GitHub Actions workflow status
