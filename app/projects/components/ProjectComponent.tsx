import GitHubStars from "@/app/components/GitHubStars";
import ProjectImages from "@/app/components/ProjectImages";
import TechStack from "@/app/components/TechStack";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TypographyH3 } from "@/components/ui/typographyH3";
import { TypographyP } from "@/components/ui/typographyP";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import GitHub from "~icons/mdi/github";
import { Project } from "../data";

export default function ProjectComponent({ project }: { project: Project }) {
  return (
    <>
      <TypographyH3>
        <div className="flex items-center gap-4">
          <span className="mr-auto">{project.name}</span>
          <GitHubStars repoName={project.name} />
          <Link href={`https://github.com/WhyAsh5114/${project.name}`}>
            <GitHub />
          </Link>
          {project.link && (
            <Link href={project.link}>
              <ExternalLink />
            </Link>
          )}
        </div>
      </TypographyH3>
      <ScrollArea className="h-72 border rounded-md my-2 shadow-sm">
        <ProjectImages />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TechStack techStack={project.techStack} />
      <TypographyP>{project.text}</TypographyP>
    </>
  );
}
