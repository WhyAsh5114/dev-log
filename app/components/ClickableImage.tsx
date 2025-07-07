"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useImageViewer } from "@/components/ImageViewerContext";

interface ClickableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  className?: string;
}

export function ClickableImage({ src, alt, width, height, title, className }: ClickableImageProps) {
  const { openViewer } = useImageViewer();

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("rounded-md border cursor-pointer hover:opacity-80 transition-opacity", className)}
      onClick={() => openViewer(src, alt, title)}
    />
  );
}
