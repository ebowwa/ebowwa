import React from 'react';
import Link from 'next/link';
import { getAllChatShares } from '../../data/chatShares';

export const metadata = {
  title: 'Shared Chats',
  description: 'Collection of shared ChatGPT conversations',
};

export default function ChatSharesPage() {
  const chats = getAllChatShares();
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Shared Chats</h1>
      {chats.map(chat => (
        <div key={chat.slug} className="border-b pb-4">
          <h2 className="text-xl font-semibold">
            <Link href={`/chat-shares/${chat.slug}`}>{chat.title}</Link>
          </h2>
          <p className="text-sm text-gray-500">{chat.date}</p>
          {chat.url && (
            <a
              href={chat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View on ChatGPT
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

