import React from "react";
import ProjectItem from "../components/ProjectItem"; // Importing the ProjectItem component
import { ProjectList } from "../helpers/ProjectList"; // Importing the list of projects
import "../styles/Project.css";

function Projects() {
  return (
    <div className="projects">
      <h1>Personal Projects</h1>
      <div className="projectList">
        {/* Mapping through the list of projects and rendering ProjectItem for each */}
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              key={idx}
              id={idx}
              name={project.name}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
