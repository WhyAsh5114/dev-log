"use client";

import { ClickableImage } from "@/app/components/ClickableImage";
import justifiedLayout from "justified-layout";
import { useEffect, useState, useRef } from "react";
import { ImageData } from "./HackathonImages";

type PropsType = {
  hackathonName: string;
  images: ImageData[];
  className?: string;
};

function generateAltText(filename: string) {
  const nameWithoutExtension = filename
    .replace(/^\//, "")
    .replace(/\.[^/.]+$/, "");
  const readableText = nameWithoutExtension.replace(/([a-z])([A-Z])/g, "$1 $2");
  return readableText;
}

export function HackathonImagesClient({ hackathonName, images }: PropsType) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(704);

  // Update container width on resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (images.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8 border rounded-lg">
        Whoops. forgot to take any pics
      </div>
    );
  }

  // Calculate justified layout
  const geometry = justifiedLayout(
    images.map((img) => ({ width: img.width, height: img.height })),
    {
      containerWidth: containerWidth,
      targetRowHeight: Math.max(150, containerWidth / 6), // Responsive row height
      boxSpacing: 4, // Spacing between images
      containerPadding: 0,
    }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{
        height: geometry.containerHeight,
      }}
    >
      {images.map(({ filename }, idx) => {
        const box = geometry.boxes[idx];
        if (!box) return null;

        return (
          <div
            key={`${idx}`}
            className="absolute"
            style={{
              left: box.left,
              top: box.top,
              width: box.width,
              height: box.height,
            }}
          >
            <ClickableImage
              src={`/hackathonImages/${hackathonName}/${filename}`}
              alt={generateAltText(filename)}
              title={hackathonName}
              width={box.width}
              height={box.height}
            />
          </div>
        );
      })}
    </div>
  );
}
