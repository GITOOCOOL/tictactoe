import React from 'react'
import { useState } from 'react'

const Grid = () => {
  
  let turn = "X";

  // win states

  // horizontal :
  // {1,2,3}
  // {4,5,6}
  // {7,8,9}

  // vertical :
  // {1,4,7}
  // {2,5,8}
  // {3,6,9}

  // diagonal :
  // {1,5,9}
  // {3,5,7}

  let xClickedCells = [];  // 1, 9, 7,3,2
  let oClickedCells = [];


  const handleClick = (e) => {
    e.preventDefault(); 

    // X:1  key: value
    const clickedCell = document.getElementById(e.target.id);

    console.log("turn : " + turn);
    turn === "X" ? xClickedCells.push(e.target.id) : oClickedCells.push(e.target.id);
    console.log("xClickedCells : " + xClickedCells);
    console.log("oClickedCells : " + oClickedCells);

    console.log(clickedCell.classList.contains('X'));
    if(clickedCell.classList.contains('X') || clickedCell.classList.contains('O')) return;
    clickedCell.classList.add(turn);
    turn === "X" ? turn="O" : turn="X";
    
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