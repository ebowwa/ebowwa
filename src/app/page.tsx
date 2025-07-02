'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import translations from './en.json';
import {
  DevelopersImages,
  AppEnthusiastsImages,
  /* ThinkersImages, */
  EmployersImages,
  LinksImages
} from '@/utils/AssetCatalog';

// Card type definition for better type safety
type CardProps = {
  title: string;
  description: string;
  icon?: string;
  imageUrl?: string;
  imageAlt?: string;
  images?: Array<{ url: string; alt: string }>; // For carousel support
  linkUrl?: string;
  linkText?: string;
  color: 'cyan' | 'emerald' | 'purple' | 'red' | 'teal';
  showLinks?: boolean;
  disabled?: boolean;
  disabledText?: string;
  disabledNote?: string;
};

// Carousel component for cards
const ImageCarousel = ({ 
  images, 
  colorClass 
}: { 
  images: Array<{ url: string; alt: string }>, 
  colorClass: string 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-advance timer for the carousel
  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(timer);
  }, [currentIndex, images.length]);

  // Handle carousel for single images differently
  if (images.length === 1) {
    return (
      <Image
        src={images[0].url}
        alt={images[0].alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-contain transition-transform duration-300 group-hover:scale-105"
      />
    );
  }

  return (
    <div className="w-full h-full relative">
      {/* Images container with transition effect */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`absolute w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? `bg-${colorClass} w-3` : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Previous/Next buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

// Reusable Card Component
const FeatureCard = ({
  title,
  description,
  icon,
  imageUrl,
  imageAlt,
  images,
  linkUrl,
  linkText,
  color,
  showLinks = true,
  disabled = false,
  disabledText,
  disabledNote
}: CardProps) => {
  // Color mappings
  const colorMap = {
    cyan: {
      hover: 'hover:border-cyan-500/50',
      shadow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]',
      gradient: 'from-blue-500/20',
      text: 'text-cyan-400',
      titleHover: 'group-hover:text-cyan-300',
      buttonBg: 'bg-cyan-500/20',
      buttonBorder: 'border-cyan-500/50',
      buttonText: 'text-cyan-300',
      buttonHover: 'hover:bg-cyan-500/30'
    },
    emerald: {
      hover: 'hover:border-emerald-500/50',
      shadow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]',
      gradient: 'from-emerald-500/20',
      text: 'text-emerald-400',
      titleHover: 'group-hover:text-emerald-300',
      buttonBg: 'bg-emerald-500/10',
      buttonBorder: 'border-emerald-500/30',
      buttonText: 'text-emerald-300',
      buttonHover: 'hover:bg-emerald-500/30'
    },
    purple: {
      hover: 'hover:border-purple-500/50',
      shadow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]',
      gradient: 'from-purple-500/20',
      text: 'text-purple-400',
      titleHover: 'group-hover:text-purple-300',
      buttonBg: 'bg-purple-500/20',
      buttonBorder: 'border-purple-500/50',
      buttonText: 'text-purple-300',
      buttonHover: 'hover:bg-purple-500/30'
    },
    red: {
      hover: 'hover:border-red-500/50',
      shadow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]',
      gradient: 'from-red-500/20',
      text: 'text-red-400',
      titleHover: 'group-hover:text-red-300',
      buttonBg: 'bg-red-500/20',
      buttonBorder: 'border-red-500/50',
      buttonText: 'text-red-300',
      buttonHover: 'hover:bg-red-500/30'
    },
    teal: {
      hover: 'hover:border-teal-500/50',
      shadow: 'hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]',
      gradient: 'from-teal-500/20',
      text: 'text-teal-400',
      titleHover: 'group-hover:text-teal-300',
      buttonBg: 'bg-teal-500/20',
      buttonBorder: 'border-teal-500/50',
      buttonText: 'text-teal-300',
      buttonHover: 'hover:bg-teal-500/30'
    }
  };

  const styles = colorMap[color];

  // Prepare color styles for call-to-action based on card color
  const ctaTextColor = {
    cyan: 'text-cyan-600',
    emerald: 'text-emerald-600',
    purple: 'text-purple-600',
    red: 'text-rose-600',
    teal: 'text-teal-600'
  }[color];

  return (
    <div className={`group relative overflow-hidden rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 ${styles.hover} transition-all duration-500 ${styles.shadow} transform hover:-translate-y-2 h-full flex flex-col`}>
      {/* Gradient overlay for depth */}
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Image Section - Improved aspect ratio and styling */}
      {images && images.length > 0 ? (
        <div className="w-full aspect-[4/3] relative overflow-hidden rounded-t-3xl">
          <ImageCarousel 
            images={images} 
            colorClass={color === 'cyan' ? 'cyan-400' : 
                      color === 'emerald' ? 'emerald-400' : 
                      color === 'purple' ? 'purple-400' : 
                      color === 'red' ? 'red-400' : 'teal-400'} 
          />
        </div>
      ) : imageUrl ? (
        <div className="w-full aspect-[4/3] relative overflow-hidden rounded-t-3xl">
          <Image 
            src={imageUrl} 
            alt={imageAlt || title} 
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority
          />
        </div>
      ) : (
        // Gradient placeholder when no images provided
        <div className={`w-full aspect-[4/3] bg-gradient-to-br ${styles.gradient} to-gray-800 relative overflow-hidden rounded-t-3xl`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`${styles.text} text-6xl opacity-30`}>{icon}</span>
          </div>
        </div>
      )}
      
      {/* Content Section - Enhanced styling */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
        {/* Title and icon with enhanced styling */}
        <div className="flex items-center gap-3 mb-4">
          {icon && (
            <span className={`${styles.text} text-2xl`}>{icon}</span>
          )}
          <h3 className={`text-2xl font-bold text-white ${styles.titleHover} transition-colors duration-300`}>{title}</h3>
        </div>
        
        {/* Description with better typography */}
        <p className="text-base text-gray-300 leading-relaxed mb-6 flex-grow">{description}</p>
      
        {/* Action Area - Enhanced CTA */}
        {disabled ? (
          <>
            <div className="mt-auto flex items-center text-gray-400 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>{disabledText || 'Coming Soon'}</span>
            </div>
            {disabledNote && <div className="text-gray-500 text-xs mt-2">{disabledNote}</div>}
          </>
        ) : showLinks ? (
          <div className="mt-auto">
            <Link href={linkUrl || '#'} className="block">
              <div className={`inline-flex items-center px-6 py-3 rounded-xl ${styles.buttonBg} ${styles.buttonBorder} border ${styles.buttonText} font-medium ${styles.buttonHover} transition-all duration-300 group/btn`}>
                <span>{linkText}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          </div>
        ) : (
          <div className="text-gray-400 text-sm mt-auto flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {title} coming soon
          </div>
        )}
      </div>
    </div>
  );
};

export default function HomePage() {
  // Flag to control link visibility
  const showLinks = true; // Set to false to hide links temporarily
  const {
    homeTitle, homeSubtitle,
    developersTitle, developersDescription, developersLinkText,
    /* thinkersTitle, thinkersDescription, */
    appEnthusiastsTitle, appEnthusiastsDescription, appEnthusiastsLinkText,
    employersTitle, employersDescription, employersLinkText,
    closingStatement
  } = translations;

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
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header with Glowing Effect */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 animate-pulse">
              {homeTitle.value}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-200 leading-relaxed mb-4 max-w-4xl mx-auto">
            {homeSubtitle.value}
          </p>
          <p className="text-base sm:text-lg text-blue-200/70 max-w-2xl mx-auto leading-relaxed font-light">
            Focused on practical, resilient software engineering—creating mobile-first and offline-capable systems that deliver real value.
          </p>
        </div>
        
        {/* Interactive Card Grid - Improved Layout */}
        <div className="max-w-6xl mx-auto mb-16 sm:mb-20">
          {/* Primary Cards Row - Featured Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <FeatureCard
              title={developersTitle.value}
              description={developersDescription.value}
              icon="⚙️"
              color="cyan"
              linkUrl="/catalog"
              linkText={developersLinkText.value}
              showLinks={showLinks}
              images={DevelopersImages}
            />
            
            <FeatureCard
              title={appEnthusiastsTitle.value}
              description={appEnthusiastsDescription.value}
              icon="📱"
              color="purple"
              linkUrl="/apps"
              linkText={appEnthusiastsLinkText.value}
              showLinks={showLinks}
              images={AppEnthusiastsImages}
            />
          </div>
          
          {/* Secondary Cards Row - Supporting Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard
              title={employersTitle.value}
              description={employersDescription.value}
              icon="🚀"
              color="red"
              linkUrl="/elijah/whoiselijah"
              linkText={employersLinkText.value}
              showLinks={showLinks}
              images={EmployersImages}
            />
            
            <FeatureCard
              title="Interesting Links"
              description="Explore a curated collection of resources, notes, and conversations worth keeping."
              icon="🔗"
              color="teal"
              linkUrl="/links"
              linkText="Browse Collection"
              showLinks={showLinks}
              images={LinksImages}
            />
          </div>
        </div>
        
        {/* Closing Statement */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl sm:text-2xl text-blue-200 leading-relaxed">
            {closingStatement.value}
          </p>
        </div>
      
        {/* Footer */}
        <div className="text-center text-blue-300/60 text-sm sm:text-base">
          <p>© {new Date().getFullYear()} Ebowwa Labs • Pushing the boundaries of what's possible</p>
        </div>
      </div>
    </div>
  );
}

/** lets name this ebowwa labs - 
 * 
 * Context: this needs to promote me, my brand, my projects. 
 * Leveraging Nextjs we can go SEO crazy, we have a catologue of demos ive developed to see what could be done - Maybe market to devs
 * i have a resume, with a life like paper shader
 * and a landing page talking about the informational substrate
 * 
 * in addition i have ios mobile apps i need to promote
 * 
 * 
 * 
 * 
 * */ 
