import React from 'react'
import './nav.css'
import {FaHome} from  'react-icons/fa'
import {ImUser} from 'react-icons/im'
import {MdWork} from 'react-icons/md'
import {RiServiceFill} from 'react-icons/ri'
import {AiFillContacts} from 'react-icons/ai'
import {useState} from 'react'
export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><ImUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><MdWork/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><RiServiceFill/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><AiFillContacts/></a>
    </nav>
  )
}
