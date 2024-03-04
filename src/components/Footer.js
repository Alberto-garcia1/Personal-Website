import React from "react";
import { Instagram, LinkedIn, GitHub, Email } from "@mui/icons-material";
import "../styles/Footer.css";

function Footer() {
  // Creates a constantly updating year date.
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* Instagram link */}
        <a
          href="https://www.instagram.com/echoes_of_a_quill/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
        {/* GitHub link */}
        <a
          href="https://github.com/Alberto-garcia1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/alberto-garcia-98434720a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
        {/* Email link */}
        <a
          href="mailto:albertogarcia2220@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email />
        </a>
      </div>
      {/* Copyright statement */}
      <p>ⓒ {year} Alberto Garcia</p>
    </div>
  );
}

export default Footer;
