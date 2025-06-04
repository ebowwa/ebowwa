import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getChatShare, getAllChatShareSlugs } from '../../../data/chatShares';

export async function generateStaticParams() {
  const slugs = getAllChatShareSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const chat = getChatShare(params.slug);
  if (!chat) {
    return {
      title: 'Chat Not Found',
      description: 'The requested chat could not be found',
    };
  }
  return {
    title: chat.title,
    description: chat.title,
  };
}

export default function ChatSharePage({ params }: { params: { slug: string } }) {
  const chat = getChatShare(params.slug);
  if (!chat) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Link href="/chat-shares" className="text-blue-500 underline">Back</Link>
      <h1 className="text-3xl font-bold my-4">{chat.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{chat.date}</p>
      {chat.url ? (
        <a href={chat.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          View conversation on ChatGPT
        </a>
      ) : (
        <div className="prose" dangerouslySetInnerHTML={{ __html: chat.content }} />
      )}
    </div>
  );
}

