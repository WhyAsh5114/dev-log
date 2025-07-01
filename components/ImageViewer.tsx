"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useImageViewer } from "./ImageViewerContext";

function formatProjectName(projectName: string): string {
  if (!projectName) return "";
  
  // Convert kebab-case and snake_case to readable format
  return projectName
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export const ImageViewer: React.FC = () => {
  const { state, closeViewer } = useImageViewer();

  return (
    <Dialog open={state.isOpen} onOpenChange={closeViewer}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>{state.projectName ? formatProjectName(state.projectName) : "Image Viewer"}</DialogTitle>
          <DialogDescription>{state.imageAlt}</DialogDescription>
        </DialogHeader>
        {state.imageSrc && (
          <div className="w-full h-full flex items-center justify-center bg-background/5 border">
            <Image
              src={state.imageSrc}
              alt={state.imageAlt}
              width={1920}
              height={1080}
              className="max-w-full max-h-[85vh] object-contain rounded-md"
              priority
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
