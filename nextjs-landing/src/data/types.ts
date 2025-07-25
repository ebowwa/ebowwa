// src/data/types.ts

export interface Link {
  slug: string;
  title: string;
  description: string;
  type: 'notion' | 'chatgpt' | 'other';
  date: string;
  url?: string;
  content: string;
  tags?: string[];
  related?: string[];
}

export interface ChatShare {
  slug: string;
  title: string;
  date: string;
  url?: string;
  content: string;
}
