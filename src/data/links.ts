// src/data/links.ts
import { Link } from './types';
import linksData from './links/data';

// Get all links
export function getAllLinks(): Link[] {
  return linksData;
}

// Get all link slugs for static generation
export function getAllLinkSlugs(): string[] {
  return linksData.map(link => link.slug);
}

// Get a specific link by slug
export function getLink(slug: string): Link | undefined {
  return linksData.find(link => link.slug === slug);
}

// Get links by type
export function getLinksByType(type: 'notion' | 'chatgpt' | 'other'): Link[] {
  return linksData.filter(link => link.type === type);
}

// Get links by tag
export function getLinksByTag(tag: string): Link[] {
  return linksData.filter(link => link.tags?.includes(tag));
}

// Search links by query
export function searchLinks(query: string): Link[] {
  const lowercaseQuery = query.toLowerCase();
  return linksData.filter(link => 
    link.title.toLowerCase().includes(lowercaseQuery) || 
    link.description.toLowerCase().includes(lowercaseQuery) ||
    link.content.toLowerCase().includes(lowercaseQuery) ||
    link.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}
