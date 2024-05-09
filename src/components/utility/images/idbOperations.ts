// src/utils/idbOperations.ts
//Imagesidb
import { openDB } from 'idb';

const dbName = 'imagesDB';
const storeName = 'images';

export const fetchImagesFromIDB = async (): Promise<string[]> => {
  try {
    const db = await openDB(dbName, 1);
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    const images = await store.getAll();
    return images.map((record: { image: string }) => record.image);
  } catch (error) {
    console.error('Error fetching images from IndexedDB:', error);
    return [];
  }
};

/**
 * Clears all images from the IndexedDB store.
 *
 * @returns A Promise that resolves when the store is cleared or rejects with an error.
 */
export const clearImagesFromIDB = async (): Promise<void> => {
  try {
    const db = await openDB(dbName, 1);
    await db.clear(storeName);
    console.log('IndexedDB store cleared');
  } catch (error) {
    console.error('Error clearing images from IndexedDB:', error);
  }
};

export const storeImagesInIDB = async (images: string[]): Promise<void> => {
  try {
    const db = await openDB(dbName, 1, {
      upgrade(db) {
        db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
      },
    });
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    for (const image of images) {
      await store.add({ image });
    }
    await tx.done;
  } catch (error) {
    console.error('Error storing images in IndexedDB:', error);
  }
};