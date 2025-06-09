# Simulation Guide

This project uses an environment variable to set the public site URL used for meta tags and sitemap generation.

Set `NEXT_PUBLIC_BASE_URL` in your `.env` file to the domain where the site will be deployed. For production this should be:

```
NEXT_PUBLIC_BASE_URL=https://ebowwa.xyz
```

After building the app (`pnpm build`), the `scripts/generateSitemap.js` script runs automatically to create `public/sitemap.xml` and `public/robots.txt` using this value.

Ensure the variable is configured in your deployment environment so the generated URLs match your domain.
