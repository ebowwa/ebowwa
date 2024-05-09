import fs from 'fs';
import path from 'path';

const cacheDir = path.join(process.cwd(), '.cache');

// Create the cache directory if it doesn't exist
if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir);
}

export async function getCachedData(key: string) {
  const cacheFile = path.join(cacheDir, `${key}.json`);

  try {
    const data = await fs.promises.readFile(cacheFile, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
}

export async function setCachedData(key: string, data: any, expirationTime: number) {
  const cacheFile = path.join(cacheDir, `${key}.json`);

  try {
    await fs.promises.writeFile(cacheFile, JSON.stringify(data));
    setTimeout(() => {
      fs.promises.unlink(cacheFile);
    }, expirationTime);
  } catch (error) {
    console.error('Error caching data:', error);
  }
}