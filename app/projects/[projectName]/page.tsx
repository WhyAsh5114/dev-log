import { notFound } from "next/navigation";
import { allProjects } from "../data";
import ProjectComponent from "../components/ProjectComponent";
import { TypographyH2 } from "@/components/ui/typographyH2";

type PropsType = {
  params: Promise<{ projectName: string }>;
};

export default async function Page(props: PropsType) {
  const { projectName } = await props.params;
  const project = allProjects.find((p) => p.name === projectName);
  if (!project) notFound();

  return (
    <>
      <TypographyH2>View project</TypographyH2>
      <ProjectComponent project={project} />
    </>
  );
}
