import React from 'react'
import LinkPreview from '@/components/LinkPreview'

export const metadata = {
  title: 'Link Preview Demo',
  description: 'Paste a URL to see its metadata',
}

export default function LinkPreviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white py-16 px-6">
      <div className="max-w-xl mx-auto space-y-8">
        <h1 className="text-center text-4xl font-extrabold">Link Preview</h1>
        <LinkPreview />
      </div>
    </div>
  )
}
