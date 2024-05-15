// src/app/(Ebowwa_Branding)/dev/img-convert/page.tsx
"use client"
// downloads and previews
import { useState } from 'react';
import { convertImageToWebP, ImageFileWithStatus } from '@/components/utility/images/convert/ToWebP';

export default function Page() {
  const [image, setImage] = useState<File | null>(null);
  const [convertedImages, setConvertedImages] = useState<ImageFileWithStatus[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setConvertedImages([
        {
          file,
          status: 'pending',
          format: file.type.split('/')[1] as 'jpeg' | 'png' | 'jpg' | 'webp' | 'heic',
          webpUrl: null,
          errorMessage: '',
        },
      ]);
    }
  };

  const handleConvertImage = () => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        const imageElement = document.createElement('img');
        imageElement.src = imageDataUrl;
        imageElement.onload = () => {
          convertImageToWebP(
            imageElement,
            image,
            (imageFileWithStatus) => {
              setConvertedImages((currentImages) => {
                const newImages = [...currentImages];
                newImages[0] = imageFileWithStatus;
                return newImages;
              });
            },
            () => {}
          );
        };
      };
      reader.readAsDataURL(image);
    }
  };

  return (
    <div>
      <h1>Image Converter</h1>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleConvertImage}>Convert to WebP</button>
      {convertedImages.map((imageFile, index) => (
        <div key={index}>
          {imageFile.status === 'pending' && <p>Converting {imageFile.format} to WebP...</p>}
          {imageFile.status === 'verifying' && <p>Verifying WebP conversion...</p>}
          {imageFile.status === 'converted' && (
            <img src={imageFile.webpUrl!} alt={`Converted Image ${index}`} />
          )}
          {imageFile.status === 'error' && (
            <p>Error converting {imageFile.format} to WebP: {imageFile.errorMessage}</p>
          )}
        </div>
      ))}
    </div>
  );
}