import { getClassNames } from "../../helpers/styles";
import styles from "./Text.module.scss";
import { TextProps } from "./types";

const Text = (props: TextProps) => {
  const { className, level, children } = props;

  const Tag = `${level}` as keyof JSX.IntrinsicElements;
  const cn = getClassNames(styles, styles.text, className);

  return <Tag className={cn}>{children}</Tag>;
};

export default Text;
