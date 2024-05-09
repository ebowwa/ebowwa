// app/page.tsx
"use client";
import LandingContainer from '@/components/landing/sections/General_Landing_Container'; // <LandingContainer />
import PerplexitySearch from '@/components/landing/sections/perplexity-search'; // <PerplexitySearch />
import InfoSubstrate from '@/components/landing/sections/InfoSubstrate'; // <InfoSubstrate />
import SiteMap, { SiteMapProps, SiteMapItem } from '@/components/landing/sections/SiteMap';
import siteMapData from './sitemap.json';

export default function HomePage() {
  return (
    <div>
      <SiteMap siteMap={siteMapData as SiteMapItem[]} />
    </div>
  );
}