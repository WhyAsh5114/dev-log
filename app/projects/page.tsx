import { TypographyH1 } from "@/components/ui/typographyH1";
import ProjectCard from "./components/ProjectCard";
import { allProjects } from "./data";

export default function Projects() {
  return (
    <>
      <TypographyH1>Projects</TypographyH1>
      <div className="grid sm:grid-cols-2 mt-6 gap-1">
        {allProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </>
  );
}
