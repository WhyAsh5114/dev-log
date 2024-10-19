import GitHubStars from "@/app/components/GitHubStars";
import ProjectImages from "@/app/components/ProjectImages";
import TechStack from "@/app/components/TechStack";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TypographyH1 } from "@/components/ui/typographyH1";
import { TypographyH3 } from "@/components/ui/typographyH3";
import { TypographyP } from "@/components/ui/typographyP";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import GitHub from "~icons/mdi/github";
import { Project } from "../data";
import { cn } from "@/lib/utils";

type PropsType = {
  headingLevel: "h1" | "h3";
  project: Project;
};

export default function ProjectComponent({ project, headingLevel }: PropsType) {
  const Heading = headingLevel === "h1" ? TypographyH1 : TypographyH3;

  return (
    <>
      <Heading>
        <div
          className={cn("flex items-center gap-4", {
            "mb-4": headingLevel === "h1",
          })}
        >
          <span className="mr-auto">{project.name}</span>
          <GitHubStars repoName={project.name} />
          <Link href={`https://github.com/WhyAsh5114/${project.name}`}>
            <GitHub className="h-8 w-8" />
          </Link>
          {project.link && (
            <Link href={project.link}>
              <ExternalLink />
            </Link>
          )}
        </div>
      </Heading>
      <ScrollArea className="h-72 border rounded-md my-2 shadow-sm">
        <ProjectImages />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TechStack techStack={project.techStack} />
      <TypographyP>{project.text}</TypographyP>
    </>
  );
}
