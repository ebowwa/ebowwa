// src/components/ThreeDModelCardUI.tsx
"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/landing/ui/button";
import { Card } from "@/components/landing/ui/card";
import { Model3D } from "@/components/three/Model3D";
import { ModelData } from './utils/models'
const ThreeDModelCard: React.FC<ModelData> = ({
  modelData,
  title,
  url,
  id
}) => {
  const modelUrl = modelData.url.split('.')[0];

  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <Model3D modelData={modelData} />
        <div className="flex justify-between mt-4">
          <Link href={`/models/${id}`}>
            <Button className="w-full mr-2" size="sm">
              View 3D Model
            </Button>
          </Link>
            <a href={modelData.url} download>
              <Button className="w-full ml-2" size="sm">
                Download Model
              </Button>
            </a>
        </div>
      </div>
    </Card>
  );
};

export default ThreeDModelCard;
