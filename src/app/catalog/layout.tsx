// app/catalog/layout.tsx
import React from 'react';
import Link from 'next/link';
import '@/styles/global.css';

export const metadata = {
  title: 'Demo Catalog',
};

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-64 bg-white border-r p-4">
        <h2 className="text-xl font-bold mb-4">Catalog</h2>
        <nav className="space-y-2">
          <Link href="/" className="block text-blue-600 hover:underline">Home</Link>
          <Link href="/catalog" className="block text-blue-600 hover:underline">All Demos</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
