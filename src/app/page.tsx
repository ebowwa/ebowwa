'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import translations from './en.json';
import { DevelopersImages, AppEnthusiastsImages, ThinkersImages, EmployersImages } from '@/utils/AssetCatalog';

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
    <div className="group bg-white/10 dark:bg-gray-800/90 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out overflow-hidden h-full flex flex-col border border-gray-700/50">
      {/* Image Section - True Airbnb style with taller images */}
      {images && images.length > 0 ? (
        <div className="w-full aspect-[3/2] relative overflow-hidden">
          <ImageCarousel 
            images={images} 
            colorClass={color === 'cyan' ? 'cyan-400' : 
                      color === 'emerald' ? 'emerald-400' : 
                      color === 'purple' ? 'purple-400' : 
                      color === 'red' ? 'red-400' : 'teal-400'} 
          />
        </div>
      ) : imageUrl ? (
        <div className="w-full aspect-[3/2] relative overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={imageAlt || title} 
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain"
            priority
          />
        </div>
      ) : (
        // Skeleton placeholder when no images provided (Airbnb-style)
        <div className="w-full aspect-[3/2] bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
      )}
      
      {/* Content Section - True Airbnb style */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        {/* Title and icon with better contrast for dark theme */}
        <div className="flex items-start gap-2 mb-2">
          <div className="flex items-center">
            {icon && (
              <span className={`${styles.text} text-xl mr-2`}>{icon}</span>
            )}
            <h3 className="text-xl font-bold text-white inline-block">{title}</h3>
          </div>
        </div>
        
        {/* Description with improved contrast */}
        <p className="text-sm text-gray-200 mt-2 mb-5 flex-grow">{description}</p>
      
        {/* Action Area - Airbnb style CTA */}
        {disabled ? (
          <>
            <div className="mt-auto text-gray-500 dark:text-gray-400 text-sm">
              <span>{disabledText || 'Coming Soon'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            {disabledNote && <div className="text-gray-400 text-xs mt-1">{disabledNote}</div>}
          </>
        ) : showLinks ? (
          <div className="mt-auto pt-3 border-t border-gray-700/50">
            <Link href={linkUrl || '#'} className="block">
              <div className={`flex items-center ${styles.buttonText} text-base font-medium hover:underline`}>
                <span>{linkText}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          </div>
        ) : (
          <div className="text-gray-500 dark:text-gray-400 text-sm mt-auto">{title} coming soon</div>
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
    thinkersTitle, thinkersDescription,
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
      
      <div className="relative z-10 container mx-auto px-3 sm:px-6 py-8 sm:py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Header with Glowing Effect */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-3 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 animate-pulse">
              {homeTitle.value}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-200 leading-relaxed px-4 sm:px-0">
            {homeSubtitle.value}
          </p>
          <p className="text-sm sm:text-base text-blue-200/60 max-w-xl mx-auto mt-2 sm:mt-3 leading-loose font-light italic px-4 sm:px-0">
            Focused on practical, resilient software engineering—creating mobile-first and offline-capable systems that deliver real value.
          </p>

        </div>
        
        {/* Interactive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 w-full max-w-7xl mx-auto">
          {/* Using the new FeatureCard component */}
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
            title={thinkersTitle.value}
            description={thinkersDescription.value}
            icon="🧠"
            color="emerald"
            disabled={true}
            images={ThinkersImages}
          />
          
          {/*i want to be able to have this showing previews of multiple of my apps, currently it only shows sleep loops but i have other apps and images to include */}

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
          
          {/* Interesting Links Card - Commented out but updated to use the new component 
          <FeatureCard
            title="Interesting Links"
            description="Explore a curated collection of resources, notes, and conversations worth keeping."
            icon="🔗"
            color="teal"
            linkUrl="/links"
            linkText="Browse Collection"
            showLinks={showLinks}
            // imageUrl="/images/links.jpg"
            // imageAlt="Connected web of information"
          />
          */}
        </div>
        
        {/* Closing Statement */}
        <div className="mt-8 sm:mt-12 mb-6 sm:mb-8 max-w-3xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-blue-200 leading-relaxed px-3 sm:px-6">
            {closingStatement.value}
          </p>
        </div>
      
        {/* Footer */}
        <div className="mt-8 sm:mt-16 text-center text-blue-300/60 text-sm sm:text-base">
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
