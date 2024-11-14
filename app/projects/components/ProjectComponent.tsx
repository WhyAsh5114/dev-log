import GitHubStars from "@/app/components/GitHubStars";
import ProjectImages from "@/app/components/ProjectImages";
import TechStack from "@/app/components/TechStack";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TypographyH1 } from "@/components/ui/typographyH1";
import { TypographyH3 } from "@/components/ui/typographyH3";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import GitHub from "~icons/mdi/github";
import { Project } from "../data";

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
          <GitHubStars repoLink={project.repoLink} />
          <Link
            href={project.repoLink}
            aria-label={`${project.name} GitHub link`}
          >
            <GitHub className="h-8 w-8" />
          </Link>
          {project.link && (
            <Link
              href={project.link}
              aria-label={`${project.name} hosted link`}
            >
              <ExternalLink />
            </Link>
          )}
        </div>
      </Heading>
      <ScrollArea className="h-72 border rounded-md my-2 shadow-sm">
        <ProjectImages projectName={project.name} />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TechStack techStack={project.techStack} />
      <p className="leading-relaxed mt-2 px-1.5">{project.text}</p>
    </>
  );
}
