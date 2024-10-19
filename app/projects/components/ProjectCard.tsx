import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import GitHub from "~icons/mdi/github";
import TechStack from "../../components/TechStack";
import { Project } from "../data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="grid">
          <TechStack techStack={project.techStack} />
        </CardContent>
        <CardFooter className="justify-end gap-4">
          <Link href={`https://github.com/WhyAsh5114/${project.name}`}>
            <GitHub className="h-6 w-6" />
          </Link>
          {project.link && (
            <Link href={project.link}>
              <ExternalLink />
            </Link>
          )}
          <Button size="sm" asChild>
            <Link href={`/projects/${project.name}`}>
              View more
              <ChevronRight />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
