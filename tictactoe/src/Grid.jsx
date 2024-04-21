import React from 'react'
import { useState } from 'react'

const Grid = () => {
  const [turn, setTurn] = useState('O');

  const [clickedBoxes,setClickedBoxes] = useState([]);

  const handleClick = (e) => {
    e.preventDefault(); 

    if(turn === 'O'){
        setTurn('X')
    }
    else if(turn === 'X') {
        setTurn('O')
    }
    // else {
    //     return;
    // }
  };

  console.log(turn);
  return (
    <div className='grid'>
        <div className="row">
            <div className={`cell ${turn}`} onClick={handleClick} ></div>
            <div className={`cell ${turn}`} onClick={handleClick} ></div>
            <div className={`cell ${turn}`} onClick={handleClick} ></div>
            
        </div>
        <div className="row">
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
        </div>
        <div className="row">
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
        </div>
    </div>
  )
}

export default Grid