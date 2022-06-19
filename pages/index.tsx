import {
  Highlight,
  Title,
  List,
  ThemeIcon,
  GroupedTransition,
  Transition,
} from "@mantine/core";
import { CircleCheck } from "tabler-icons-react";
import NavBar from "./../components/navigation/NavBar";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";


export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div className="flex flex-col h-full" data-cy="home-page-container">
        <NavBar />
        <Transition mounted={loaded} transition="fade" duration={500}>
          {(styles) => <div
            className="flex h-full items-center gap-2 flex-col md:flex-row justify-evenly"
            style={Object.assign({
              backgroundImage: `url('/home-background.svg')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }, styles)}
          >
            <WelcomeText />
            <Description />
          </div>}
        </Transition>
      </div>
    </>
  );
}

function Description() {
  const duration = 1000;

  let [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <GroupedTransition
      mounted={loaded}
      transitions={{
        l1: { transition: "slide-left", duration },
        l2: { transition: "slide-left", duration: duration + 250 },
        l3: { transition: "slide-left", duration: duration + 500 },
        t: { transition: "skew-up", duration: 500 },
      }}
    >
      {(styles) => (
        <div className="flex lg:flex-1 justify-center flex-col border-l pl-6 h-min py-5">
          <Title
            style={styles.t}
            className="h-min text-xl md:text-2xl lg:text-3xl"
          >
            Hi, my name is Yash
          </Title>
          <Title
            order={2}
            style={styles.t}
            className="pb-3 font-semibold text-md md:text-lg"
          >
            I am a full-stack developer, who is
          </Title>
          <List>
            <DescriptionListItem
              style={styles.l1}
              text="Super excited about new technologies"
            />
            <DescriptionListItem
              style={styles.l2}
              text="Ready to tackle challenges head on"
            />
            <DescriptionListItem
              style={styles.l3}
              text="Always willing to learn"
            />
          </List>
        </div>
      )}
    </GroupedTransition>
  );
}

interface ListItemProps {
  text: string;
  style: any;
}
function DescriptionListItem(props: ListItemProps) {
  return (
    <List.Item
      className="text-md md:text-lg"
      style={props.style}
      icon={
        <ThemeIcon color="blue" size={24} radius="xl">
          <CircleCheck size={20} />
        </ThemeIcon>
      }
    >
      <p>{props.text}</p>
    </List.Item>
  );
}

function WelcomeText() {
  let [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <GroupedTransition
      mounted={loaded}
      transitions={{
        t1: { transition: "slide-right", duration: 500 },
        t2: { transition: "scale", duration: 500 },
      }}
    >
      {(styles) => (
        <div className="flex flex-col justify-center mt-12 md:mt-4 lg:flex-[1.5]">
          <Highlight
            align="center"
            highlight={["WhyAsh's"]}
            highlightStyles={(theme) => ({
              backgroundImage: theme.fn.linearGradient(
                45,
                theme.colors.cyan[5],
                theme.colors.indigo[5]
              ),
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            })}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold"
            style={styles.t1}
          >
            Welcome to WhyAsh&apos;s
          </Highlight>
          <div className="h-3 md:h-5 lg:h-7 xl:h-9" />
          <div
            className="flex justify-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono text-white"
            style={styles.t2}
          >
            <Typewriter
              options={{
                strings: ["dev_life", "blog", "journal", "projects"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      )}
    </GroupedTransition>
  );
}
