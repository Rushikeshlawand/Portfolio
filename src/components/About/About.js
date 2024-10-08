import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"; // Add this for the document symbol

const About = () => {
  return (
    <section id="about-container">
      <div id="about">
        <h2>About Me</h2>
        <p>
        I'm Rushikesh Lawand, a software engineer from Pune, Maharashtra, with a B.Tech in Computer Science & Engineering (CGPA: 9.07) from MIT College of Railway Engineering & Research. I have experience in React.JS, Node.JS, and MySQL, and have built dynamic, scalable applications. As an intern at Sciqus Infotech, I developed user interfaces and optimized database operations. I’m skilled in Java, JavaScript, SQL, and have solved 120+ problems on LeetCode. I enjoy building efficient solutions and continuously enhancing my expertise in full-stack development.
        </p>
      </div>

      <div className="education">
        <h3>Education</h3>
        <div className="edu-item">
          <h4>B.Tech in Computer Science & Engineering</h4>
          <p>MIT College Of Railway Engineering & Research, Barshi</p>
          <p>University: Solapur University</p> {/* Added University name */}
          <p>CGPA: 9.07 | Year: 2020 - 2023</p>
          <a
            href="https://drive.google.com/file/d/13vLO6CztPULAvgxn_jatxgZPvuFsDaV4/view?usp=drive_link"
            className="document-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFileAlt} /> {/* Document symbol */}
          </a>
        </div>
        <div className="edu-item">
          <h4>Diploma in Computer Engineering</h4>
          <p>Institute Of Petrochemical Engineering, Lonere</p>
          <p>University: Dr.BATU University</p> {/* Added University name */}
          <p>CGPA: 7.92 | Year: 2016 - 2020</p>
          <a
            href="https://drive.google.com/file/d/1CWR9ZCqlqG43Df-6K_51W5RUmZg-KH3f/view?usp=drive_link"
            className="document-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFileAlt} /> {/* Document symbol */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
