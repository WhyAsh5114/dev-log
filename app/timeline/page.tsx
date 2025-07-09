import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import Link from "next/link";
import TechStack from "../components/TechStack";
import { MiniProjectShowcase } from "./MiniProjectShowcase";
import { TypographyH1 } from "@/components/ui/typographyH1";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <>
      <TypographyH1>My tech timeline</TypographyH1>
      <Separator className="mt-4 mb-12" />
      <Timeline
        data={[
          {
            title: "Jun 2025",
            content: (
              <div className="grid grid-cols-1 gap-2">
                <span className="text-lg font-semibold">Warpspeed 2025</span>
                <p>
                  Another iteration on the AI powered fitness app with a touch
                  of agentic AI and RAG-enhanced knowledge.
                </p>
                <MiniProjectShowcase projectName="fit-wise" />
              </div>
            ),
          },
          {
            title: "Apr 2025",
            content: (
              <div className="grid grid-cols-1 gap-2">
                <span className="text-lg font-semibold">HackByte 3.0</span>
                <p>
                  Built an advanced fitness app integrating real-time pose
                  detection with voice feedback, macro tracking with barcode
                  scanning, and AI-powered workout programs.
                </p>
                <MiniProjectShowcase projectName="rep-wise" />
              </div>
            ),
          },
          {
            title: "Feb 2025",
            content: (
              <div className="grid grid-cols-1 gap-2">
                <span className="text-lg font-semibold">HackHounds 3.O</span>
                <p>
                  Developed a decentralized payment system using blockchain
                  technology, enabling secure and fast transactions with a
                  user-friendly interface.
                </p>
                <MiniProjectShowcase projectName="BlockPay" />
                <span className="text-lg font-semibold">HackX 3.0</span>
                <p>
                  Built a modern outfit sharing platform with AI powered size
                  prediction and advanced overlaying with AR and segmentation
                </p>
                <MiniProjectShowcase projectName="FitSnap" />
                <span className="text-lg font-semibold">Err_404 6.0</span>
                <p>
                  Built a pose detection and yoga guidance app with Mediapipe,
                  ElevenLabs AI for voice guidance, and ar.js
                </p>
                <MiniProjectShowcase projectName="yoga-sense" />
              </div>
            ),
          },
          {
            title: "Jan 2025",
            content: (
              <div className="grid grid-cols-1 gap-2">
                <p>
                  Started an internship as a full-stack developer at Yardstick.
                  Built scalable apps and SaaS platforms with NextJS, React, and
                  Prisma following the latest web-standards.
                </p>
                <div className="grid grid-cols-2 gap-4 place-items-center">
                  <Image
                    src="/timelineImages/Yardstick.webp"
                    alt="Yardstick company logo"
                    width={56}
                    height={56}
                  />
                  <div className="w-full">
                    <TechStack techStack={["NextJS", "React", "Prisma"]} />
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Dec 2024",
            content: (
              <div className="grid grid-cols-1 gap-2">
                <p>
                  Started work on prisma-idb, an <b>npm package</b> that makes
                  it easier to query IndexedDB with Prisma&apos;s familiar and
                  powerful API.
                </p>
                <MiniProjectShowcase projectName="idb-client-generator" />
              </div>
            ),
          },
          {
            title: "Nov 2024",
            content: (
              <div className="grid grid-cols-1 gap-2">
                <span className="text-lg font-semibold">Technovate 2.0</span>
                <p>
                  Built a carbon footprint management platform, EcoLyf, in a
                  hackathon within 24 hours with a beautiful UI.
                </p>
                <MiniProjectShowcase projectName="EcoLyf" />
              </div>
            ),
          },
          {
            title: "Sep 2024",
            content: (
              <div className="grid grid-cols-1 gap-2">
                <p>
                  Built a social media platform, Skill-Swap, for skill sharing
                  with real-time chat and file sharing.
                </p>
                <MiniProjectShowcase projectName="skill-swap" />
              </div>
            ),
          },
          {
            title: "Apr 2024",
            content: (
              <div className="grid grid-cols-1 gap-2">
                <p>
                  Started work on MyFit V3. A more refined version using{" "}
                  <b>SvelteKit</b>, <b>tRPC</b>, and <b>Prisma</b> with{" "}
                  <b>PostgreSQL</b>.
                </p>
                <MiniProjectShowcase projectName="MyFit" />
              </div>
            ),
          },
          {
            title: "Mar 2024",
            content: (
              <div className="grid grid-cols-1 gap-2">
                <span className="text-lg font-semibold">HACKX 2.0</span>
                <p>
                  Developed an HR management system in a hackathon within 24
                  hours.
                </p>
                <MiniProjectShowcase projectName="hr-tech" />
              </div>
            ),
          },
          {
            title: "Feb 2024",
            content: (
              <div className="grid grid-cols-1 gap-2">
                <span className="text-lg font-semibold">Technothon 2k24</span>
                <p>
                  Developed an attendance tracking application in a hackathon
                  within 24 hours, winning{" "}
                  <b className="text-yellow-500">1st prize. 🥇</b>
                </p>
                <MiniProjectShowcase projectName="attendance-tracking-system" />
              </div>
            ),
          },
          {
            title: "Sep 2023",
            content: (
              <div className="grid grid-cols-1 gap-2">
                <p>
                  Started work on V2 of MyFit. A second, yet naive, attempt
                  using <b>DaisyUI</b> and <b>MongoDB</b> with <b>SvelteKit</b>.
                </p>
                <div className="grid grid-cols-2 gap-4 place-items-center">
                  <Image
                    src="/timelineImages/myfit.png"
                    alt="MyFit V2 logo"
                    width={64}
                    height={64}
                  />
                  <div className="w-full">
                    <TechStack techStack={["DaisyUI", "MongoDB", "Svelte"]} />
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "May 2023",
            content: (
              <div className="grid grid-cols-1 gap-2">
                <p>
                  Interned at <b>Anand Chemiceutics</b> for two months as a Data
                  Engineering Intern. Utilized <b>Python</b> and <b>Pandas</b>{" "}
                  for efficient pipeline creation.
                </p>
                <div className="grid grid-cols-2 gap-4 place-items-center">
                  <Image
                    src="/timelineImages/anand-chemiceutics.webp"
                    alt="Anand Chemiceutics logo"
                    className="mt-2 -mb-1"
                    width={128}
                    height={64}
                  />
                  <div className="w-full">
                    <TechStack techStack={["Python", "Pandas", "NumPy"]} />
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Mar 2023",
            content: (
              <div className="grid grid-cols-1 gap-2">
                <p>
                  Designed a static, high-performance website for my college.
                </p>
                <MiniProjectShowcase projectName="Agnel-Polytechnic-Vashi" />
              </div>
            ),
          },
          {
            title: "Sep 2022",
            content: (
              <div className="grid grid-cols-1 gap-2">
                <p>
                  Created a project for Diploma, based on sorting algorithm
                  runtimes in <b>Python</b> and <b>Kivy</b>.
                </p>
                <MiniProjectShowcase projectName="Python-Runtime-Comparer" />
              </div>
            ),
          },
          {
            title: "Jun 2022",
            content: (
              <div className="grid gap-2">
                <p>
                  Joined an internship at Juppiter AI Labs, working on the
                  Algorand platform as a <b>Blockchain Intern</b> for 2 months.
                </p>
                <div className="grid grid-cols-2 gap-4 place-items-center">
                  <Image
                    alt="Juppiter AI Labs Logo"
                    src="/timelineImages/juppiter-ai-labs.jpg"
                    width={200}
                    height={56}
                  />
                  <div className="w-full">
                    <TechStack techStack={["Algorand"]} />
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "May 2022",
            content: (
              <div className="grid gap-2">
                <p>Played around with React and Mantine UI.</p>
                <MiniProjectShowcase projectName="next-cryptocurrencies-handbook" />
              </div>
            ),
          },
          {
            title: "2021",
            content: (
              <div className="grid gap-2">
                <p>
                  Joined Agnel Polytechnic for a Diploma in Artificial
                  Intelligence and Machine Learning.
                </p>
                <Image
                  width={64}
                  height={64}
                  src="/timelineImages/agnel.webp"
                  alt="Agnel Polytechnic Logo"
                />
                <p>Finished secondary school from Sanjivani International.</p>
                <Image
                  width={64}
                  height={64}
                  src="/timelineImages/sanjivani.jpg"
                  alt="Sanjivani International School Logo"
                />
              </div>
            ),
          },
          {
            title: "2020",
            content: (
              <div className="flex flex-col gap-2">
                <p>
                  Created a <b>Python</b> app to find out a cool in-game stat of
                  DOTA 2 for a Reddit user.{" "}
                  <Link
                    className="underline"
                    href="https://www.reddit.com/r/DotA2/comments/jcyot9/how_can_i_view_all_the_matches_that_i_got_a/"
                  >
                    Post link.
                  </Link>
                </p>
                <MiniProjectShowcase projectName="DOTA-2-Rampage-Finder" />
              </div>
            ),
          },
          {
            title: "2018",
            content: (
              <div className="flex flex-col gap-2">
                <p>
                  Started learning programming in 8th grade with <b>Java</b> and
                  OOP fundamentals. Also designed some websites for fun.
                </p>
                <TechStack techStack={["Java", "HTML", "CSS"]} />
              </div>
            ),
          },
        ]}
      />
    </>
  );
}
