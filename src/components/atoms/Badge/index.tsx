import { getClassNames } from "../../helpers/styles";
import styles from "./Badge.module.scss";
import { BadgeProps } from "./types";

const Badge = (props: BadgeProps) => {
  const { data, className } = props;

  const cn = getClassNames(styles, styles.badge, className);

  return <div className={cn}>{data?.concept && "concept"}</div>;
};

export default Badge;
