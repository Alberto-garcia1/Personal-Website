import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';

function Education() {
  const educationData = [
    {
      date: "January 2023 - May 2023",
      institution: "Pueblo Community College, Colorado",
      certification: "CompTIA A+ Certification",
    },
    {
      date: "January 2023 - May 2023",
      institution: "Nucamp Coding Bootcamp",
      certification: "Front-End Web Develpment with Google Cloud",
    },
  ];

  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--education ${
              index % 2 === 0 ? 'even' : 'odd'
            }`}
            date={item.date}
            iconStyle={{ background: '#3e497a', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">{item.institution}</h3>
            <p>{item.certification}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Education;
