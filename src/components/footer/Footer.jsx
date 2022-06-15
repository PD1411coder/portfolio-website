import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Prathamesh
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/prathamesh.desai.752">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/prathamesh_desai_/?hl=en">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/Pratham24962604">
          <BsTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Prathamesh Desai. All rights reserved.</small>
      </div>
    </footer>
  );
}
