"use client"
import React from 'react';
import ContactUs from '@/components/landing/sections/general/ContactUs';

const HomePage: React.FC = () => {
    return (
        <div>
            <ContactUs
                title="Get in Touch"
                description="Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible."
            />
            {/* Add other components or content for the homepage */}
        </div>
    );
};

export default HomePage;
