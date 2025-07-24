// src/components/three/assets/frame/dialog/index.tsx
"use client"
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/landing/ui/dialog";
import { Button } from "@/components/landing/ui/button";

interface DialogFrameComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}
// inside header can add more detail but need to extend to the frame/index & resume/index
const DialogFrameComponent: React.FC<DialogFrameComponentProps> = ({ isOpen, onClose, title, description }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <p></p>
        <Button onClick={onClose}>Close</Button>
      </DialogContent>
    </Dialog>
  );
};

export default DialogFrameComponent;