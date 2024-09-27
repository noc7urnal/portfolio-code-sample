import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { tilePosState, viewportDimensionsAtom } from "../../helpers/atoms";
import { getClassNames } from "../../helpers/styles";
import HeroItem from "../../molecules/HeroItem";
import { HeroProps } from "../../organisms/Hero/types";
import styles from "./Hero.module.scss";

const Hero = (props: HeroProps) => {
  const { className, active, children } = props;

  const cn = getClassNames(styles, styles.heroWrapper, className);

  const viewport = useRecoilValue(viewportDimensionsAtom);
  const tilePos = useRecoilValue(tilePosState);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger the transition after the component has mounted
    setTimeout(() => {
      setMounted(true);
    }, 200);
  }, [active]);

  return (
    <div
      className={cn}
      style={{
        width: `${mounted ? viewport.width : tilePos.width}px`,
        height: `${mounted ? viewport.height : tilePos.height}px`,
      }}
    >
      <HeroItem active={active}>{children}</HeroItem>
    </div>
  );
};

export default Hero;
