import { WelcomeText } from './../components/WelcomeText';
import { NavBar } from './../components/NavBar';
import { Divider, Highlight } from "@mantine/core";
import Description from '../components/Description';

export default function HomePage() {
  return (<>
    <div className="flex flex-col h-full">
      <NavBar />
      <div 
        className='flex h-full items-center gap-2 flex-col md:flex-row justify-evenly' 
        style={{
          backgroundImage: `url('/layered-waves-haikei.svg')`, 
          backgroundRepeat: 'no-repeat', 
          backgroundSize: 'cover'
        }}
      >
        <WelcomeText />
        <Description />
      </div>
    </div>

    <Divider size={'sm'} color='indigo'></Divider>

    <div 
      className='h-full' 
      style={{
        backgroundImage: `url('/layered-peaks-haikei.svg')`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover'
      }}
      id="projects"
    >
      <div className='flex w-full md:w-9/12 float-right h-full flex-col justify-center px-8 gap-5'>
        <Highlight 
          highlight={['Projects']} 
          highlightStyles={theme => ({
            backgroundImage: theme.fn.linearGradient(45, theme.colors.indigo[7], theme.colors.indigo[3]),
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          })} 
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-right px-4"
        >
          My Projects
        </Highlight>
        <div className='flex h-5/6 bg-zinc-800 rounded-3xl'>
          
        </div>
      </div>
    </div>
  </>);
}  