import { NavBar } from './../components/NavBar';
import { Highlight } from "@mantine/core";
import Typewriter from 'typewriter-effect'

export default function Home() {
  return (<div className="flex flex-col h-full">
    <NavBar />

    <div className="flex flex-col flex-1 justify-center">
      <Highlight
        align="center"
        highlight={['WhyAsh\'s']}
        highlightStyles={(theme) => ({
          backgroundImage: theme.fn.linearGradient(45, theme.colors.cyan[5], theme.colors.indigo[5]),
          fontWeight: 700,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        })}
        className="text-5xl"
      >
        Hi, welcome to WhyAsh&apos;s
      </Highlight>
      <br /><br />
      <div className="flex justify-center text-4xl font-mono text-white">
        <Typewriter
          options={{
            strings: ['dev_life', 'blog', 'journal', 'projects'],
            autoStart: true,
            loop: true
          }}
        />
      </div>
    </div>
  </div>);
}  