import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectImages from "../components/ProjectImages";
import TechStack from "../components/TechStack";
import { getProjects } from "../projects/utils";
import { ChevronRight } from "lucide-react";

export function MiniProjectShowcase({ projectName }: { projectName: string }) {
  const project = getProjects().find(
    ({ metadata }) => metadata.name === projectName
  );
  if (!project) notFound();

  return (
    <div className="flex flex-col gap-2">
      <ProjectImages
        className="h-fit mb-0 max-h-48"
        projectName={projectName}
      />
      <TechStack techStack={project.metadata.techStack} />
      <Button size="sm" className="w-fit ml-auto" variant="secondary" asChild>
        <Link href={`/projects/${projectName}`}>
          See project details
          <ChevronRight />
        </Link>
      </Button>
    </div>
  );
}
