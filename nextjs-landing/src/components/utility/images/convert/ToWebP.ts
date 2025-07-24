// src/components/utility/images/convert/ToWebP.ts

/**
 * Represents an image file with additional status information.
 */
export interface ImageFileWithStatus {
  file: File;
  webpUrl?: string;
  status: 'pending' | 'verifying' | 'converted' | 'error';
  errorMessage?: string;
  format: 'jpeg' | 'png' | 'jpg' | 'webp' | 'heic';
}

/**
 * Converts an image to WebP format and updates the state of the image file.
 * @param image - The HTML image element to be converted.
 * @param file - The original image file.
 * @param updateImageFileWithStatus - A callback function to update the state of the image file.
 * @param verifyConversionCallback - A callback function to verify the conversion.
 */
export const convertImageToWebP = (
  image: HTMLImageElement,
  file: File,
  updateImageFileWithStatus: (imageFileWithStatus: ImageFileWithStatus) => void,
  verifyConversionCallback: () => void
) => {
  // Create a canvas element and draw the image on it
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  const ctx = canvas.getContext('2d');
  ctx?.drawImage(image, 0, 0);

  // Convert the canvas to a WebP blob
  canvas.toBlob(
    (blob) => {
      // Check if the blob was successfully created
      if (!blob) return;

      // Create a URL for the WebP blob
      const webpUrl = URL.createObjectURL(blob);

      // Update the state of the image file
      updateImageFileWithStatus({
        file,
        webpUrl,
        status: 'converted',
        errorMessage: '',
        format: file.type.split('/')[1] as 'jpeg' | 'png' | 'jpg' | 'webp' | 'heic',
      });
      verifyConversionCallback();
    },
    'image/webp',
    0.8 // Quality factor (0-1)
  );
};