import React from 'react'
import Resume from '../../assets/Prathamesh_Desai-Resume.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
      <a href={ Resume } download className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's talk</a>

    </div>
  )
}
