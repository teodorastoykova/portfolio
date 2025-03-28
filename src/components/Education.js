import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Container } from "react-bootstrap";

function Education() {
  return (
    <section className="education" id="education">
      <h1 className="heading">Education & Cerficiations</h1>
      <div className="timeline">
        <ul>
          <li>
            <h3 className="title">Web Development Bootcamp</h3>
            <p>Udemy Academy</p>
            <span className="circle"></span>
            <span className="date">March 2024</span>
          </li>
          <li>
            <h3 className="title">Alpha Python Track</h3>
            <p>Telerik Academy</p>
            <span className="circle"></span>
            <span className="date">June 2023</span>
          </li>
          <li>
            <h3 className="title">Bachelor of Liberal Arts and Sciencies</h3>
            <p>Maastricht University</p>
            <span className="circle"></span>
            <span className="date">May 2020</span>
          </li>
          <li>
            <h3 className="title">High School Diploma</h3>
            <p>American College of Sofia</p>
            <span className="circle"></span>
            <span className="date">June 2017</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Education;
