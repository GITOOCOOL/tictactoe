import React from 'react'
import { useState } from 'react'

const Grid = () => {
  

  const handleClick = (e) => {
    e.preventDefault(); 
    console.log((e.target.id))
    const clickedCell = document.getElementById(e.target.id)
    clickedCell.classList.add('X')
    
  };

  return (
    <div className='grid'>
        <div className="row">
            <div className = "cell" id="1" onClick={handleClick} ></div>
            <div className={`cell`} id="2" onClick={handleClick} ></div>
            <div className={`cell`} id="3" onClick={handleClick} ></div>
            
        </div>
        <div className="row">
            <div className = "cell" id="4" onClick={handleClick} ></div>
            <div className={`cell`} id="5" onClick={handleClick} ></div>
            <div className={`cell`} id="6" onClick={handleClick} ></div>
        </div>
        <div className="row">
            <div className = "cell" id="7" onClick={handleClick} ></div>
            <div className={`cell`} id="8" onClick={handleClick} ></div>
            <div className={`cell`} id="9" onClick={handleClick} ></div>
        </div>

    </div>
  )
}

export default Grid