"use client"

import React, { useState } from 'react'

export default function LinkPreview() {
  const [url, setUrl] = useState('')
  const [preview, setPreview] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const fetchPreview = async () => {
    if (!url) return
    setLoading(true)
    setPreview(null)
    try {
      const res = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`)
      if (res.ok) {
        const data = await res.json()
        setPreview(data)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="Paste URL here"
          className="flex-1 px-3 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          onClick={fetchPreview}
          className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-500"
        >
          Preview
        </button>
      </div>
      {loading && <p className="text-blue-200">Loading...</p>}
      {preview && (
        <div className="bg-white/10 border border-white/20 rounded p-4 space-y-2">
          {(preview.image || preview.favicon) && (
            <img
              src={preview.image || preview.favicon}
              alt="preview"
              className="w-16 h-16 object-contain"
            />
          )}
          <h3 className="text-xl font-bold">{preview.title}</h3>
          <p className="text-blue-100">{preview.description}</p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-teal-400 hover:underline"
          >
            Visit
          </a>
        </div>
      )}
    </div>
  )
}
