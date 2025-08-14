import React from "react";
import { ProjectCard } from "./components/ProjectCard";
import "./style.css";
import { useDataFecth } from "./hooks/useDataFetch";

export const Projects: React.FC = () => {
  const data = useDataFecth();

  return (
    <div className="projects-container">
      {data.map((project) => (
        <ProjectCard {...project} />
      ))}
    </div>
  );
};
