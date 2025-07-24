// app/page.tsx
"use client";
import SiteMap, { SiteMapProps, SiteMapItem } from '@/components/landing/sections/general/SiteMap';
import siteMapData from '@public/html/sitemap.json';

export default function HomePage() {
  return (
    <div>
      <SiteMap siteMap={siteMapData as SiteMapItem[]} />
    </div>
  );
}