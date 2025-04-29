// app/catalog/layout.tsx
import React from 'react';
import '@/styles/global.css';
import CatalogNavigation from './CatalogNavigation';

export const metadata = {
  title: 'Demo Catalog',
  description: 'Browse our collection of demos and projects',
};

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <CatalogNavigation>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </CatalogNavigation>
    </div>
  );
}
