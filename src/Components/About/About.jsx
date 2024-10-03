import React from 'react'

import shin from "../../assets/shin.jpg";
import "./About.css";

function About() {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={shin} alt=""  className='about-img'/>
      </div>
      <div className="about-right">
      <h2>better country</h2>
        <h1>rwanda good shin</h1>
 
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
         mollitia unde aut, 
         dolor quo minus quibusdam, harum suscipit, modi saepe culpa? Molestias, 
        nihil et veniam aliquam   quibusdam ducimus architecto accusantium?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure rerum ullam 
         officia quam officiis beatae eum provident quos, maxime cumque vel temporibus explicabo? 
          Illo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro 
           nostrum alias cum itaque sed reprehenderit eaque cumque qui, distinctio modi nam earum recusandae
           blanditiis ullam, est, facilis totam esse.
         excepturi pariatur. Eveniet ipsam voluptate amet!
         </p>
      </div>
    </div>
  )
}

export default About
