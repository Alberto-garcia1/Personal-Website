import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';

function Experience() {
  // Array containing education data
  const experienceData = [
    {
      date: "January 2023 - May 2023",
      institution: "Pueblo Community College, Colorado",
      certification: "CompTIA A+ Certification",
    },
    {
      date: "January 2023 - May 2023",
      institution: "Nucamp Coding Bootcamp",
      certification: "Front-End Web Development with Google Cloud",
    },
    {
      date: "Febuary 2024 - Present",
      occupation: "Freelance Web Developer",
      certification: "Front-End Web Development with Google Cloud",
    },
  ];

  return (
    <div className="experience">
      {/* Vertical timeline to display education history */}
      <VerticalTimeline lineColor="#272727">
        {experienceData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            // Add even/odd class for alternating timeline elements
            className={`vertical-timeline-element--education ${
              index % 2 === 0 ? 'even' : 'odd'
            }`}
            date={item.date} // Display date
            iconStyle={{ background: '#272727', color: '#fff' }} // Style for the timeline icon
            icon={<SchoolIcon />} // Icon for education events
          >
            <h3 className="vertical-timeline-element-title">{item.institution}</h3>
            <p>{item.certification}</p> {/* Display certification*/}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
