import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList"; // Importing the list of projects
import { GitHub } from "@mui/icons-material";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams(); // Accessing the id parameter from the URL
  const project = ProjectList[id]; // Finding the project with the corresponding id

  // If the project is not found, display a message
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project">
      {/* Displaying project name */}
      <h1>{project.name}</h1>
      {/* Displaying project image */}
      <img src={project.image} alt="project snapshot" />
      {/* Link to the project's GitHub repository */}
      <a href={project.link}>
        <GitHub />
      </a>{" "}
      {/* Displaying project skills */}
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p>
        <b>Type:</b> {project.type}
      </p>
    </div>
  );
}

export default ProjectDisplay;
