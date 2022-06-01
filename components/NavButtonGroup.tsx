import NavButton from "./NavButton";
import { Book2, FilePencil, Home, InfoCircle, Notebook } from "tabler-icons-react";

export default function NavButtonGroup() {
  return (<>
    <NavButton link="/" icon={<Home />} hoverClass="hover:text-blue-400" data_cy="home-nav-button">Home</NavButton>
    <NavButton link="/" icon={<FilePencil />} hoverClass="hover:text-orange-400" data_cy="blog-nav-button">Blog</NavButton>
    <NavButton link="/" icon={<Book2 />} hoverClass="hover:text-yellow-400" data_cy="journal-nav-button">Journal</NavButton>
    <NavButton link="/" icon={<Notebook />} hoverClass="hover:text-indigo-400" data_cy="projects-nav-button">Projects</NavButton>
    <NavButton link="/" icon={<InfoCircle />} hoverClass="hover:text-blue-400" data_cy="about-nav-button">About</NavButton>
  </>);
}