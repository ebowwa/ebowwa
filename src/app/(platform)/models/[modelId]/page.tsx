// app/models/[modelId]/page.tsx
import { getModelData, ModelData } from '@/components/three/utils/models';
import { Model3D } from '@/components/three/Model3D';

interface PageProps {
  params: {
    modelId: string;
  };
}

export default async function ModelPage({ params }: PageProps) {
  const modelData = await getModelData(params.modelId);

  return (
    <div>
      <h1>{modelData.title}</h1>
      <Model3D modelData={modelData} />
    </div>
  );
}