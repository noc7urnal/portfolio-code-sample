import { getClassNames } from "../../helpers/styles";
import styles from "./Button.module.scss";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  const {
    onClick,
    ariaLabel,
    buttonColor,
    className,
    children,
    ariaControls,
    ariaExpanded,
    id,
    chevron,
  } = props;

  const cn = getClassNames(styles, styles.button, className);

  const buttonStyle = {
    background: buttonColor ? buttonColor : "inherit",
  };

  return (
    <button
      className={cn}
      onClick={onClick}
      style={buttonStyle}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
    >
      {children}
    </button>
  );
};

export default Button;
