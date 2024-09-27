import Text from "../../atoms/Text";
import { CaptionProps } from "./types";

const Caption = (props: CaptionProps) => {
  const { children, className } = props;

  return (
    <Text className={"text"} level={"caption"}>
      {children}
    </Text>
  );
};

export default Caption;
