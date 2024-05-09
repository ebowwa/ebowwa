// @/utils/models.ts
export interface ModelData {
    id: string;
    title: string;
    url: string;
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
  }
  
  export async function getAvailableModels(): Promise<ModelData[]> {
    // Fetch the list of available models from your data source
    return [
      {
        id: 'coin',
        title: 'coin',
        url: 'coin.glb',
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      },
      {
        id: 'model2',
        title: 'Model 2',
        url: 'https://cdn.jsdelivr.net/gh/ebowwar/threejs-assets@main/space_boi.glb',
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      },
      // Add more models as needed
    ];
  }
  
  export async function getModelData(modelId: string): Promise<ModelData> {
    // Fetch the data for the specific model from your data source
    const models = await getAvailableModels();
    const modelData = models.find((model) => model.id === modelId);
    if (!modelData) {
      throw new Error(`Model with ID '${modelId}' not found.`);
    }
    return modelData;
  }