import { TypographyH1 } from "@/components/ui/typographyH1";
import { TypographyH2 } from "@/components/ui/typographyH2";
import ProjectCard from "./components/ProjectCard";
import { getProjects } from "./utils";

export default function Projects() {
  return (
    <>
      <TypographyH1>Projects</TypographyH1>

      <div className="my-6"></div>
      <TypographyH2>Featured</TypographyH2>
      <div className="grid md:grid-cols-2 mt-4 gap-2">
        {getProjects()
          .filter(({ metadata }) => metadata.featured)
          .map(({ metadata }) => (
            <ProjectCard key={metadata.name} project={metadata} />
          ))}
      </div>

      <div className="my-6"></div>
      <TypographyH2>Others</TypographyH2>
      <div className="grid md:grid-cols-2 mt-4 gap-2">
        {getProjects()
          .filter(({ metadata }) => !metadata.featured)
          .map(({ metadata }) => (
            <ProjectCard key={metadata.name} project={metadata} />
          ))}
      </div>
    </>
  );
}
