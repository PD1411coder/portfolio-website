import React, { useEffect, useState } from "react";
import "./about.css";
import ME from "../../assets/profile.png";
import { FaAward } from "react-icons/fa";
import { MdFolderShared } from "react-icons/md";
export const About = () => {

  const [ experience, setExperience ] = useState( 'Calculating experience...' );

  useEffect( () => {
    // Set the start date to December 21, 2021
    const startDate = new Date( '2021-12-21' );
    const currentDate = new Date();

    // Calculate the experience in years with one decimal point
    const experienceInYears = ( ( currentDate - startDate ) / ( 1000 * 60 * 60 * 24 * 365.25 ) ).toFixed( 1 );

    setExperience( `${ experienceInYears } years of experience` );
  }, [] );

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ ME } alt="Profile Pic" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>{ experience } in MEAN stack and MERN stack</small>
            </article>

            <article className="about_card">
              <MdFolderShared className="about_icon" />
              <h5>Projects</h5>
              <small>React, NodeJS, MongoDB, Golang, and FastAPI</small>
            </article>
          </div>

          <p>
            Results-driven software engineer with a strong foundation in data structures and algorithms, backed by over one and a half years of practical experience in software development. Adept at designing and implementing efficient, scalable solutions that optimise performance and solve complex problems. Collaborative team player with a track record of delivering high-quality projects on time
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
