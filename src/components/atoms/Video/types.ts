import { ClassNameProps, mediaItem } from "../../types/types";

export interface VideoProps extends ClassNameProps {
    data: mediaItem;        // URL of the video file
    offset?: number;     // Intersection threshold offset
    loop?: boolean;      // Whether the video should loop
}
