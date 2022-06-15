import React from "react";
import "./about.css";
import ME from "../../assets/profile.png";
import { FaAward } from "react-icons/fa";
import { MdFolderShared } from "react-icons/md";
export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Profile Pic" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>6+ months experience</small>
            </article>

            <article className="about_card">
              <MdFolderShared className="about_icon" />
              <h5>Projects</h5>
              <small>React, NodeJS and MongoDB</small>
            </article>
          </div>

          <p>
            Recent computer science graduate with a passion for developing scalable web applications and working across the full stack. I would jump at any opportunity to continue growing my skillset in the technical background. Besides the technical background, I also have some experience working in Business development field as a Client Relashinship Manager at "Agent On Tube".
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
