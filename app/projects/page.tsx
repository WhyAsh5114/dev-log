import { TypographyH1 } from "@/components/ui/typographyH1";
import ProjectCard from "./components/ProjectCard";
import { allProjects } from "./data";
import { TypographyH2 } from "@/components/ui/typographyH2";

export default function Projects() {
  return (
    <>
      <TypographyH1>Projects</TypographyH1>

      <div className="my-6"></div>
      <TypographyH2>Featured</TypographyH2>
      <div className="grid md:grid-cols-2 mt-4 gap-2">
        {allProjects
          .filter(({ featured }) => featured)
          .map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
      </div>

      <div className="my-6"></div>
      <TypographyH2>Others</TypographyH2>
      <div className="grid md:grid-cols-2 mt-4 gap-2">
        {allProjects
          .filter(({ featured }) => !featured)
          .map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
      </div>
    </>
  );
}
