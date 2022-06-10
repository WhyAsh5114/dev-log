import { Divider, GroupedTransition, Highlight } from "@mantine/core";
import Proj1 from "./../data/projects/next_cryptocurrencies_handbook.mdx";
import Proj2 from "./../data/projects/dota2_rampage_tracker.mdx";
import { NavBar } from "../components/navigation/NavBar";
import { useEffect, useState } from "react";

const components = {
  h1: (props: any) => (
    <h2
      className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl"
      {...props}
    />
  ),
  p: (props: any) => <p className="text-sm md:text-base" {...props} />,
};

export default function Projects() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [])

  return (
    <>
      <NavBar />
      <GroupedTransition mounted={loaded} transitions={{
        i: { transition: 'fade', duration: 500},
        t: { transition: 'slide-left', duration: 500 },
        p: { transition: 'fade', duration: 1000 },
      }}>
        {(styles) => <div
          className="overflow-auto min-h-full flex place-items-center justify-center"
          id="projects"
          style={Object.assign({
            backgroundImage: `url('/layered-peaks-haikei.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }, styles.i)}
        >
          <div className="flex w-full md:w-2/3 flex-col justify-center p-8 gap-5 ml-auto h-full mb-5 mr-0 md:mr-6 lg:mr-12 xl:mr-20 mt-3">
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
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold px-4 text-right"
              style={styles.t}
            >
              My Projects
            </Highlight>
            <div className="flex bg-stone-900 rounded-lg flex-col gap-2 p-4 md:p-6 lg:p-8 xl:p-10" style={styles.p}>
              <Proj1 components={components} />
            </div>
            <Divider size="sm" color="indigo" className="rounded-full my-10" />
            <div className="flex bg-stone-900 rounded-lg flex-col gap-2 p-4 md:p-6 lg:p-8 xl:p-10" style={styles.p}>
              <Proj2 components={components} />
            </div>
          </div>
        </div>}
      </GroupedTransition>
    </>
  );
}
