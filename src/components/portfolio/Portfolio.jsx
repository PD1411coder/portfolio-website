import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/todo.jpg'
import IMG2 from "../../assets/food.jpg";
import IMG3 from "../../assets/portfolio.jpg";
import IMG4 from "../../assets/chat.jpg";
import IMG5 from "../../assets/fastapi.jpg";


export const Portfolio = () => {

  const projects = [
    {
      id: 0,
      image: IMG4,
      title: "Realtime Chatting App (Slack)",
      github: "https://github.com/PD1411coder/realtime-chat-app",
      demo: "https://connectingpeople.netlify.app/",
    },
    {
      id: 1,
      image: IMG1,
      title: "Contact Manager",
      github: "https://github.com/PD1411coder/contacts-manager",
      demo: "https://contact-manager-g1.pages.dev/",
    },
    {
      id: 2,
      image: IMG2,
      title: "Product Catalogue with Golang Backend",
      github: "https://github.com/PD1411coder/borderfree-backend",
      demo: "https://borderfree-frontend-c0c.pages.dev/login",
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
      image: IMG5,
      title: "Geo Distance calculator with FastAPI",
      github: "https://github.com/PD1411coder/eastvantage-assignment",
      demo: "https://github.com/PD1411coder/eastvantage-assignment",
    },

  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          projects.map( ( { id, image, title, github, demo } ) => {
            return (
              <article key={ id } className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={ image } alt={ title } />
                </div>
                <h3>{ title }</h3>
                <div className="portfolio_item-cta">
                  <a href={ github } className="btn" target="_blank">
                    Github
                  </a>
                  <a
                    href={ demo }
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          } )
        }

      </div>
    </section>
  );
}
