import { ClickableImage } from "@/app/components/ClickableImage";
import { existsSync, readdirSync } from "fs";
import sizeOf from "image-size";

type PropsType = { hackathonName: string; className?: string };

function generateAltText(filename: string) {
  const nameWithoutExtension = filename
    .replace(/^\//, "")
    .replace(/\.[^/.]+$/, "");
  const readableText = nameWithoutExtension.replace(/([a-z])([A-Z])/g, "$1 $2");
  return readableText;
}

function AllImages({ hackathonName }: PropsType) {
  const imageFiles = existsSync(`public/hackathonImages/${hackathonName}`)
    ? readdirSync(`public/hackathonImages/${hackathonName}`)
    : [];
    
  const images = imageFiles.map((imageFile) => ({
    ...(sizeOf(`public/hackathonImages/${hackathonName}/${imageFile}`) as {
      width: number;
      height: number;
    }),
    filename: imageFile,
  }));

  if (images.length === 0) {
    return (
      <div className="col-span-full text-center text-muted-foreground py-8 border rounded-lg">
        Whoops. forgot to take any pics
      </div>
    );
  }

  return images.map(({ filename, width, height }, idx) => (
    <ClickableImage
      key={`${idx}`}
      src={`/hackathonImages/${hackathonName}/${filename}`}
      alt={generateAltText(filename)}
      title={hackathonName}
      width={width}
      height={height}
    />
  ));
}

export default function HackathonImages({ hackathonName }: PropsType) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 min-w-96 py-2">
      <AllImages hackathonName={hackathonName} />
    </div>
  );
}
