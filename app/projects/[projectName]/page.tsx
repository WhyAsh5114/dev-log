import { notFound } from "next/navigation";
import { getProjects } from "../utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import ProjectImages from "@/app/components/ProjectImages";
import TechStack from "@/app/components/TechStack";

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
    <article className="prose dark:prose-invert max-w-none prose-img:m-0">
      <MDXRemote
        source={project.content}
        components={{ ProjectImages, TechStack }}
        options={{ scope: project.metadata }}
      />
    </article>
  );
}

export async function generateStaticParams() {
  const projects = getProjects();

  return projects.map(({ metadata }) => ({
    projectName: metadata.name,
  }));
}
