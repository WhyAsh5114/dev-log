import { Divider, List, Text, Title } from "@mantine/core";
import { NavBar } from "../components/navigation/NavBar";
import {
  Mail,
  BrandLinkedin,
  BrandTwitter,
  BrandGithub,
} from "tabler-icons-react";

export default function About() {
  return (
    <>
      <div className="flex flex-col h-full">
        <NavBar />
        <div
          className="flex flex-col h-full justify-center pl-6 lg:pl-12"
          style={{
            backgroundImage: `url('/layered-steps-haikei.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-2/3 lg:w-1/2">
            <Title className="text-3xl md:text-4xl lg:text-5xl text-white">
              Yash Kolekar
            </Title>
            <Title className="text-2xl md:text-3xl lg:text-4xl">
              Full stack developer
            </Title>
            <Text className="text-md lg:text-lg">
              A developer who is always learning new things out of pure interest
              and curiosity. I know plenty about web development, blockchain,
              smart contracts and problem solving. I have been programming as a
              student since 8 years, and love everything there is, in the field
              of software and computer science.
            </Text>
          </div>
          <Divider color="white" className="w-2/3 lg:w-1/2 my-5" />
          <address className="w-2/3 lg:w-1/2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <a href="mailto:whyash5114@gmail.com" className="flex justify-center bg-red-500 rounded-full p-1.5">
              <Mail size={35} color="white" />
            </a>
            <a
              href="https://www.linkedin.com/in/whyash5114/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center bg-cyan-600 rounded-full p-1.5"
            >
              <BrandLinkedin size={35} color="white" />
            </a>
            <a
              href="https://www.twitter.com/whyash5114/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center bg-blue-500 rounded-full p-1.5"
            >
              <BrandTwitter color="white" size={35} />
            </a>
            <a
              href="https://www.github.com/WhyAsh5114"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center bg-white rounded-full p-1.5"
            >
              <BrandGithub size={35} color="black" />
            </a>
          </address>

          <div className="flex justify-center w-2/3 lg:w-1/2">
            <button className="mt-10 text-white font-bold border-2 bg-white bg-opacity-10 text-lg px-8 py-2 rounded-md">
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
