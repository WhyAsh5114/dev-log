import NavButtonGroup from "./NavButtonGroup";
import NavDrawer from "./NavDrawer";

export function NavBar() {
  return (<>
    <nav className="hidden gap-2 py-3 md:flex" data-cy="desktop-navbar">
      <NavButtonGroup />
    </nav>
    <NavDrawer />
  </>);
}
  