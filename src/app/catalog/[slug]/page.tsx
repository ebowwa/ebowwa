// app/catalog/[slug]/page.tsx
import React from 'react';
import { demos } from '@/data/catalog';
import { Metadata } from 'next';
import Image from 'next/image';

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
  if (!demo) return <p>Demo not found</p>;
  const imageUrl = demo.image || `/images/demos/${demo.slug}.png`;
  const DemoComponent = demo.Component;
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <Image
        src={imageUrl}
        alt={demo.title}
        width={1200}
        height={630}
        priority
        className="mb-6 rounded"
      />
      <h1 className="text-3xl font-bold mb-6">{demo.title}</h1>
      <DemoComponent />
    </div>
  );
}
