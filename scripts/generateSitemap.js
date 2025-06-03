const fs = require('fs');
const path = require('path');
const glob = require('glob');
const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

const pages = glob.sync('src/app/**/page.tsx', { ignore: ['**/(api)/**'] });

const urls = pages.map((page) => {
  let route = page
    .replace('src/app', '')
    .replace('/page.tsx', '')
    .replace(/\/route$/, '')
    .replace(/\/(index)?$/, '/');
  if (route === '/page') route = '/';
  return `${siteUrl}${route}`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((url) => `  <url><loc>${url}</loc></url>`)
  .join('\n')}\n</urlset>`;

fs.writeFileSync(path.join('public', 'sitemap.xml'), sitemap);
fs.writeFileSync(
  path.join('public', 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`
);
