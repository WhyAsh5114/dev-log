import NavButton from "./NavButton";
import NavDrawer from "./NavDrawer";

export function NavBar() {
  return (<>
    <nav className="hidden gap-2 py-3 md:flex" data-cy="desktop-navbar">
      <NavButton link="/">Home</NavButton>
      <NavButton link="/">Blog</NavButton>
      <NavButton link="/">Journal</NavButton>
      <NavButton link="/">Projects</NavButton>
      <NavButton link="/">About</NavButton>
    </nav>
    <NavDrawer />
  </>);
}
  