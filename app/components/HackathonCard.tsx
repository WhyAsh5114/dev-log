import { Card } from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { HackathonBasicMetadata } from "../projects/utils";
import { ConfettiDemo } from "./ConfettiComponent";

export function HackathonCard({
  metadata,
}: {
  metadata: HackathonBasicMetadata;
}) {
  return (
    <Card className="p-4 mt-2 space-y-2 w-full flex">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-px grow">
        <div className="flex flex-col col-span-2 truncate">
          <Link href={`/hackathons/${metadata.name}`} className="underline">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              {metadata.displayName} <SquareArrowOutUpRight size={16} />
            </h3>
          </Link>
          <p className="text-sm truncate text-muted-foreground">
            🎓 {metadata.collegeName}
          </p>
          <p className="text-sm text-muted-foreground">
            📌 {metadata.location}
          </p>
          <p className="text-sm text-muted-foreground">
            🚀 {metadata.duration}hr Hackathon Project
          </p>
        </div>
        {metadata.placed && (
          <div className="sm:place-self-center w-full h-full min-h-12 relative overflow-visible">
            <div className="absolute inset-0 -top-[230px] md:-top-[210px]">
              <ConfettiDemo text={metadata.placed} />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
