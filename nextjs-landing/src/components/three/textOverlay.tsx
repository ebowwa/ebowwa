import React from 'react'
import tunnel from 'tunnel-rat'

const t = tunnel()

interface TextOverlayProps {
  toggleImageDisplay: () => void
  showImage: boolean
}

const TextOverlay: React.FC<TextOverlayProps> = ({ toggleImageDisplay, showImage }) => {
  return (
    <t.In>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '1rem',
          borderRadius: '0.5rem',
        }}
      >
        <h1>Picture Frame</h1>
        <p>Here we trained the most dog 💩</p>
        <button onClick={toggleImageDisplay}>
          {showImage ? 'Hide Image' : 'Show Image'}
        </button>
      </div>
    </t.In>
  )
}

export default TextOverlay