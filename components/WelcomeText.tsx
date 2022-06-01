import { Highlight } from "@mantine/core";
import Typewriter from 'typewriter-effect'

export function WelcomeText() {
  return (
  <div className="flex flex-col justify-center mt-12 md:mt-4 lg:flex-[1.5]">
    <Highlight 
      align="center" 
      highlight={['WhyAsh\'s']} 
      highlightStyles={theme => ({
        backgroundImage: theme.fn.linearGradient(45, theme.colors.cyan[5], theme.colors.indigo[5]),
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      })} 
      className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold"
    >
        Welcome to WhyAsh&apos;s
    </Highlight>
    <div className="h-3 md:h-5 lg:h-7 xl:h-9" />
    <div className="flex justify-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono text-white">
      <Typewriter options={{
        strings: ['dev_life', 'blog', 'journal', 'projects'],
        autoStart: true,
        loop: true
      }} />
    </div>
  </div>);
}