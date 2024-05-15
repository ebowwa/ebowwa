// src/utils/FormatJson.tsx
import prettier from 'prettier';

export const formatJson = async (jsonString: string): Promise<string> => {
  try {
    const parsedJson = JSON.parse(jsonString);
    const formattedJson = await prettier.format(JSON.stringify(parsedJson), {
      parser: 'json',
    });
    return formattedJson;
  } catch (error) {
    console.error('Invalid JSON string:', error);
    return 'Invalid JSON string';
  }
};
