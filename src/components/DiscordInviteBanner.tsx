'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Discord Icon Component
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
  </svg>
)

export default function DiscordInviteBanner() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)
  
  // Hide on landing pages
  if (pathname.startsWith('/landing')) return null
  
  // Don't render if dismissed
  if (!isVisible) return null

  const handleDismiss = () => {
    setIsVisible(false)
  }

  const handleMinimize = () => {
    setIsMinimized(!isMinimized)
  }
  
  return (
    <div className="fixed bottom-4 right-4 z-40 animate-in slide-in-from-bottom-2 duration-500 pointer-events-none">
      <div className="pointer-events-auto">
        {isMinimized ? (
          // Minimized state - just the Discord icon
          <button
            onClick={handleMinimize}
            className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 p-0.5 shadow-lg transition-all duration-300 hover:shadow-indigo-500/25 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label="Expand Discord invite"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700">
              <DiscordIcon className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
            </div>
          </button>
        ) : (
          // Full banner
          <div className="group relative max-w-sm overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 p-0.5 shadow-2xl transition-all duration-300 hover:shadow-indigo-500/25">
            <div className="relative flex items-center gap-3 rounded-[11px] bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 px-4 py-3 text-white sm:px-6">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-indigo-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Discord Icon */}
              <div className="relative flex-shrink-0">
                <DiscordIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6" />
              </div>
              
              {/* Text content - responsive */}
              <div className="relative flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center">
                <span className="truncate text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-300 sm:text-base">
                  <span className="hidden sm:inline">Join our community on Discord!</span>
                  <span className="sm:hidden">Join Discord!</span>
                </span>
                <Link 
                  href="https://discord.gg/pAsQkT8u" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex flex-shrink-0 items-center gap-1 rounded-md bg-white/10 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent sm:px-3 sm:py-1.5 sm:text-sm"
                >
                  Join Now
                  <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              
              {/* Control buttons */}
              <div className="relative flex flex-shrink-0 items-center gap-1">
                {/* Minimize button */}
                <button
                  onClick={handleMinimize}
                  className="rounded-md p-1 text-white/60 transition-colors duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Minimize Discord invite"
                >
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                
                {/* Close button */}
                <button
                  onClick={handleDismiss}
                  className="rounded-md p-1 text-white/60 transition-colors duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Dismiss Discord invite"
                >
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
