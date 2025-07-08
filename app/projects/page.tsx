import { TypographyH1 } from "@/components/ui/typographyH1";
import { TypographyH2 } from "@/components/ui/typographyH2";
import ProjectCard from "./components/ProjectCard";
import { getProjects } from "./utils";
import { getHackathonByName } from "../hackathons/utils";

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
            <ProjectCard key={metadata.name} metadata={metadata} />
          ))}
      </div>

      <div className="my-6"></div>
      <TypographyH2>Hackathons</TypographyH2>
      <div className="grid md:grid-cols-2 mt-4 gap-2">
        {getProjects()
          .filter(({ metadata }) => metadata.hackathonName)
          .map(({ metadata }) => {
            const hackathon = getHackathonByName(metadata.hackathonName!);
            if (!hackathon) {
              throw new Error(
                `Hackathon not found: ${metadata.hackathonName}, for project: ${metadata.name}`
              );
            }
            return {
              metadata: {
                ...metadata,
                hackathon: { placed: hackathon.metadata.placed },
              },
            };
          })
          .sort((a, b) => {
            if (b.metadata.hackathon?.placed === null) return -1;
            if (a.metadata.hackathon?.placed === null) return 1;
            if (a.metadata.hackathon!.placed < b.metadata.hackathon!.placed)
              return -1;
            return 0;
          })
          .map(({ metadata }) => (
            <ProjectCard key={metadata.name} metadata={metadata} />
          ))}
      </div>

      <div className="my-6"></div>
      <TypographyH2>Others</TypographyH2>
      <div className="grid md:grid-cols-2 mt-4 gap-2">
        {getProjects()
          .filter(
            ({ metadata }) => !metadata.featured && !metadata.hackathonName
          )
          .map(({ metadata }) => (
            <ProjectCard key={metadata.name} metadata={metadata} />
          ))}
      </div>
    </>
  );
}
