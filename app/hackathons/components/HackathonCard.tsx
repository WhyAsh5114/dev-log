import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronRight,
  ExternalLink,
  Trophy,
  Users,
  Clock,
  MapPin,
  Star,
} from "lucide-react";
import Link from "next/link";
import { HackathonMetadata } from "../utils";

export function HackathonCard({
  hackathon,
}: {
  hackathon: { metadata: HackathonMetadata; content: string };
}) {
  const { metadata } = hackathon;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getPlacementBadgeVariant = (placement: string | null) => {
    if (placement) return "default";
    return "secondary";
  };

  const calculateOverallRating = () => {
    const { food, swag, stay, mentorship } = metadata.ratings;
    const average = (food + swag + stay + mentorship) / 4;
    return Math.round(average * 10) / 10;
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{metadata.displayName}</CardTitle>
          {metadata.placed && (
            <Badge
              variant={getPlacementBadgeVariant(metadata.placed)}
              className="text-xs"
            >
              <Trophy className="h-3 w-3 mr-1" />
              {metadata.placed}
            </Badge>
          )}
        </div>
        <div className="space-y-1 text-muted-foreground">
          <div className="flex items-center gap-2 text-sm">
            <Star className="h-4 w-4" />
            <span>Rating: {calculateOverallRating()}/5</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{metadata.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4" />
            <span>{metadata.duration}hr Hackathon</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="text-xs font-medium truncate">
              🎓 {metadata.collegeName}
            </div>
            <div className="text-xs">📅 {formatDate(metadata.date)}</div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="justify-between gap-2">
        <Link
          href={metadata.hackathonWebsite}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${metadata.displayName} website`}
        >
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </Link>

        <Button size="sm" asChild>
          <Link href={`/hackathons/${encodeURIComponent(metadata.name)}`}>
            View Details
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
