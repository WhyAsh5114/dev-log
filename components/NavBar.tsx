import NavButton from "./NavButton";
import NavDrawer from "./NavDrawer";

export function NavBar() {
  return (<>
    <nav className="flex gap-2 py-3 h-0 invisible md:visible md:h-auto">
      <NavButton link="/">Home</NavButton>
      <NavButton link="/">Blog</NavButton>
      <NavButton link="/">Journal</NavButton>
      <NavButton link="/">Projects</NavButton>
      <NavButton link="/">About</NavButton>
    </nav>
    <NavDrawer />
  </>);
}
  