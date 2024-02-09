import React from "react";
import { Instagram, LinkedIn, GitHub, Email } from "@mui/icons-material";
import "../styles/Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.instagram.com/alberto.g8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
        <a
          href="https://github.com/Alberto-garcia1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/alberto-garcia-98434720a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          href="mailto:albertogarcia2220@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email />
        </a>
      </div>
      <p>ⓒ {year} Alberto Garcia</p>
    </div>
  );
}

export default Footer;
