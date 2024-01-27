import React from "react";
import { LinkedIn, GitHub, MailOutline } from "@mui/icons-material";
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
    <div className="about">
      <h2>Hello My Name Is Alberto</h2>
      <div className="prompt">
        <p>A software developer with a passion for learning and creating.</p>
        <LinkedIn />
        <MailOutline />
        <GitHub />
      </div>
    </div>
    <div className="skills">
      <h1> Skills</h1>
      <ol className="list">
        <li className="item">
          <h2> Front-End</h2>
          <span>
          ReactJS, Redux, HTML, CSS, React Native, Bootstrap, NPM, MaterialUI, Firebase
          </span>
        </li>
        <li className="item">
          <h2>Languages</h2>
          <span>JavaScript</span>
        </li>
      </ol>
    </div>
  </div>
  );
}

export default Home;
