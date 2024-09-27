import { useEffect, useState } from "react";
import { WordScrollProps } from "./types";
import styles from "./WordScroll.module.scss";

const WordScroll = (props: WordScrollProps) => {
  const { content, animate } = props;

  const [activeId, setActiveId] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (activeId + 1 === content.length) {
        setActiveId(0);
      } else {
        setActiveId(activeId + 1);
      }
    }, 4000);
  }, [animate, activeId]);

  return (
    <div className={styles.wordsWrapper}>
      <ul>
        {content.map((item, index) => {
          const active = index === activeId;
          return (
            <li className={`${active ? styles.active : ""}`} key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WordScroll;
