import { useRef } from "react";
import { useSetRecoilState } from "recoil";
import {
  detailActive,
  detailDataAtom,
  tilePosState,
} from "../../helpers/atoms";
import { getClassNames } from "../../helpers/styles";
import { AssetItem } from "../../types/types"; // Import AssetItem type
import Badge from "../Badge";
import Skills from "../Skills";
import { TileProps } from "../Tile/types";
import styles from "./Tile.module.scss";

const Tile = (props: TileProps) => {
  const { data, className } = props;
  const tileRef = useRef<HTMLDivElement>(null);
  const setTilePosition = useSetRecoilState(tilePosState);
  const setActive = useSetRecoilState(detailActive);
  const setAssetData = useSetRecoilState<AssetItem | null>(detailDataAtom); // Adjust type annotation

  const cn = getClassNames(styles, styles.tile, className);

  const onClick = () => {
    const currentTileRef = tileRef.current?.querySelector(`.${styles.tileImg}`);
    if (currentTileRef) {
      const topPos = currentTileRef.getBoundingClientRect().top;
      const leftPos = currentTileRef.getBoundingClientRect().left;
      const tileWidth = currentTileRef.getBoundingClientRect().width;
      const tileHeight = currentTileRef.getBoundingClientRect().height;
      const paddingSource = window.getComputedStyle(currentTileRef);
      const paddingTop = parseFloat(paddingSource.paddingTop);
      const paddingLeft = parseFloat(paddingSource.paddingLeft);
      setTilePosition({
        left: leftPos,
        top: topPos,
        width: tileWidth,
        height: tileHeight,
        paddingTop: paddingTop,
        paddingLeft: paddingLeft,
      });
      launchDetailsPage();
    }
  };

  const launchDetailsPage = () => {
    window.history.pushState("page2", "Title", data.slug);
    setActive(true);
    setAssetData(data); // Directly set data to assetData
  };

  // ************ Need to refactor to simplify this component and move it to a molecule ************* //

  return (
    <div className={cn} ref={tileRef} onClick={onClick} id={data.slug}>
      <img
        className={styles.tileImg}
        src={data?.assets?.imgSrc}
        alt={data.name}
      />
      {data?.assets?.videoSrc && (
        <video className="preload">
          <source src={data?.assets?.videoSrc} type="video/mp4" />
        </video>
      )}
      <div className={styles.tileMeta}>
        <div className={styles.tileMetaName}>
          <div className={styles.tileMetaNameCopy}>{data.name}</div>
          {data.concept && <Badge data={data} className={"tileBadge"} />}
        </div>
        <div className={styles.tileMetaDescription}>{data.description}</div>
        <Skills data={data} className={"tile"} />
      </div>
    </div>
  );
};

export default Tile;
