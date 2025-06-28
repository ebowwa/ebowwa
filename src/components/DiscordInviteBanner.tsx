'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function DiscordInviteBanner() {
  const pathname = usePathname()
  if (pathname.startsWith('/landing')) return null
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
      <span>Join our community on Discord!</span>
      <Link href="https://discord.gg/pAsQkT8u" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
        Click here
      </Link>
    </div>
  )
}
