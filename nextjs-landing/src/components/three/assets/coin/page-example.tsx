"use client";

import React from 'react';
import CoinScene from './CoinContainer';

const CoinPage: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <CoinScene />
        </div>
    );
};

export default CoinPage;

// todo timing swirl to the coin
// add lazy loading page refresh
