import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { getClassNames } from "../../helpers/styles";
import Caption from "../../molecules/Caption";
import { VideoProps } from "./types";
import styles from "./Video.module.scss";

const Video = (props: VideoProps) => {
  const { data, offset, className, loop } = props;
  const cn = getClassNames(styles, styles.videoWrapper, className);

  const videoRef = useRef<HTMLVideoElement>(null);

  // useInView hook to detect if the video is in the viewport
  const { ref: vidWrapperRef, inView: elementIsVisible } = useInView({
    threshold: offset ? offset : 0, // Threshold value for intersection
    triggerOnce: loop ? loop : true, // Whether to trigger intersection once or continuously loop
  });

  // Effect hook to handle video play/pause based on visibility
  useEffect(() => {
    if (videoRef.current) {
      // If video is paused and in view, play it
      if (videoRef.current.paused && elementIsVisible) {
        videoRef.current.play();
      } else {
        // If not in view or paused, pause and reset video to start
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [elementIsVisible]);

  return (
    <div ref={vidWrapperRef} className={cn}>
      <video loop muted ref={videoRef}>
        <source src={data.videoSrc} type="video/mp4" />
      </video>
      {data.caption && <Caption>{data.caption}</Caption>}
    </div>
  );
};

export default Video; // Export the Video component for use in other parts of the application
