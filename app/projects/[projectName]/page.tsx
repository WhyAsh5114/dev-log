import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import ProjectHeader from "../components/ProjectHeader";
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
      <ProjectHeader metadata={project.metadata} />
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
