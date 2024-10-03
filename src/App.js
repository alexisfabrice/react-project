import React from 'react'

import Navbar from './Components/Navbar/Navbar'
import Hello from './Components/Hero/Hello'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Testimonials from './Components/Testimonials/Testimonials'




function App() {
  return (
    <div>
      <Navbar/>
      <Hello/>
      <div className='container'>
        <Title  subtitle="OUR GOOD PLACE" title="OUR OFFER"/>
      <Programs  />
      <div>
        <Title subtitle="ABOUT rwanda" title="whatever you want to know" />
      <About/>
      <Title subtitle="gallery" title="campus photo" />
      <Campus />
       <Title subtitle="Testimonials" title="the tourist say" />
       <Testimonials/>
       <Title subtitle="contact us" title="get in touch" />
       <Contact/>
       <Footer />
      </div>

      </div>
      
    </div>
  )
}

export default App
