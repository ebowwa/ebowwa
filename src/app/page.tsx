// app/page.tsx
"use client";
import LandingContainer from '@/components/landing/sections/general/General_Landing_Container'; // <LandingContainer />
import PerplexitySearch from '@/components/landing/sections/general/perplexity-search'; // <PerplexitySearch />
import InfoSubstrate from '@/components/landing/sections/general/InfoSubstrate'; // <InfoSubstrate />
import SiteMap, { SiteMapProps, SiteMapItem } from '@/components/landing/sections/general/SiteMap';
import siteMapData from './sitemap.json';

export default function HomePage() {
  return (
    <div>
      <SiteMap siteMap={siteMapData as SiteMapItem[]} />
    </div>
  );
}