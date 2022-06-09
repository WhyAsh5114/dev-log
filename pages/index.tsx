import { Affix, Divider, Highlight, Transition, Button, Title, Text, List, ThemeIcon } from "@mantine/core";
import { useWindowScroll } from '@mantine/hooks';
import { ArrowUp, CircleCheck } from "tabler-icons-react";
import { NavBar } from "./../components/navigation/NavBar";
import Typewriter from "typewriter-effect";
import Proj1 from "./../data/projects/next_cryptocurrencies_handbook.mdx";
import Proj2 from "./../data/projects/dota2_rampage_tracker.mdx"

const components = {
  h1: (props: any) => <h2 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl" {...props}/>,
  p: (props: any) => <p className="text-sm md:text-base" {...props} />
}

export default function HomePage() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<ArrowUp />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              className="bg-indigo-700"
            >
              Home
            </Button>
          )}
        </Transition>
      </Affix>
      <div className="flex flex-col h-full">
        <NavBar />
        <div
          className="flex h-full items-center gap-2 flex-col md:flex-row justify-evenly"
          style={{
            backgroundImage: `url('/layered-waves-haikei.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <WelcomeText />
          <Description />
        </div>
      </div>

      <Divider size={"sm"} color="indigo"></Divider>

      <div
        className="overflow-auto min-h-full flex place-items-center justify-center"
        id="projects"
        style={{
          backgroundImage: `url('/layered-peaks-haikei.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="flex w-full md:w-9/12 flex-col justify-center p-8 gap-5 ml-auto h-full">
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
          >
            My Projects
          </Highlight>
          <div className="flex bg-stone-900 rounded-lg flex-col gap-2 p-4 md:p-6 lg:p-8 xl:p-10">
            <Proj1 components={components} />
          </div>
          <Divider size='sm' color='indigo' className="rounded-full my-10" />
          <div className="flex bg-stone-900 rounded-lg flex-col gap-2 p-4 md:p-6 lg:p-8 xl:p-10">
            <Proj2 components={components} />
          </div>
        </div>
      </div>
    </>
  );
}


function Description() {
  return (
    <div className="flex lg:flex-1 justify-center flex-col border-l-2 pl-3 h-min py-5">
      <Title className="h-min text-xl md:text-2xl lg:text-3xl">
        Hi, my name is Yash
      </Title>
      <Text className="pb-3 font-semibold text-md md:text-lg">
        I am a full-stack developer, who is
      </Text>
      <List>
        <DescriptionListItem text="Super excited about new technologies" />
        <DescriptionListItem text="Ready to tackle challenges head on" />
        <DescriptionListItem text="Always willing to learn" />
      </List>
    </div>
  );
}


interface ListItemProps {
  text: string;
}
function DescriptionListItem(props: ListItemProps) {
  return (
    <List.Item
      className="text-md md:text-lg"
      icon={
        <ThemeIcon color="blue" size={24} radius="xl">
          <CircleCheck size={20} />
        </ThemeIcon>
      }
    >
      {props.text}
    </List.Item>
  );
}


function WelcomeText() {
  return (
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
      >
        Welcome to WhyAsh&apos;s
      </Highlight>
      <div className="h-3 md:h-5 lg:h-7 xl:h-9" />
      <div className="flex justify-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono text-white">
        <Typewriter
          options={{
            strings: ["dev_life", "blog", "journal", "projects"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}
