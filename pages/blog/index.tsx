import { GroupedTransition, Highlight } from "@mantine/core";
import { useEffect, useState } from "react";
import NavBar from "../../components/navigation/NavBar";

export default function Blog() {
  let [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  // TODO: Image file name refactoring

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
                backgroundImage: 'url("/blog-background.svg")',
                backgroundRepeat: "no-repeat",
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

              </div>
            </div>
          </div>
        </div>
      )}
    </GroupedTransition>
  );
}