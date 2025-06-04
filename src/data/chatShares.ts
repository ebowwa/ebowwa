import { ChatShare } from './types';
import chatSharesData from './chatShares/data';

export function getAllChatShares(): ChatShare[] {
  return chatSharesData;
}

export function getChatShare(slug: string): ChatShare | undefined {
  return chatSharesData.find(chat => chat.slug === slug);
}

export function getAllChatShareSlugs(): string[] {
  return chatSharesData.map(chat => chat.slug);
}

