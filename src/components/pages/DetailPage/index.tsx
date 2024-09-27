import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import {
  detailActive,
  detailDataAtom,
  tilePosState,
  viewportDimensionsAtom,
} from "../../helpers/atoms";
import { goToUrl } from "../../helpers/hooks";
import TextBlock from "../../molecules/TextBlock";
import Hero from "../../organisms/Hero";
import Section from "../../templates/Section/Section";
import { SectionItem } from "../../types/types";
import styles from "./DetailPage.module.scss";

const DetailPage = () => {
  const [showDetailPage, setShowDetailPage] = useRecoilState(detailActive);
  const tilePos = useRecoilValue(tilePosState);
  const [leftPos, setLeftPos] = useState<number>(tilePos.left);
  const [topPos, setTopPos] = useState<number>(tilePos.top);
  const [imgWidth, setImgWidth] = useState<number>(tilePos.width);
  const [imgHeight, setImgHeight] = useState<number>(tilePos.height);
  const [animate, setAnimate] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const data = useRecoilValue(detailDataAtom);
  const resize = useRecoilValue(viewportDimensionsAtom);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleKeyPress = (event: KeyboardEvent) => {
    // Check if the pressed key is the Enter key (key code 13)
    if (event.key === "Escape") {
      console.log("hit");
      // Do something when Enter key is pressed
      setTimeout(() => {
        setTopPos(tilePos.top + tilePos.paddingTop);
        setLeftPos(tilePos.left + tilePos.paddingLeft);
        setImgHeight(tilePos.height);
        setImgWidth(tilePos.width);
        setShowHero(false);
      }, 500);

      setTimeout(() => {
        setShowDetailPage(false);
      }, 1020);
    }
  };

  const click = () => {
    const sectionElement = scrollRef.current?.querySelector(".section");
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    } else {
      if (data?.button?.link) {
        goToUrl(data);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);

    // Add event listener when component mounts
    document.addEventListener("keydown", handleKeyPress);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const transitionTime = 250;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const transitionTimeout = setTimeout(() => {
      setTopPos(0);
      setLeftPos(0);
      setImgHeight(windowHeight);
      setImgWidth(windowWidth);
    }, transitionTime);

    return () => clearTimeout(transitionTimeout);
  }, [tilePos, resize, data]);

  useEffect(() => {
    setTopPos(tilePos.top + tilePos.paddingTop);
    setLeftPos(tilePos.left + tilePos.paddingLeft);
    if (tilePos.top > 0) {
      setAnimate(true);
      setShowHero(true);
    }
  }, [tilePos, data]);

  // const handleInView = (index: number) => {
  //   if (!isScrolling) {
  //     const sectionElements =
  //       scrollRef.current?.querySelectorAll<HTMLDivElement>(".section");
  //     const sectionElement = sectionElements?.[index];

  //     if (sectionElement) {
  //       const boundingRect = sectionElement.getBoundingClientRect();
  //       const isOutOfView =
  //         boundingRect.top < 0 || boundingRect.bottom > window.innerHeight;

  //       if (isOutOfView) {
  //         setIsScrolling(true);

  //         window.requestAnimationFrame(() => {
  //           scrollRef.current?.scrollTo({
  //             top: sectionElement.offsetTop,
  //             behavior: "smooth",
  //           });

  //           setTimeout(() => {
  //             setIsScrolling(false);
  //           }, 500);
  //         });
  //       }
  //     }
  //   }
  // };

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  console.log(animate);

  return (
    <div
      ref={scrollRef}
      className={`${styles.detailPage} ${animate ? styles.active : ""}`}
      style={{
        top: `${topPos}px`,
        left: `${leftPos}px`,
        width: `${imgWidth}px`,
        height: `${imgHeight}px`,
      }}
    >
      <Hero active={showHero}>
        <div className={styles.detailPageHero}>
          <TextBlock>
            <Text level={"h1"} className={`hero ${animate ? "active" : ""}`}>
              {data?.name}
            </Text>
            <Text level={"h3"} className={`hero ${animate ? "active" : ""}`}>
              {data?.description}
            </Text>
            {data?.button && (
              <Button
                className={`hero ${animate ? "active" : ""}`}
                onClick={() => click()}
                buttonColor={data?.button.color}
              >
                {data?.button.text}
              </Button>
            )}
          </TextBlock>
        </div>
      </Hero>

      {loaded &&
        data?.sections &&
        data?.sections.map((item: SectionItem, index: number) => {
          return (
            <Section
              data={item}
              key={index}
              // onInView={() => handleInView(index)}
            />
          );
        })}
    </div>
  );
};

export default DetailPage;
