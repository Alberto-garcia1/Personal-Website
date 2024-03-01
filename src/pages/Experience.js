import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';

function Experience() {
  // Array containing experience data
  const experienceData = [
    {
      type: "education",
      date: "January 2023 - May 2023",
      institution: "Pueblo Community College, Colorado",
      outcome: "CompTIA A+ Certification",
    },
    {
      type: "education",
      date: "January 2023 - May 2023",
      institution: "Nucamp Coding Bootcamp",
      outcome: "Front-End Web Development with Google Cloud",
    },
    {
      type: "work",
      date: "February 2024 - Present",
      institution: "Freelance Web Developer",
      outcome: "Rosie Bake Me A Cake Website",
    },
  ];

  return (
    <div className="experience">
      {/* Vertical timeline to display experience history */}
      <VerticalTimeline lineColor="#272727">
        {experienceData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            // Add even/odd class for alternating timeline elements
            className={`vertical-timeline-element--${item.type} ${
              index % 2 === 0 ? 'even' : 'odd'
            }`}
            date={item.date} // Display date
            iconStyle={{ background: '#272727', color: '#fff' }} // Style for the timeline icon
            icon={item.type === 'education' ? <SchoolIcon /> : <WorkHistoryOutlinedIcon />} // Icon for education or work experience
          >
            <h3 className="vertical-timeline-element-title">{item.institution || item.outcome}</h3>
            <p>{item.outcome}</p> {/* Display certification*/}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
