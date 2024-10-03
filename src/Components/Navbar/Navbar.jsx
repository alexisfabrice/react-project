import { useEffect, useState } from 'react'
import React from 'react'
import  './Navbar.css'
import icon from '../../assets/menu.png'
import { Link } from 'react-scroll';

function Navbar() {


const [str,setstry]=useState(false);
useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY >30 ?setstry(true) :setstry(false);
  })
})







  const [sticky,setsticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll' ,()=>{
      window.scrollY>30 ?setsticky(true) :setsticky(false);
    })
  })


const [mobilemenu,setmobilemenu]=useState(false);
const tagllemenu =()=>{
  mobilemenu? setmobilemenu(false) : setmobilemenu(true)
}


  return (
   <nav className={`contaier ${sticky? 'dark-nav' : ''}`}>
    <div className='logo'><span style={{color:'whitesmoke'}}> VISIT</span><span className={` ${str? 'dark' : ''}`}>Rwanda</span></div>
    <ul className={mobilemenu?'':'hidemenu'}>
      <li>
      <Link to='hero' smooth={true} offset={0} duration={500} >home</Link>
        </li>
        <li> <Link to='program' smooth={true} offset={0} duration={1000} >place</Link>
        </li>
       <li>
       <Link to='about' smooth={true} offset={0} duration={500} >about us</Link>
       </li>
       <li>
       <Link to='cumpus' smooth={true} offset={0} duration={500}>campus</Link>
       </li>
       <li>
       <Link to='Testimonials' smooth={true} offset={0} duration={500} >testimonials</Link>
       </li>
      <li>
      <Link to='contact-col' smooth={true} offset={0} duration={500} className='btn'>Contact us</Link>
      </li>
       
    
    </ul>
    <img src={icon} alt=""className='icon' onClick={tagllemenu} />
   </nav>
  )
}

export default Navbar
