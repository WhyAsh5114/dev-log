import { notFound } from "next/navigation";
import { allProjects } from "../data";
import ProjectComponent from "../components/ProjectComponent";

type PropsType = {
  params: Promise<{ projectName: string }>;
};

export default async function Page(props: PropsType) {
  const { projectName } = await props.params;
  const project = allProjects.find((p) => p.name === projectName);
  if (!project) notFound();

  return <ProjectComponent project={project} headingLevel="h1" />;
}