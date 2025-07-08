import { existsSync, readdirSync } from "fs";
import sizeOf from "image-size";
import { HackathonImagesClient } from "./HackathonImagesClient";

type PropsType = { hackathonName: string; className?: string };
export type ImageData = {
  filename: string;
  width: number;
  height: number;
};

function getHackathonImages(hackathonName: string): ImageData[] {
  const imageFiles = existsSync(`public/hackathonImages/${hackathonName}`)
    ? readdirSync(`public/hackathonImages/${hackathonName}`)
    : [];
    
  return imageFiles.map((imageFile) => ({
    ...(sizeOf(`public/hackathonImages/${hackathonName}/${imageFile}`) as {
      width: number;
      height: number;
    }),
    filename: imageFile,
  }));
}

export default function HackathonImages({ hackathonName }: PropsType) {
  const images = getHackathonImages(hackathonName);
  
  return (
    <div className="w-full max-w-4xl py-2">
      <HackathonImagesClient hackathonName={hackathonName} images={images} />
    </div>
  );
}
