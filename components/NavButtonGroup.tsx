import NavButton from "./NavButton";
import { Book2, FilePencil, Home, InfoCircle, Notebook } from "tabler-icons-react";

interface props {
  handleClick: Function;
}

export default function NavButtonGroup(props: props) {
  return (<>
    <NavButton link="/" icon={<Home />} hoverClass="hover:text-blue-400" data_cy="home-nav-button" handleClick={props.handleClick}>Home</NavButton>
    <NavButton link="/" icon={<FilePencil />} hoverClass="hover:text-orange-400" data_cy="blog-nav-button" handleClick={props.handleClick}>Blog</NavButton>
    <NavButton link="/" icon={<Book2 />} hoverClass="hover:text-yellow-400" data_cy="journal-nav-button" handleClick={props.handleClick}>Journal</NavButton>
    <NavButton link="#projects" icon={<Notebook />} hoverClass="hover:text-indigo-400" data_cy="projects-nav-button" handleClick={props.handleClick}>Projects</NavButton>
    <NavButton link="/" icon={<InfoCircle />} hoverClass="hover:text-blue-400" data_cy="about-nav-button" handleClick={props.handleClick}>About</NavButton>
  </>);
}