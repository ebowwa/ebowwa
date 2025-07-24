"use client";

import React, { useState } from 'react';
import Link from 'next/link';

type CatalogNavigationProps = {
  children?: React.ReactNode;
};

export default function CatalogNavigation({ children }: CatalogNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile header with menu button */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b">
        <h2 className="text-xl font-bold">Catalog</h2>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-600 hover:text-gray-900"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu (shown/hidden based on state) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b p-4">
          <nav className="space-y-3">
            <Link href="/" className="block text-blue-600 hover:underline py-2">Home</Link>
            <Link href="/catalog" className="block text-blue-600 hover:underline py-2">All Demos</Link>
          </nav>
        </div>
      )}
      
      <div className="flex flex-col md:flex-row">
        {/* Desktop sidebar - hidden on mobile */}
        <aside className="hidden md:block w-64 bg-white border-r p-4 h-screen sticky top-0">
          <h2 className="text-xl font-bold mb-4">Catalog</h2>
          <nav className="space-y-2">
            <Link href="/" className="block text-blue-600 hover:underline">Home</Link>
            <Link href="/catalog" className="block text-blue-600 hover:underline">All Demos</Link>
          </nav>
        </aside>
        
        {/* Main content */}
        {children}
      </div>
    </>
  );
}
