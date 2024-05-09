// @/utils/models.ts
import modelData from '@public/raw_data/models.json';

export interface ModelData {
  id: string;
  title: string;
  url: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
}

export async function getAvailableModels(): Promise<ModelData[]> {
  // Return the data from the JSON file
  return modelData as ModelData[];
}

export async function getModelData(modelId: string): Promise<ModelData> {
  const models = await getAvailableModels();
  const modelData = models.find((model) => model.id === modelId);
  if (!modelData) {
    throw new Error(`Model with ID '${modelId}' not found.`);
  }
  return modelData;
}
