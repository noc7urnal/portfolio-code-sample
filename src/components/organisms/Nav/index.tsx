import NavItem from "../../molecules/NavItem";
import { NavProps } from "../../organisms/Nav/types";

const navItems = [
  { label: "Home", href: "/", iconUrl: "/icons/home.svg" },
  { label: "About", href: "/about", iconUrl: "/icons/about.svg" },
  { label: "Contact", href: "/contact", iconUrl: "/icons/contact.svg" },
];

const Nav = (props: NavProps) => {
  return (
    <ul>
      {navItems.map((item) => (
        <NavItem key={item.label} label={item.label} />
      ))}
    </ul>
  );
};

export default Nav;
