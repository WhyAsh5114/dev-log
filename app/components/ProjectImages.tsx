import { cn } from "@/lib/utils";
import Image from "next/image";

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

  if (rowMatch) {
    rows = parseInt(rowMatch[1], 10);
  }
  if (colMatch) {
    cols = parseInt(colMatch[1], 10);
  }

  return { rows, cols };
}

export default function ProjectImages() {
  const projectName = "MyFit";

  const images: { filename: string; className?: string }[] = [
    { filename: "ViewMesocycle.webp", className: "row-span-2" },
    { filename: "AddExercise.webp", className: "row-span-3" },
    { filename: "ExerciseHistory.webp", className: "row-span-3" },
    { filename: "MuscleGroupVolumeDistributionChart.webp" },
    { filename: "MicrocycleVolumeDistributionChart.webp" },
    { filename: "SetIncreaseAmount.webp" },
    { filename: "WorkoutExercise.webp" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 justify-center min-w-96 p-2">
      {images.map(({ filename, className }, idx) => (
        <>
          <Image
            key={`${idx}-dark`}
            src={`/projects/${projectName}/dark/${filename}`}
            alt={generateAltText(filename)}
            width={parseRowCol(className).cols * 240}
            height={parseRowCol(className).rows * 240}
            className={cn("rounded-md border hidden dark:block", className)}
          />
          <Image
            key={`${idx}-light`}
            src={`/projects/${projectName}/light/${filename}`}
            alt={generateAltText(filename)}
            width={parseRowCol(className).cols * 240}
            height={parseRowCol(className).rows * 240}
            className={cn("rounded-md border dark:hidden", className)}
          />
        </>
      ))}
    </div>
  );
}
