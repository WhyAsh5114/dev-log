import { Divider, GroupedTransition, Highlight, Text } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavBar from "../../components/navigation/NavBar";
import path from "path";

import fs from "fs";

interface props {
  blogMetadata: blogMetadata[];
}

export default function Blog({ blogMetadata }: props) {
  let [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <GroupedTransition
      mounted={loaded}
      transitions={{
        i: { transition: "fade", duration: 500, timingFunction: "ease-out" },
        t: {
          transition: "slide-right",
          duration: 500,
          timingFunction: "ease-out",
        },
        p: {
          transition: "scale",
          duration: 500,
          timingFunction: "ease-out",
        },
      }}
    >
      {(styles) => (
        <div className="flex flex-col h-full" data-cy="project-page-container">
          <NavBar />
          <div
            className="flex flex-col h-full"
            style={Object.assign(
              {
                background: 'url("/blog-background.svg") right',
                backgroundSize: "cover",
              },
              styles.i
            )}
          >
            <div className="w-11/12 lg:w-2/3 mt-10 ml-5 lg:ml-12 flex gap-5 flex-col">
              <Highlight
                highlight={["Blog"]}
                highlightStyles={(theme) => ({
                  backgroundImage: theme.fn.linearGradient(
                    90,
                    theme.colors.orange[8],
                    theme.colors.orange[3]
                  ),
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                })}
                className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-5"
                style={styles.t}
              >
                My Blog
              </Highlight>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {blogMetadata.map((blogData) => (
                  <Link
                    key={blogData.title}
                    href={`/blog/${blogData.file_name}`}
                  >
                    <div
                      className="px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 border-2 border-orange-400 rounded-3xl bg-zinc-900 hover:bg-zinc-800 hover:border-white hover:text-white transition-colors cursor-pointer"
                      style={styles.p}
                    >
                      <div className="col-span-2 grid gap-1 md:gap-2 lg:gap-3 w-full">
                        <h3 className="font-bold text-xl md:text-2xl">
                          {blogData.title}
                        </h3>
                        <Text>{blogData.description}</Text>
                      </div>
                      <Divider className="mt-3 mb-4" size={"xs"} color="gray" />
                      <div className="grid grid-flow-col-dense grid-rows-2 md:grid-rows-1 lg:grid-rows-2 xl:grid-rows-1 place-content-start gap-5">
                        {blogData.tags.map((tag) => (
                          <p key={tag} className="text-black font-bold py-0.5 bg-gray-200 px-3 rounded-full w-fit">
                            #{tag}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </GroupedTransition>
  );
}

export async function getStaticProps() {
  const dir = path.resolve("./data/blog");
  const blogs = fs.readdirSync(dir);

  const blogMetadata: projectMetadata[] = await Promise.all(
    blogs.map(async (blog) => {
      let data = (await import(`./../../data/blog/${blog}`)).metadata;
      data.file_name = blog;
      return data;
    })
  );

  return { props: { blogMetadata } };
}
