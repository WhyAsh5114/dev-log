import { cn } from "@/lib/utils";
import { readdirSync } from "fs";
import Image from "next/image";
import sizeOf from "image-size";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type PropsType = { projectName: string; className?: string };
type ImageDimensions = {
  filename: string;
  width: number;
  height: number;
};

function generateAltText(filename: string) {
  const nameWithoutExtension = filename
    .replace(/^\//, "")
    .replace(/\.[^/.]+$/, "");
  const readableText = nameWithoutExtension.replace(/([a-z])([A-Z])/g, "$1 $2");
  return readableText;
}

function parseRowCol(spanString?: string) {
  let rows = 1;
  let cols = 1;
  if (!spanString) return { rows, cols };

  const rowMatch = spanString.match(/row-span-(\d+)/);
  const colMatch = spanString.match(/col-span-(\d+)/);

  if (rowMatch) rows = parseInt(rowMatch[1], 10);
  if (colMatch) cols = parseInt(colMatch[1], 10);

  return { rows, cols };
}

function calculateRowSpan(
  images: ImageDimensions[]
): { filename: string; className: string }[] {
  const aspectRatios = images.map(({ width, height }) => height / width);
  const minAspectRatio = Math.min(...aspectRatios);
  return aspectRatios.map((aspectRatio, ratioIdx) => ({
    className: `row-span-${Math.ceil(aspectRatio / minAspectRatio)}`,
    filename: images[ratioIdx].filename,
  }));
}

function AllImages({ projectName }: PropsType) {
  const modeBasedScreenshotsAvailable = readdirSync(
    `public/projectImages/${projectName}`
  ).includes("dark");
  const imageFiles = readdirSync(
    `public/projectImages/${projectName}${
      modeBasedScreenshotsAvailable ? `/dark` : ""
    }`
  );

  const images = calculateRowSpan(
    imageFiles.map((imageFile) => ({
      ...(sizeOf(
        `public/projectImages/${projectName}${
          modeBasedScreenshotsAvailable ? `/dark/` : "/"
        }${imageFile}`
      ) as {
        width: number;
        height: number;
      }),
      filename: imageFile,
    }))
  );

  if (!modeBasedScreenshotsAvailable) {
    return images.map(({ filename, className }, idx) => (
      <Image
        key={`${idx}`}
        src={`/projectImages/${projectName}/${filename}`}
        alt={generateAltText(filename)}
        width={parseRowCol(className).cols * 240}
        height={parseRowCol(className).rows * 240}
        className={cn("rounded-md border", className)}
      />
    ));
  }

  return images.map(({ filename, className }, idx) => (
    <>
      <Image
        key={`${filename}-${idx}-dark`}
        src={`/projectImages/${projectName}/dark/${filename}`}
        alt={generateAltText(filename)}
        width={parseRowCol(className).cols * 240}
        height={parseRowCol(className).rows * 240}
        className={cn("rounded-md border hidden dark:block", className)}
      />
      <Image
        key={`${filename}-${idx}-light`}
        src={`/projectImages/${projectName}/light/${filename}`}
        alt={generateAltText(filename)}
        width={parseRowCol(className).cols * 240}
        height={parseRowCol(className).rows * 240}
        className={cn("rounded-md border dark:hidden", className)}
      />
    </>
  ));
}

export default function ProjectImages({ projectName, className }: PropsType) {
  return (
    <ScrollArea
      className={cn("h-72 border rounded-md my-2 shadow-sm", className)}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 min-w-96 p-2">
        <AllImages projectName={projectName} />
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
