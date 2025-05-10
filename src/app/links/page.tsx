import React from 'react';
import Link from 'next/link';
import { getAllLinks } from '../../data/links';

export const metadata = {
  title: 'Interesting Links - Ebowwa Labs',
  description: 'A collection of interesting resources, notes, and conversations worth sharing',
};

export default function LinksPage() {
  const links = getAllLinks();
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
        <header className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-3 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400 animate-pulse">
              Interesting Links
            </span>
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            A collection of interesting resources, notes, and conversations I've found worth keeping.
          </p>
        </header>

        {/* Back to Home Link */}
        <div className="mb-12 text-center">
          <Link href="/" className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-blue-200 hover:bg-white/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="search-container mb-12 max-w-3xl mx-auto">
          <div className="search-input-container relative mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              id="search" 
              placeholder="Search links..." 
              className="w-full py-3 pl-10 pr-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div className="filters flex flex-wrap gap-3 justify-center">
            <button className="filter-btn active bg-white/10 border border-white/20 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all data-[active=true]:bg-teal-500/30 data-[active=true]:border-teal-500/50 data-[active=true]:text-teal-300" data-filter="all" data-active="true">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
              All
            </button>
            <button className="filter-btn bg-white/10 border border-white/20 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all" data-filter="notion">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Notion
            </button>
            <button className="filter-btn bg-white/10 border border-white/20 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all" data-filter="chatgpt">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              ChatGPT
            </button>
            <button className="filter-btn bg-white/10 border border-white/20 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all" data-filter="other">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
              </svg>
              Other
            </button>
          </div>
        </div>

        <div className="links-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto" id="links">
          {/* Dynamic links from data file */}
          {links.map((link) => (
            <div key={link.slug} className="link-card bg-white/10 border border-white/20 hover:border-teal-500/50 rounded-lg p-6 transition-all hover:transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]" data-type={link.type}>
              <span className={`link-type text-xs uppercase tracking-wider flex items-center mb-2 ${
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
              <h3 className="link-title text-xl font-bold mb-2 text-white">
                <Link href={`/links/${link.slug}`} className={`hover:text-${
                  link.type === 'notion' ? 'teal' : 
                  link.type === 'chatgpt' ? 'green' : 'blue'
                }-400 transition-colors`}>
                  {link.title}
                </Link>
              </h3>
              <p className="link-description text-blue-100 opacity-80 mb-4">{link.description}</p>
              <span className="link-date text-xs text-blue-200/60 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Added {link.date}
              </span>
            </div>
          ))}
        </div>

        <footer className="mt-16 text-center text-blue-300/60">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </footer>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        // Client-side JavaScript for search and filtering
        document.addEventListener('DOMContentLoaded', function() {
          const search = document.getElementById('search');
          const linkCards = document.querySelectorAll('.link-card');
          const filterButtons = document.querySelectorAll('.filter-btn');
          
          search.addEventListener('input', filterLinks);
          
          filterButtons.forEach(button => {
            button.addEventListener('click', () => {
              // Set active state
              filterButtons.forEach(btn => {
                btn.dataset.active = "false";
                btn.classList.remove('bg-teal-500/30', 'border-teal-500/50', 'text-teal-300');
                btn.classList.add('bg-white/10', 'border-white/20');
              });
              
              button.dataset.active = "true";
              button.classList.remove('bg-white/10', 'border-white/20');
              button.classList.add('bg-teal-500/30', 'border-teal-500/50', 'text-teal-300');
              
              filterLinks();
            });
          });
          
          function filterLinks() {
            const searchTerm = search.value.toLowerCase();
            const activeFilter = document.querySelector('.filter-btn[data-active="true"]').dataset.filter;
            
            linkCards.forEach(card => {
              const title = card.querySelector('.link-title').textContent.toLowerCase();
              const description = card.querySelector('.link-description').textContent.toLowerCase();
              const type = card.dataset.type;
              
              const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
              const matchesFilter = activeFilter === 'all' || type === activeFilter;
              
              if (matchesSearch && matchesFilter) {
                card.style.display = 'block';
              } else {
                card.style.display = 'none';
              }
            });
          }
        });
      ` }} />
    </div>
  );
}
