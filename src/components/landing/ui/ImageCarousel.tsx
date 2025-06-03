import React, { useState } from 'react';
import Image from 'next/image';

export type CarouselImage = { url: string; alt: string };

interface ImageCarouselProps {
  images: CarouselImage[];
  colorClass?: string; // For future color theming
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, colorClass }) => {
  const [current, setCurrent] = useState(0);
  if (!images || images.length === 0) return null;

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Image
        src={images[current].url}
        alt={images[current].alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-contain rounded-lg transition-all duration-300"
        priority
      />
      {images.length > 1 && (
        <>
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1 z-10"
            style={{ minWidth: 32, minHeight: 32 }}
          >
            &#8592;
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1 z-10"
            style={{ minWidth: 32, minHeight: 32 }}
          >
            &#8594;
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-2 h-2 rounded-full ${idx === current ? 'bg-white' : 'bg-gray-400/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
