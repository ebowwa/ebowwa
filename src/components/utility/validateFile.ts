// src/utils/validateFile.ts
import { z } from 'zod';

const FileSchema = z.object({
  file: z.instanceof(File),
});

const validateFile = (file: File, acceptedTypes: string[]): { isValid: boolean; message: string } => {
  const result = FileSchema.safeParse({ file });
  if (!result.success) {
    return { isValid: false, message: "Invalid file." };
  }
  if (!acceptedTypes.includes(file.type)) {
    return { isValid: false, message: `Invalid file type. Accepted types: ${acceptedTypes.join(", ")}.` };
  }
  return { isValid: true, message: "" };
};

export default validateFile;
