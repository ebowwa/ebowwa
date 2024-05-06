// app/page/tsx
"use client"
import LandingContainer from '@/components/landing/sections/General_Landing_Container';
import PerplexitySearch from '@/components/landing/sections/perplexity-search';
import InfoSubstrate from '@/components/landing/sections/InfoSubstrate'
export default function HomePage() {
    return (
        <div>
            <PerplexitySearch />
            <LandingContainer />
            <InfoSubstrate />
        </div>
    );
}