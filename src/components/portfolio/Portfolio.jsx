import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/todo.jpg'
import IMG2 from "../../assets/food.jpg";
import IMG3 from "../../assets/portfolio.jpg";
import IMG4 from "../../assets/insta.jpg";


export const Portfolio = () => {

  const projects = [
    {
      id: 1,
      image: IMG1,
      title: "Todo List",
      github:
        "https://github.com/PD1411coder/HTML-CSS/tree/assignment-6/src/Assignment-6",
      demo: "https://github.com",
    },
    {
      id: 2,
      image: IMG2,
      title: "Food Delivery App",
      github: "https://github.com/PD1411coder/portfolio-website/tree/master",
      demo: "https://github.com",
    },
    {
      id: 3,
      image: IMG3,
      title: "Portfolio with React",
      github: "https://github.com/PD1411coder/portfolio-website/tree/master",
      demo: "#",
    },
    {
      id: 4,
      image: IMG4,
      title: "Instaclone with React",
      github:
        "https://github.com/PD1411coder/React-Assignments/tree/main/Assignment-4",
      demo: "https://github.com",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          projects.map(({ id, image, title, github, demo })=> {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })
        }
        
      </div>
    </section>
  );
}
