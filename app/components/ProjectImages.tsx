import { cn } from "@/lib/utils";
import { readdirSync } from "fs";
import sizeOf from "image-size";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ClickableImage } from "@/app/components/ClickableImage";
import createLayout from "justified-layout";

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

function createJustifiedLayout(
  images: ImageDimensions[],
  containerWidth: number = 718
) {
  const layout = createLayout(
    images.map(({ width, height }) => ({ width, height })),
    {
      containerWidth,
      containerPadding: 0,
      boxSpacing: 4,
      targetRowHeight: 300,
    }
  );

  return layout.boxes.map((box, index) => ({
    ...box,
    filename: images[index].filename,
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

  const images: ImageDimensions[] = imageFiles.map((imageFile) => ({
    ...(sizeOf(
      `public/projectImages/${projectName}${
        modeBasedScreenshotsAvailable ? `/dark/` : "/"
      }${imageFile}`
    ) as {
      width: number;
      height: number;
    }),
    filename: imageFile,
  }));

  const layoutBoxes = createJustifiedLayout(images);

  if (!modeBasedScreenshotsAvailable) {
    return (
      <div
        className="relative"
        style={{
          width: `${Math.max(
            ...layoutBoxes.map((box) => box.left + box.width)
          )}px`,
          height: `${Math.max(
            ...layoutBoxes.map((box) => box.top + box.height)
          )}px`,
        }}
      >
        {layoutBoxes.map((box, idx) => (
          <div
            key={`${idx}`}
            className="absolute"
            style={{
              left: `${box.left}px`,
              top: `${box.top}px`,
            }}
          >
            <ClickableImage
              src={`/projectImages/${projectName}/${box.filename}`}
              alt={generateAltText(box.filename)}
              width={box.width}
              height={box.height}
              title={projectName}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="relative"
      style={{
        width: `${Math.max(
          ...layoutBoxes.map((box) => box.left + box.width)
        )}px`,
        height: `${Math.max(
          ...layoutBoxes.map((box) => box.top + box.height)
        )}px`,
      }}
    >
      {layoutBoxes.map((box, idx) => (
        <div
          key={`${box.filename}-${idx}`}
          className="absolute"
          style={{
            left: `${box.left}px`,
            top: `${box.top}px`,
          }}
        >
          <ClickableImage
            src={`/projectImages/${projectName}/dark/${box.filename}`}
            alt={generateAltText(box.filename)}
            width={box.width}
            height={box.height}
            title={projectName}
            className="hidden dark:block"
          />
          <ClickableImage
            src={`/projectImages/${projectName}/light/${box.filename}`}
            alt={generateAltText(box.filename)}
            width={box.width}
            height={box.height}
            title={projectName}
            className="dark:hidden"
          />
        </div>
      ))}
    </div>
  );
}

export default function ProjectImages({ projectName, className }: PropsType) {
  return (
    <ScrollArea
      className={cn("h-72 border p-2 rounded-md my-2 shadow-xs", className)}
    >
      <AllImages projectName={projectName} />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
