"use client";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function GitHubStars({ repoName }: { repoName: string }) {
  const [stars, setStars] = useState<number | undefined>();
  useEffect(() => {
    fetch(`https://api.github.com/repos/WhyAsh5114/${repoName}`).then(
      (response) =>
        response.json().then((body) => setStars(body.stargazers_count))
    );
  });

  if (stars === undefined) {
    return <Skeleton className="w-14 h-5 border" />;
  }

  return (
    <Badge className="gap-1">
      {stars} <Star className="h-4 w-4" />
    </Badge>
  );
}
