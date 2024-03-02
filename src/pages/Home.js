import React from "react";
import "../styles/Home.css";
// import ProfilePic from "../assets/ProfilePic.jpg";
// import Logo from "../assets/Logo.png";
import Logo from "../assets/Logo.mp4";

function Home() {
  // Style for the logo video
  const videoStyle = {
    width: "350px",
  };

  return (
    <div className="home">
      {/* Profile picture */}
      <div className="image-background">
      <video src={Logo} alt="Profile" style={videoStyle} autoPlay loop muted/>
      </div>
      <div className="about">
        <h2 className="welcome">Hello, Welcome To My Website</h2>
        <div className="prompt">
          {/* Description about yourself */}
          <p>
          I'm Alberto and I'm a Front-end Developer. I love to create
          beautiful and performant products with delightful user experiences.
          Currently, I'm focused on building responsive web
          applications.
          </p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          {/* List of skills */}
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, ReactJS, Redux, React Native, Bootstrap, NPM,
              MaterialUI, Firebase
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
          <li className="item">
            <h2>Soft Skills</h2>
            <span>
              Communication, Attention to Detail, Problem Solving, Collaboration
              and Teamwork, Creativity
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
