import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLink, getAllLinkSlugs } from '../../../data/links';

// Generate static params for all links
export async function generateStaticParams() {
  const slugs = getAllLinkSlugs();
  return slugs.map(slug => ({ slug }));
}

// Generate metadata for each link page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const link = getLink(params.slug);
  
  if (!link) {
    return {
      title: 'Link Not Found - Ebowwa Labs',
      description: 'The requested link could not be found',
    };
  }
  
  return {
    title: `${link.title}`,
    description: link.description,
    openGraph: {
      title: `${link.title}`,
      description: link.description,
      type: 'article',
      publishedTime: link.date,
      authors: ['Ebowwa Labs'],
    },
  };
}

export default function LinkPage({ params }: { params: { slug: string } }) {
  const link = getLink(params.slug);
  
  // If link doesn't exist, show 404
  if (!link) {
    notFound();
  }
  
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-500 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-green-500 blur-3xl"></div>
      </div>
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Navigation */}
        <div className="mb-12">
          <Link href="/links" className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-blue-200 hover:bg-white/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to All Links</span>
          </Link>
        </div>
        
        {/* Link Content */}
        <div className="max-w-4xl mx-auto bg-white/10 border border-white/20 rounded-xl p-8 backdrop-blur-sm">
          <div className="mb-6">
            <span className={`text-xs uppercase tracking-wider flex items-center mb-2 ${
              link.type === 'notion' ? 'text-teal-400' : 
              link.type === 'chatgpt' ? 'text-green-400' : 'text-blue-400'
            }`}>
              {link.type === 'notion' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )}
              {link.type === 'chatgpt' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              )}
              {link.type === 'other' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
                </svg>
              )}
              {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
            </span>
            
            <h1 className="text-4xl font-bold mb-4">{link.title}</h1>
            
            <div className="flex items-center text-blue-200/60 text-sm mb-8">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Added {link.date}
              </span>
              
              {link.url && (
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ml-6 flex items-center hover:text-teal-400 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Original
                </a>
              )}
            </div>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: link.content }} />
          </div>
          
          {link.tags && link.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {link.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-blue-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Related Links */}
        {link.related && link.related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Related Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {link.related.map((relatedSlug, index) => {
                const relatedLink = getLink(relatedSlug);
                if (!relatedLink) return null;
                
                return (
                  <Link 
                    key={index} 
                    href={`/links/${relatedSlug}`}
                    className="bg-white/10 border border-white/20 hover:border-teal-500/50 rounded-lg p-6 transition-all hover:transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
                  >
                    <span className={`text-xs uppercase tracking-wider flex items-center mb-2 ${
                      relatedLink.type === 'notion' ? 'text-teal-400' : 
                      relatedLink.type === 'chatgpt' ? 'text-green-400' : 'text-blue-400'
                    }`}>
                      {relatedLink.type.charAt(0).toUpperCase() + relatedLink.type.slice(1)}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-white hover:text-teal-400 transition-colors">
                      {relatedLink.title}
                    </h3>
                    <p className="text-blue-100 opacity-80 line-clamp-2">{relatedLink.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        
        <footer className="mt-16 text-center text-blue-300/60">
          <p>© {new Date().getFullYear()} Ebowwa Labs • Pushing the boundaries of what's possible</p>
        </footer>
      </div>
    </div>
  );
}
