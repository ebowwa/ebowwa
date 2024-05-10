// src/app/(platform)/models/page.tsx
import ThreeDModelCard from "@/components/three/ThreeDModelCardUI";
import { getAvailableModels, ModelData } from '@/components/three/utils/models';

export default async function ModelsPage() {
  const models = await getAvailableModels();

  return (
    <div>
      <h1>Available Models</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {models.map((model) => (
          <ThreeDModelCard
            key={model.id}
            id={model.id}
            title={model.title}
            url={model.url}
            position={model.position}
            rotation={model.rotation}
            scale={model.scale}
            imageUrl="/placeholder.svg"
          />
        ))}
      </div>
    </div>
  );
}
