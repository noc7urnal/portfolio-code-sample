import { projectsData } from "../../../data/projects";
import Tile from "../../atoms/Tile";
import styles from "./Grid.module.scss";
import { GridProps } from "./types";

const Grid = (props: GridProps) => {
  const { content, animate } = props;

  return (
    <div className={styles.grid}>
      {Object.keys(projectsData).map((key) =>
        projectsData[key].map((item, index) => <Tile key={index} data={item} />)
      )}
    </div>
  );
};

export default Grid;
