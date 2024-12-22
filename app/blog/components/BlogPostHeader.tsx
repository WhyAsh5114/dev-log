import { Badge } from "@/components/ui/badge";
import { TypographyH1 } from "@/components/ui/typographyH1";
import { BlogPostMetadata } from "../utils";

export default function BlogPostHeader({
  metadata,
}: {
  metadata: BlogPostMetadata;
}) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <TypographyH1>{metadata.displayName}</TypographyH1>
        <span className="text-sm text-muted-foreground">
          {metadata.date.toLocaleDateString()}
        </span>
        <div className="flex flex-wrap gap-1">
          {metadata.tags.map((tag) => (
            <Badge variant="secondary" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
}
