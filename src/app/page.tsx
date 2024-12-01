

import React from 'react'
import Header from './components/Header'

import Hero from './components/Hero'
import Services from './components/Services'
import Achievement from './components/Achievement'
import Courses from './components/Courses'
import AboutUs from './components/AboutUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Trusted from './components/trusted'





function Home ()  {
 
  return (
    <div>
      <Header/>
       <Navbar/>
       <Hero/>
       <Trusted/>
       <Services/>
      <Achievement/>
      <Courses/>
      <AboutUs/>
      <Testimonials/>
      <Footer/>
      
    </div>
  )
}

export default Home
