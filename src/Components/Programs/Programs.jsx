import React from 'react'
import './Programs.css'
import ab from '../../assets/city2.jpg'
import fab from '../../assets/girinka.jpg'
import cool from '../../assets/history.jpg'

function Programs() {
  return (
    <div className='programs'>
      
        <div className='program'>
        <img src={ab} alt="" />
        <div className="cupture">
          the legendaly
        </div>
        </div>
        <div className='program'>
        <img src={fab} alt="" />
        <div className="cupture">
          the legendaly
        </div>
        </div>
        <div className='program'>
        <img src={cool} alt="" />
        <div className="cupture">
          the legendaly
        </div>
        </div>

      
    </div>
  )
}

export default Programs
