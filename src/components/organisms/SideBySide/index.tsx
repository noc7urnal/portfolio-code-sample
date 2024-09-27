import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import Video from "../../atoms/Video";
import { goToUrl } from "../../helpers/hooks";
import TextBlock from "../../molecules/TextBlock";
import sectionStyles from "../../templates/Section/Section.module.scss";
import { SideBySideProps } from "./types";

const SideBySide = (props: SideBySideProps) => {
  const { data } = props;

  const renderAsset = () => {
    if (data?.assets?.videoSrc?.includes("mp4")) {
      return (
        <Video className={"sectionVideo"} data={data?.assets} offset={0.3} />
      );
    } else {
      return <img className="" src={data?.assets?.imgSrc} />;
    }
  };

  return (
    <>
      {renderAsset()}
      <TextBlock className={sectionStyles.sectionCopy}>
        <div className={sectionStyles.sectionCopyWrapper}>
          <Text level={"h1"}>{data?.heading}</Text>
          <Text level={"h3"}>{data?.description}</Text>
          {data?.button && (
            <Button
              onClick={() => goToUrl(data)}
              buttonColor={data?.button.color}
            >
              {data?.button.text}
            </Button>
          )}
        </div>
      </TextBlock>
    </>
  );
};

export default SideBySide;
