import ProjectImages from "@/app/components/ProjectImages";
import TechStack from "@/app/components/TechStack";
import { TypographyH1 } from "@/components/ui/typographyH1";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ExternalLinkIcon } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { getProjects } from "../utils";
import Link from "next/link";

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
      <div className="flex items-center gap-4">
        <TypographyH1 className="mr-auto">{project.metadata.name}</TypographyH1>
        {project.metadata.link && (
          <Link href={project.metadata.link} aria-label="Hosted link">
            <ExternalLinkIcon />
          </Link>
        )}
        <Link href={project.metadata.repoLink} aria-label="GitHub link">
          <GitHubLogoIcon className="h-8 w-8" />
        </Link>
      </div>
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
