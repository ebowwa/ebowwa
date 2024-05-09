// utils/resizeImage.ts

export const resizeImage = async (file: File, maxSize: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const scalingFactor = Math.sqrt(maxSize / file.size);
      const canvas = document.createElement("canvas");
      canvas.width = img.width * scalingFactor;
      canvas.height = img.height * scalingFactor;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
      const resizedDataURL = canvas.toDataURL(file.type);
      resolve(resizedDataURL);
      URL.revokeObjectURL(img.src);
    };
    img.onerror = (error) => reject(error);
  });
};