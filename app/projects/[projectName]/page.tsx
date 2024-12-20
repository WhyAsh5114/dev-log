import ProjectImages from "@/app/components/ProjectImages";
import TechStack from "@/app/components/TechStack";
import { TypographyH1 } from "@/components/ui/typographyH1";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { getProjects } from "../utils";

type PropsType = {
  params: Promise<{ projectName: string }>;
};

export default async function Page(props: PropsType) {
  const params = await props.params;
  const projectName = decodeURIComponent(params.projectName);

  const project = getProjects().find(
    ({ metadata }) => metadata.name === projectName
  );
  if (!project) notFound();

  return (
    <>
      <TypographyH1>{project.metadata.name}</TypographyH1>
      <div className="mt-4" />
      <ProjectImages projectName={project.metadata.name} />
      <TechStack techStack={project.metadata.techStack} />

      <article className="prose dark:prose-invert max-w-none prose-img:m-0 my-8">
        <MDXRemote
          source={project.content}
          options={{ scope: project.metadata }}
        />
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const projects = getProjects();

  return projects.map(({ metadata }) => ({
    projectName: metadata.name,
  }));
}
