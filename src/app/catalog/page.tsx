// app/catalog/page.tsx
import React from 'react';
import Link from 'next/link';
import { demos } from '@/data/catalog';

export default function CatalogPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Demo Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demos.map((demo) => (
          <Link
            key={demo.slug}
            href={`/catalog/${demo.slug}`}
            className="block p-4 border rounded-lg hover:shadow-lg bg-white"
          >
            <img
              src={demo.image || `/images/demos/${demo.slug}.png`}
              alt={demo.title}
              className="mb-4 w-full h-32 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{demo.title}</h2>
            <p className="text-gray-600">{demo.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
