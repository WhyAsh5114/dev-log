import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  ExternalLink,
  Gift,
  MapPin,
  Trophy,
  Users,
  Star,
} from "lucide-react";
import Link from "next/link";
import { HackathonMetadata } from "../utils";

export function HackathonHeader({ metadata }: { metadata: HackathonMetadata }) {
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
    <>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{metadata.displayName}</h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            {metadata.placed && (
              <Badge
                variant={getPlacementBadgeVariant(metadata.placed)}
                className="text-sm whitespace-nowrap"
              >
                <Trophy className="h-4 w-4 mr-2" />
                {metadata.placed}
              </Badge>
            )}

            <Badge variant="secondary" className="text-sm whitespace-nowrap">
              <Star className="h-4 w-4 mr-2" />
              {calculateOverallRating()}/5
            </Badge>

            <Button asChild variant="outline">
              <Link
                href={metadata.hackathonWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit page
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <p className="text-muted-foreground">{metadata.description}</p>

        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <div className="font-medium">{metadata.location}</div>
                  <div className="text-sm text-muted-foreground">
                    {metadata.collegeName}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <div className="font-medium">{formatDate(metadata.date)}</div>
                  <div className="text-sm text-muted-foreground">
                    Event Date
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <div className="font-medium">{metadata.duration} hours</div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </div>
              </div>

              {metadata.teamSize && (
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <div className="font-medium">
                      {metadata.teamSize} members
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Team Size
                    </div>
                  </div>
                </div>
              )}

              {metadata.projectName && (
                <div className="flex items-center gap-3 md:col-span-2">
                  <Gift className="h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <div className="font-medium">
                      <Link
                        href={`/projects/${metadata.projectName}`}
                        className="text-primary hover:underline"
                      >
                        {metadata.projectName} →
                      </Link>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Project Built
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
