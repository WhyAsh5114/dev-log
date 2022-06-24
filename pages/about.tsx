import { Button, Divider, GroupedTransition, Text, Title } from "@mantine/core";
import NavBar from "../components/navigation/NavBar";
import {
  Mail,
  BrandLinkedin,
  BrandTwitter,
  BrandGithub,
  Download,
} from "tabler-icons-react";
import { useEffect, useState } from "react";

export default function About() {
  const duration = 500;
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="flex flex-col h-full" data-cy="about-page-container">
      <NavBar />
      <GroupedTransition
        mounted={loaded}
        transitions={{
          t1: {
            transition: "slide-down",
            duration: duration,
            timingFunction: "ease-out",
          },
          t2: {
            transition: "slide-right",
            duration: duration,
            timingFunction: "ease-out",
          },
          d: {
            transition: "slide-right",
            duration: duration + 250,
            timingFunction: "ease-out",
          },
          l1: {
            transition: "slide-up",
            duration: duration,
            timingFunction: "ease-out",
          },
          l2: {
            transition: "slide-up",
            duration: duration + 200,
            timingFunction: "ease-out",
          },
          l3: {
            transition: "slide-up",
            duration: duration + 400,
            timingFunction: "ease-out",
          },
          l4: {
            transition: "slide-up",
            duration: duration + 600,
            timingFunction: "ease-out",
          },
          r: {
            transition: "fade",
            duration: duration + 1500,
            timingFunction: "ease-out",
          },
          i: {
            transition: "fade",
            duration,
            timingFunction: "ease-out",
          },
          line: {
            transition: "fade",
            duration: 1000,
            timingFunction: "ease-in",
          },
        }}
      >
        {(styles) => (
          <div
            className="flex flex-col h-full justify-center pl-6 lg:pl-12"
            style={Object.assign(
              {
                backgroundImage: `url('/about-background.svg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              },
              styles.i
            )}
          >
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-2/3 lg:w-1/2">
              <Title
                className="text-3xl md:text-4xl lg:text-5xl text-white"
                style={styles.t1}
              >
                Yash Kolekar
              </Title>
              <Title
                className="text-2xl md:text-3xl lg:text-4xl"
                style={styles.t2}
              >
                Full stack developer
              </Title>
              <Text className="text-sm md:text-md lg:text-lg" style={styles.d}>
                A developer who is always learning new things out of pure
                interest and curiosity. I know plenty about web development,
                blockchain, smart contracts and problem solving. I have been
                programming as a student since 8 years, and love everything
                there is, in the field of software and computer science.
              </Text>
            </div>
            <Divider
              color="white"
              className="w-2/3 lg:w-1/2 my-5"
              style={styles.line}
            />
            <address className="w-2/3 lg:w-1/2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
              <a
                href="mailto:whyash5114@gmail.com"
                className="flex justify-center bg-red-500 rounded-full p-1.5 hover:bg-red-600 transition-colors"
                style={styles.l1}
                aria-label="Mail"
              >
                <Mail size={35} color="white" />
              </a>
              <a
                href="https://www.linkedin.com/in/whyash5114/"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center bg-cyan-600 rounded-full p-1.5 hover:bg-cyan-700 transition-colors"
                style={styles.l2}
                aria-label="LinkedIn Profile"
              >
                <BrandLinkedin size={35} color="white" />
              </a>
              <a
                href="https://www.twitter.com/whyash5114/"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center bg-blue-500 rounded-full p-1.5 hover:bg-blue-600 transition-colors"
                style={styles.l3}
                aria-label="Twitter Profile"
              >
                <BrandTwitter color="white" size={35} />
              </a>
              <a
                href="https://www.github.com/WhyAsh5114"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center bg-white rounded-full p-1.5 hover:bg-gray-300 transition-colors"
                style={styles.l4}
                aria-label="GitHub Profile"
              >
                <BrandGithub size={35} color="black" />
              </a>
            </address>
          </div>
        )}
      </GroupedTransition>
    </div>
  );
}
