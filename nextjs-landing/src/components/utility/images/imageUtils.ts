import { base64ToBlob } from '../base64ToBlob';
import { resizeImage } from './resizeImage';
export const MAX_IMAGE_SIZE = 1024 * 1024; // 1MB
export const MAX_IMAGES=4
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB limit for a single file

export const resizeAndConvertImage = async (file: File) => {
  if (file.size > MAX_FILE_SIZE) {
    alert(`File size exceeds the 5MB limit. Please select a smaller file.`);
    return null;
  }

  const resizedBase64 = await resizeImage(file, MAX_IMAGE_SIZE);
  const blob = base64ToBlob(resizedBase64, file.type);
  const resizedFile = new File([blob], file.name, { type: file.type });

  return resizedFile;
};

export const handleMediaUpload = (
  file: File | null,
  setUploadedImages: React.Dispatch<React.SetStateAction<File[]>>,
  uploadedImages: File[]
) => {
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Data = reader.result?.toString().split(',')?.[1] || '';
      // Handle media upload logic here
      console.log(`Base64 data for image:`, base64Data);

      // Update the uploadedImages state
      setUploadedImages((prevImages) => [...prevImages, file]);
    };
  }
};