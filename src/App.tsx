import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import "./App.scss";
import LetterDrop from "./components/atoms/LetterDrop";
import WordScroll from "./components/atoms/WordScroll";
import {
  detailActive,
  detailDataAtom,
  viewportDimensionsAtom,
} from "./components/helpers/atoms";
import Grid from "./components/molecules/Grid";
import DetailPage from "./components/pages/DetailPage";
import { AssetData, AssetItem } from "./components/types/types";
import { projectsData } from "./data/projects";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showDetailPage, setShowDetailPage] = useRecoilState(detailActive);
  const setData = useSetRecoilState(detailDataAtom);
  const setDimensions = useSetRecoilState(viewportDimensionsAtom);
  const location = useLocation();

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (!isLoaded) {
      const script = document.createElement("script");
      script.src = "/assets/vendor/particles.js";
      script.async = true;

      document.body.appendChild(script);

      setIsLoaded(true);

      return () => {
        document.body.removeChild(script);
      };
    }

    window.addEventListener("resize", handleResize, false);
    handleResize();
  }, [isLoaded]);

  useEffect(() => {
    if (showDetailPage) {
      document.getElementById("body")?.classList.add("lock");
    } else {
      document.getElementById("body")?.classList.remove("lock");
    }
  }, [showDetailPage]);

  const findProjectById = (
    id: string | undefined,
    projectsData: AssetData
  ): AssetItem | null => {
    if (!id) return null;

    // Iterate over each array in projectsData
    for (const key in projectsData) {
      const projectArray = projectsData[key];
      // Find the project in the current array
      const matchingProject = projectArray.find(
        (project: AssetItem) => project.slug === id
      );
      if (matchingProject) {
        return matchingProject;
      }
    }
    return null;
  };

  useEffect(() => {
    // Extract the ID from the pathname
    const pathSegments = location.pathname.split("/");
    const id = pathSegments[pathSegments.length - 1];
    console.log(id);

    // Find the element by ID and scroll to it
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setShowDetailPage(true);
        const matchingProject = findProjectById(id, projectsData);
        setData(matchingProject);
      }, 5000);
    }
  }, [location]);

  return (
    <div className="App">
      <div className="page-background" />
      <div className="intro-wrapper">
        <i className={`iconcss icon-logo ${isLoaded ? "animate" : ""}`} />
        <LetterDrop text="William Rajwan" animate={isLoaded ? true : false} />
        <WordScroll
          content={[
            "Design Technologist",
            "Team Leader",
            "UX/UI Designer/Researcher",
            "Product Designer",
            "Motion Designer",
            "Front End Developer",
          ]}
          animate={isLoaded ? true : false}
        />
      </div>
      <div className="container"></div>
      <Grid />
      {showDetailPage && <DetailPage />}
    </div>
  );
}

export default App;
