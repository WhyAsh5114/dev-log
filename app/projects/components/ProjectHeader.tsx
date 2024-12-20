import GitHubStars from "@/app/components/GitHubStars";
import ProjectImages from "@/app/components/ProjectImages";
import TechStack from "@/app/components/TechStack";
import { TypographyH3 } from "@/components/ui/typographyH3";
import { TypographyP } from "@/components/ui/typographyP";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { ProjectMetadata } from "../utils";

export default function ProjectHeader({
  metadata,
}: {
  metadata: ProjectMetadata;
}) {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="flex flex-col mr-auto">
          <TypographyH3 className="mt-0">{metadata.name}</TypographyH3>
          <TypographyP className="!mt-0 text-sm text-muted-foreground">
            {metadata.description}
          </TypographyP>
        </div>
        <div className="flex gap-2 md:gap-4 flex-col items-center md:flex-row">
          <GitHubStars repoLink={metadata.repoLink} />
          {metadata.link && (
            <Link href={metadata.link} aria-label="Hosted link">
              <ExternalLinkIcon />
            </Link>
          )}
          <Link href={metadata.repoLink} aria-label="GitHub link">
            <GitHubLogoIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>

      <div className="mt-2" />
      <ProjectImages projectName={metadata.name} />
      <TechStack techStack={metadata.techStack} />
    </>
  );
}
