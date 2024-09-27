import { getClassNames } from "../../helpers/styles";
import Caption from "../../molecules/Caption";
import styles from "./Image.module.scss";
import { ImageProps } from "./types";

const Image = (props: ImageProps) => {
  const { data, className, style } = props;

  const cn = getClassNames(styles, styles.image, className);

  return (
    <>
      <img className={cn} src={data.imgSrc} style={style || undefined} />
      {data.caption && <Caption>{data.caption}</Caption>}
    </>
  );
};

export default Image;
