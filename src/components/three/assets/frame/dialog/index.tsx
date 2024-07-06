// src/components/three/assets/frame/dialog/index.tsx
"use client"
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/landing/ui/dialog";
import { Button } from "@/components/landing/ui/button";

interface DialogFrameComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const DialogFrameComponent: React.FC<DialogFrameComponentProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Picture Frame Details</DialogTitle>
          <DialogDescription>
            This is a 3D model of a picture frame. You can interact with it in the 3D scene.
          </DialogDescription>
        </DialogHeader>
        <p>Add more details or controls here as needed.</p>
        <Button onClick={onClose}>Close</Button>
      </DialogContent>
    </Dialog>
  );
};

export default DialogFrameComponent;