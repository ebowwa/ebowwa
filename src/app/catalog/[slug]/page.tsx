// app/catalog/[slug]/page.tsx
import React from 'react';
import { demos } from '@/data/catalog';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return demos.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const demo = demos.find((d) => d.slug === params.slug);
  if (!demo) return { title: 'Demo Not Found' };
  const imageUrl = demo.image || `/images/demos/${demo.slug}.png`;
  return {
    title: demo.title,
    description: demo.description,
    openGraph: { title: demo.title, description: demo.description, images: [imageUrl] },
    twitter: { card: 'summary_large_image', images: [imageUrl] },
  };
}

export default function DemoPage({ params }: Props) {
  const demo = demos.find((d) => d.slug === params.slug);
  
  if (!demo) {
    return (
      <div className="min-h-screen p-4 md:p-8 flex items-center justify-center bg-gray-50">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <h1 className="text-xl font-bold text-red-500 mb-2">Demo Not Found</h1>
          <p className="text-gray-600">The requested demo could not be found.</p>
        </div>
      </div>
    );
  }
  
  const imageUrl = demo.image || `/images/demos/${demo.slug}.png`;
  const DemoComponent = demo.Component;
  
  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm mb-4">
          <ol className="list-reset flex text-gray-600">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><span className="mx-2">/</span></li>
            <li><Link href="/catalog" className="hover:underline">Catalog</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="font-semibold">{demo.title}</li>
          </ol>
        </nav>
        <div className="relative w-full rounded-lg overflow-hidden mb-4 md:mb-6 aspect-video">
          <Image
            src={imageUrl}
            alt={demo.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-cover"
          />
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{demo.title}</h1>
        
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
          <DemoComponent />
        </div>
      </div>
    </div>
  );
}
