// utils/resizeImage.ts

/**
 * Resizes an image file to a maximum size.
 * @param file - The image file to be resized.
 * @param maxSize - The maximum size (in bytes) of the resized image.
 * @returns A promise that resolves to the resized image data URL.
 */
export const resizeImage = async (file: File, maxSize: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    // Create a new Image object and set its source to the file URL
    const img = new Image();
    img.src = URL.createObjectURL(file);

    // Wait for the image to load
    img.onload = () => {
      // Calculate the scaling factor to resize the image
      const scalingFactor = Math.sqrt(maxSize / file.size);

      // Create a canvas element and set its dimensions based on the scaling factor
      const canvas = document.createElement("canvas");
      canvas.width = img.width * scalingFactor;
      canvas.height = img.height * scalingFactor;

      // Get the 2D rendering context of the canvas
      const ctx = canvas.getContext("2d");

      // Draw the resized image on the canvas
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Convert the canvas to a data URL
      const resizedDataURL = canvas.toDataURL(file.type);

      // Resolve the promise with the resized data URL
      resolve(resizedDataURL);

      // Revoke the object URL to free up memory
      URL.revokeObjectURL(img.src);
    };

    // Handle any errors that occur during the image resizing process
    img.onerror = (error) => reject(error);
  });
};