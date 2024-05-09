// src/components/three/slider.tsx
"use client";
import React, { useState } from 'react';
import { Slider } from '@/components/landing/ui/slider';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/landing/ui/card";
import { Label } from "@/components/landing/ui/label";

interface CameraAndLightControlsProps {
  initialCameraPosition?: { x: number; y: number; z: number };
  initialCameraFov?: number;
  initialLightPosition?: { x: number; y: number; z: number };
  initialLightAngle?: number;
  initialLightPenumbra?: number;
}

const CameraAndLightControls: React.FC<CameraAndLightControlsProps> = ({
  initialCameraPosition = { x: 10, y: 5, z: 10 },
  initialCameraFov = 45,
  initialLightPosition = { x: 10, y: 10, z: 10 },
  initialLightAngle = 0.15,
  initialLightPenumbra = 1,
}) => {
  const [cameraPosition, setCameraPosition] = useState<number[]>([
    initialCameraPosition.x,
    initialCameraPosition.y,
    initialCameraPosition.z,
  ]);
  const [cameraFov, setCameraFov] = useState<number>(initialCameraFov);
  const [lightPosition, setLightPosition] = useState<number[]>([
    initialLightPosition.x,
    initialLightPosition.y,
    initialLightPosition.z,
  ]);
  const [lightAngle, setLightAngle] = useState<number>(initialLightAngle);
  const [lightPenumbra, setLightPenumbra] = useState<number>(initialLightPenumbra);

  const handleCameraPositionChange = (value: number[]) => {
    setCameraPosition(value);
  };

  const handleCameraFovChange = (value: number[]) => {
    setCameraFov(value[0]);
  };

  const handleLightPositionChange = (value: number[]) => {
    setLightPosition(value);
  };

  const handleLightAngleChange = (value: number[]) => {
    setLightAngle(value[0]);
  };

  const handleLightPenumbraChange = (value: number[]) => {
    setLightPenumbra(value[0]);
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Camera and Light Controls</CardTitle>
        <CardDescription>Adjust the camera and light settings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="camera-position">Camera Position</Label>
            <Slider
              id="camera-position"
              min={-20}
              max={20}
              value={cameraPosition}
              onValueChange={handleCameraPositionChange}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="camera-fov">Camera FOV</Label>
            <Slider
              id="camera-fov"
              min={10}
              max={120}
              value={[cameraFov]}
              onValueChange={handleCameraFovChange}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="light-position">Light Position</Label>
            <Slider
              id="light-position"
              min={-20}
              max={20}
              value={lightPosition}
              onValueChange={handleLightPositionChange}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="light-angle">Light Angle</Label>
            <Slider
              id="light-angle"
              min={0}
              max={1}
              step={0.01}
              value={[lightAngle]}
              onValueChange={handleLightAngleChange}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="light-penumbra">Light Penumbra</Label>
            <Slider
              id="light-penumbra"
              min={0}
              max={1}
              step={0.01}
              value={[lightPenumbra]}
              onValueChange={handleLightPenumbraChange}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* Optional footer content */}
      </CardFooter>
    </Card>
  );
};

export default CameraAndLightControls;
