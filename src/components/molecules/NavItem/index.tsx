import Button from "../../atoms/Button";
import { NavItemsProps } from "./types";

const NavItem = (props: NavItemsProps) => {
  const { label, link, icon } = props;

  return (
    <li>
      <a href={link}>
        <Button ariaLabel={label} onClick={() => {}}>
          {icon && <img arial-hidden="true" alt="" src={icon} />}
        </Button>
      </a>
    </li>
  );
};

export default NavItem;
