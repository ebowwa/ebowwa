// app/models/page.tsx
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
            title={model.title}
            imageUrl="/placeholder.svg"
            modelData={{
              url: model.url,
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
            }}
          />
        ))}
      </div>
    </div>
  );
}
