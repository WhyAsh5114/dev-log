import NavButton from "./NavButton";
import { Book2, FilePencil, Home, InfoCircle, Notebook } from "tabler-icons-react";

export default function NavButtonGroup() {
  return (<>
    <NavButton link="/" icon={<Home />}>Home</NavButton>
    <NavButton link="/" icon={<FilePencil />}>Blog</NavButton>
    <NavButton link="/" icon={<Book2 />}>Journal</NavButton>
    <NavButton link="/" icon={<Notebook />}>Projects</NavButton>
    <NavButton link="/" icon={<InfoCircle />}>About</NavButton>
  </>);
}