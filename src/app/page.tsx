// app/page/tsx
"use client"
import LandingContainer from '@/components/landing/sections/General_Landing_Container';
import Component from '@/components/landing/sections/Search'
export default function HomePage() {
    return (
        <div>
            <Component />
            <LandingContainer />
        </div>
    );
}