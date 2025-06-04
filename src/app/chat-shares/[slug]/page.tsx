import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/landing/ui/card'
import { getChatShare, getAllChatShareSlugs } from '../../../data/chatShares'

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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white py-16 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link href="/chat-shares" className="text-teal-400 hover:underline">&larr; Back</Link>
        <Card className="bg-white/10 border border-white/20 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-teal-300 text-3xl font-bold mb-2">{chat.title}</CardTitle>
            <p className="text-sm text-blue-200">{chat.date}</p>
          </CardHeader>
          <CardContent>
            {chat.url ? (
              <a href={chat.url} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                View conversation on ChatGPT
              </a>
            ) : (
              <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: chat.content }} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

