import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/landing/ui/card'
import { getAllChatShares } from '../../data/chatShares'

export const metadata = {
  title: 'Shared Chats',
  description: 'Collection of shared ChatGPT conversations',
};

export default function ChatSharesPage() {
  const chats = getAllChatShares()
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-center text-4xl font-extrabold mb-6">Shared Chats</h1>
        <div className="grid gap-6">
          {chats.map((chat) => (
            <Card
              key={chat.slug}
              className="bg-white/10 border border-white/20 backdrop-blur hover:border-teal-500/50 transition-all"
            >
              <CardHeader>
                <CardTitle>
                  <Link href={`/chat-shares/${chat.slug}`} className="hover:underline text-teal-300">
                    {chat.title}
                  </Link>
                </CardTitle>
                <p className="text-sm text-blue-200">{chat.date}</p>
              </CardHeader>
              {chat.url && (
                <CardContent>
                  <a
                    href={chat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:underline"
                  >
                    View on ChatGPT
                  </a>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

