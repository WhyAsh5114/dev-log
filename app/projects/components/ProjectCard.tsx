import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import GitHub from "~icons/mdi/github";
import TechStack from "../../components/TechStack";
import { ProjectMetadata } from "../utils";

export default function ProjectCard({
  metadata,
}: {
  metadata: ProjectMetadata;
}) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{metadata.name}</CardTitle>
          <CardDescription>{metadata.description}</CardDescription>
        </CardHeader>
        <CardContent className="grid">
          <TechStack techStack={metadata.techStack} />
        </CardContent>
        <CardFooter className="justify-end gap-4">
          <Link
            href={metadata.repoLink}
            aria-label={`${metadata.name} GitHub link`}
          >
            <GitHub className="h-6 w-6" />
          </Link>
          {metadata.link && (
            <Link
              href={metadata.link}
              aria-label={`${metadata.name} hosted link`}
            >
              <ExternalLink />
            </Link>
          )}
          <Button size="sm" asChild>
            <Link href={`/projects/${metadata.name}`}>
              View more
              <ChevronRight />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
