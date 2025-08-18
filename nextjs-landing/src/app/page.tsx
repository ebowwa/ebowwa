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
  // Clean, professional color mappings
  const colorMap = {
    cyan: {
      hover: 'hover:border-blue-200',
      shadow: 'hover:shadow-lg',
      gradient: 'from-blue-50',
      text: 'text-blue-600',
      titleHover: 'group-hover:text-blue-700',
      buttonBg: 'bg-blue-600',
      buttonBorder: 'border-blue-600',
      buttonText: 'text-white',
      buttonHover: 'hover:bg-blue-700'
    },
    emerald: {
      hover: 'hover:border-emerald-200',
      shadow: 'hover:shadow-lg',
      gradient: 'from-emerald-50',
      text: 'text-emerald-600',
      titleHover: 'group-hover:text-emerald-700',
      buttonBg: 'bg-emerald-600',
      buttonBorder: 'border-emerald-600',
      buttonText: 'text-white',
      buttonHover: 'hover:bg-emerald-700'
    },
    purple: {
      hover: 'hover:border-purple-200',
      shadow: 'hover:shadow-lg',
      gradient: 'from-purple-50',
      text: 'text-purple-600',
      titleHover: 'group-hover:text-purple-700',
      buttonBg: 'bg-purple-600',
      buttonBorder: 'border-purple-600',
      buttonText: 'text-white',
      buttonHover: 'hover:bg-purple-700'
    },
    red: {
      hover: 'hover:border-rose-200',
      shadow: 'hover:shadow-lg',
      gradient: 'from-rose-50',
      text: 'text-rose-600',
      titleHover: 'group-hover:text-rose-700',
      buttonBg: 'bg-rose-600',
      buttonBorder: 'border-rose-600',
      buttonText: 'text-white',
      buttonHover: 'hover:bg-rose-700'
    },
    teal: {
      hover: 'hover:border-teal-200',
      shadow: 'hover:shadow-lg',
      gradient: 'from-teal-50',
      text: 'text-teal-600',
      titleHover: 'group-hover:text-teal-700',
      buttonBg: 'bg-teal-600',
      buttonBorder: 'border-teal-600',
      buttonText: 'text-white',
      buttonHover: 'hover:bg-teal-700'
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
    <div className={`group relative overflow-hidden rounded-2xl bg-white border border-gray-200 ${styles.hover} transition-all duration-300 ${styles.shadow} transform hover:-translate-y-1 h-full flex flex-col`}>
      {/* Subtle gradient overlay for depth */}
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
      
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
          <h3 className={`text-2xl font-bold text-gray-900 ${styles.titleHover} transition-colors duration-300`}>{title}</h3>
        </div>
        
        {/* Description with better typography */}
        <p className="text-base text-gray-600 leading-relaxed mb-6 flex-grow">{description}</p>
      
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
              <div className={`inline-flex items-center px-6 py-3 rounded-lg ${styles.buttonBg} ${styles.buttonText} font-medium ${styles.buttonHover} transition-all duration-300 group/btn shadow-sm`}>
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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Clean, Professional Header */}
        <div className="text-center mb-20 sm:mb-24">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            <span className="text-slate-900">
              {homeTitle.value}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-6 max-w-4xl mx-auto font-medium">
            {homeSubtitle.value}
          </p>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
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
          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed">
            {closingStatement.value}
          </p>
        </div>
      
        {/* Footer */}
        <div className="text-center text-slate-500 text-sm sm:text-base">
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
