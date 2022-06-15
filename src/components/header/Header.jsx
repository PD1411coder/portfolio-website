import React from 'react'
// import './header.css'
import './h.css'
import {CTA} from './CTA'
import ME from "../../assets/hudl.png";
import { HeaderSocials } from './HeaderSocials'
export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Prathamesh Desai</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        {/* <a href="#contact" className='scroll_down'>Scroll Down</a> */}
      </div>

    </header>
  )
}
