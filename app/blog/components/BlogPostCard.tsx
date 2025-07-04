import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { BlogPostMetadata } from "../utils";

export function BlogPostCard({
  blogPost,
}: {
  blogPost: { metadata: BlogPostMetadata; content: string };
}) {
  const { metadata } = blogPost;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{metadata.displayName}</CardTitle>
        <CardDescription>
          <span>{metadata.date.toLocaleDateString()}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 line-clamp-2 prose dark:prose-invert prose-sm">
          {metadata.description}
        </div>
        <div className="flex flex-wrap gap-1">
          {metadata.tags.map((tag) => (
            <Badge variant="secondary" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto" size="sm" asChild>
          <Link href={`/blog/${encodeURIComponent(metadata.name)}`}>
            View
            <ChevronRight />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
