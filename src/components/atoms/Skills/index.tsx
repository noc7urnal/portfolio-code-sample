import { renderIcons } from "../../helpers/hooks";
import { getClassNames } from "../../helpers/styles";
import styles from "./Skills.module.scss";
import { SkillsProps } from "./types";

const Skills = (props: SkillsProps) => {
  const { data, className } = props;

  const cn = getClassNames(styles, styles.skills, className);

  return (
    <ul className={cn}>
      {data?.tags.map((item, index) => {
        return (
          <li className={styles.skillsItem} key={index}>
            <i className={`iconcss ${renderIcons(item)}`} />
            <div className={styles.skillsItemText}>{item}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Skills;
