import { ClassNameProps, mediaItem } from "../../types/types";

export interface ImageProps extends ClassNameProps {
    data: mediaItem;      // URL of the image file
    style?: React.CSSProperties;  // Additional CSS classname for the component
}
