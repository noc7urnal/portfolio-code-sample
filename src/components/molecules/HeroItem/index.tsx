import { useRecoilValue } from "recoil";
import Image from "../../atoms/Image";
import Video from "../../atoms/Video";
import {
  detailDataAtom,
  tilePosState,
  viewportDimensionsAtom,
} from "../../helpers/atoms";
import styles from "../../pages/DetailPage/DetailPage.module.scss";
import { mediaItem } from "../../types/types";
import { HeroItemProps } from "./types";

const HeroItem = (props: HeroItemProps) => {
  const { className, active, children } = props;

  const data = useRecoilValue(detailDataAtom);
  const tilePos = useRecoilValue(tilePosState);
  const viewport = useRecoilValue(viewportDimensionsAtom);

  const renderThumb = () => {
    if (!data?.assets) return null;

    const { assets } = data;

    const renderImage = () => (
      <Image
        className={`detailPageBg ${active ? "hide" : ""}`}
        data={assets as mediaItem}
        style={{
          top: `${active ? 0 : tilePos.top}px`,
          left: `${active ? 0 : tilePos.left}px`,
          width: `${active ? viewport.width : tilePos.width}px`,
          height: `${active ? viewport.height : tilePos.height}px`,
        }}
      />
    );

    return (
      <>
        {children}
        {renderImage()}
        {assets.videoSrc ? (
          <Video className="hero" offset={0} data={assets} />
        ) : (
          <Image
            className={styles.detailPageBgImg}
            data={assets.imgSrc as mediaItem}
          />
        )}
        <div className={styles.detailPageProtection}></div>
      </>
    );
  };

  return renderThumb();
};

export default HeroItem;
