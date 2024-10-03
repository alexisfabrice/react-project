import React, { Component } from 'react'
import './Campus.css'
import dede from '../../assets/full.jpg'
import wade from '../../assets/kivu.jpg'
import fab from '../../assets/eir.jpg'
import cawa from '../../assets/tea.jpg'
import arrow from '../../assets/arrow1.png'

export class Campus extends Component {
  render() {
    return (
      <div className='cumpus'>
        <div className='gallery'>
        <img src={dede} alt="" />
        <img src={wade} alt="" />
        <img src={fab} alt="" />
        <img src={cawa} alt="" />
        </div>
        <button className='btn dark-btn'> see more here <img src={arrow} alt="" /></button> 
      </div>
    )
  }
}

export default Campus
