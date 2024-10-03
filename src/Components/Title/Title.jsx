import React from 'react'
import "./Title.css"
function Title({subtitle,title}) {
  return (
    <div className='title'>
      <h1>{subtitle}</h1>
      <h2>{title}</h2>
    </div>
  )
}

export default Title
