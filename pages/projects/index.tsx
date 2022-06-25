import { GroupedTransition, Highlight, Title, Text, Tooltip, Divider } from "@mantine/core";
import fs from "fs";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { useEffect, useState } from "react";
import NavBar from "../../components/navigation/NavBar";

interface props {
  projectsMetadata: projectMetadata[];
}

export default function Projects({ projectsMetadata }: props) {
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
                background: 'url("/project-background.svg") right',
                backgroundSize: "cover",
              },
              styles.i
            )}
          >
            <div className="w-11/12 lg:w-2/3 mt-10 ml-5 lg:ml-12 flex gap-5 flex-col">
              <Highlight
                highlight={["Projects"]}
                highlightStyles={(theme) => ({
                  backgroundImage: theme.fn.linearGradient(
                    45,
                    theme.colors.indigo[7],
                    theme.colors.indigo[3]
                  ),
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                })}
                className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-5"
                style={styles.t}
              >
                My Projects
              </Highlight>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {projectsMetadata.map((projectData) => (
                  <Link key={projectData.title} href={`/projects/${projectData.file_name}`}>
                    <div
                      className="px-4 py-5 md:px-6 md:py-7 lg:px-8 lg:py-10 grid grid-cols-3 gap-3 border-2 border-indigo-400 rounded-3xl place-items-center bg-zinc-900 hover:bg-zinc-800 hover:border-white hover:text-white transition-colors cursor-pointer"
                      style={styles.p}
                    >
                      <div className="col-span-2 grid gap-1 md:gap-2 lg:gap-3 w-full">
                        <h3 className="font-bold text-xl md:text-2xl">{projectData.title}</h3>
                        <Text>{projectData.description}</Text>
                      </div>
                      <Tooltip withArrow label={projectData.tech_stack[0]}>
                        <Image
                          alt={projectData.tech_stack[0]}
                          src={`/techstack/${projectData.tech_stack[0].toLowerCase()}.webp`}
                          width={100}
                          height={100}
                          layout="fixed"
                        />
                      </Tooltip>
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
  const dir = path.resolve("./data/projects");
  const projects = fs.readdirSync(dir);

  const projectsMetadata: projectMetadata[] = await Promise.all(
    projects.map(async (project) => {
      let data =  (await import(`./../../data/projects/${project}`)).metadata;
      data.file_name = project;
      return data;
    })
  );

  return { props: { projectsMetadata } };
}
