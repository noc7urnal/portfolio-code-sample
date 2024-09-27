import { getClassNames } from "../../helpers/styles";
import styles from "./TextBlock.module.scss";
import { TextBlockProps } from "./types";

const TextBlock = (props: TextBlockProps) => {
  const { children, className } = props;

  const cn = getClassNames(styles, styles.textBlock, className);

  return <div className={cn}>{children}</div>;
};

export default TextBlock;
