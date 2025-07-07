import { notFound } from "next/navigation";
import { getHackathonByName, getHackathons } from "../utils";
import { HackathonHeader } from "../components/HackathonHeader";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeStarryNight from "rehype-starry-night";

type Props = {
  params: Promise<{ hackathonName: string }>;
};

export async function generateStaticParams() {
  const hackathons = getHackathons();
  return hackathons.map((hackathon) => ({
    hackathonName: hackathon.metadata.name,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hackathonName } = await params;
  const hackathon = getHackathonByName(decodeURIComponent(hackathonName));

  if (!hackathon) {
    return {
      title: "Hackathon Not Found",
    };
  }

  return {
    title: `${hackathon.metadata.displayName} | Hackathons`,
    description: hackathon.metadata.description,
  };
}

export default async function HackathonPage({ params }: Props) {
  const { hackathonName } = await params;
  const hackathon = getHackathonByName(decodeURIComponent(hackathonName));

  if (!hackathon) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <HackathonHeader metadata={hackathon.metadata} />
      
      <article className="prose dark:prose-invert max-w-none prose-img:m-0 my-8">
        <MDXRemote
          source={hackathon.content}
          options={{
            scope: hackathon.metadata,
            mdxOptions: { rehypePlugins: [rehypeStarryNight] },
          }}
        />
      </article>
    </div>
  );
}
