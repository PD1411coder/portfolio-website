import React from 'react'
import {Header} from './components/header/Header'
import {Nav} from './components/nav/Nav'
import {About} from './components/about/About'
import {Experience} from './components/experience/Experience'
import {Services} from './components/services/Services'
import {Testimonials} from './components/testimonials/Testimonials'
import {Footer} from './components/footer/Footer'
import {Contact} from './components/contact/Contact'
import {Portfolio} from './components/portfolio/Portfolio'
// import  ScrollBarPage  from "./components/scrollbar/ScrollBarPage";


const App = () => {
  return (
    <>
      {/* <ScrollBarPage> </ScrollBarPage> */}
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      {/* <Testimonials/>
    <Services/> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App