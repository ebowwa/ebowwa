// app/catalog/page.tsx
import React from 'react';
import Link from 'next/link';
import { demos } from '@/data/catalog';

export default function CatalogPage() {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Demo Catalog</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {demos.map((demo) => (
            <Link
              key={demo.slug}
              href={`/catalog/${demo.slug}`}
              className="block p-3 md:p-4 border rounded-lg hover:shadow-lg bg-white transition-shadow duration-200"
            >
              <div className="aspect-video w-full overflow-hidden rounded mb-3">
                <img
                  src={demo.image || `/images/demos/${demo.slug}.png`}
                  alt={demo.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h2 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 line-clamp-1">{demo.title}</h2>
              <p className="text-sm md:text-base text-gray-600 line-clamp-2">{demo.description}</p>
            </Link>
          ))}
        </div>
        
        {demos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No demos available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
