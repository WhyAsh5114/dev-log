"use client";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function GitHubStars({ repoLink }: { repoLink: string }) {
  const [stars, setStars] = useState<number | undefined>();

  const parts = repoLink.split("/");
  const repoPath = `${parts[3]}/${parts[4]}`;

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repoPath}`).then((response) =>
      response.json().then((body) => setStars(body.stargazers_count))
    );
  });

  if (stars === undefined) {
    return <Skeleton className="w-14 h-5 border" />;
  }

  return (
    <Badge className="gap-1 w-14 justify-center">
      {stars} <Star className="h-4 w-4" />
    </Badge>
  );
}
