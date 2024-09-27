import SideBySide from "../../organisms/SideBySide";
import styles from "./Section.module.scss";
import { SectionProps } from "./types";

const Section = (props: SectionProps) => {
  const {
    data,
    key,
    // onInView,
  } = props;

  // const sectionRef = useRef<HTMLDivElement | null>(null);

  // const { ref: inViewRef, inView } = useInView({
  //     threshold: 0.2, // 20% in view
  //     triggerOnce: false, // If you want the callback to fire multiple times
  // });

  // // Combine refs
  // const setRefs = (node: HTMLDivElement) => {
  //     sectionRef.current = node;
  //     inViewRef(node);
  // };

  // // Trigger scroll when section is in view
  // if (inView) {
  //     onInView();
  // }

  const renderSection = () => {
    const sectionType = data?.type?.includes("sideBySide")
      ? "sideBySide"
      : data.type;

    switch (sectionType) {
      case "sideBySide":
        return <SideBySide data={data} />;
    }
  };

  return (
    <div className={`${styles.section} ${data.type ? styles[data.type] : ""} `}>
      {renderSection()}
    </div>
  );
};

export default Section;
