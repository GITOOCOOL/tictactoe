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

  const win2DArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ]

  let xClickedCells = [];  // 1, 9, 7,3,2
  let oClickedCells = [];


  const handleClick = (e) => {
    e.preventDefault(); 

    let win = false;

    let turnDiv = document.getElementById("turn");
    turnDiv.textContent = "turn: " + turn ;

    // X:1  key: value
    const clickedCell = document.getElementById(e.target.id);

    if(clickedCell.classList.contains('X') || clickedCell.classList.contains('O')) {
      return;
    }
    else {
      console.log("type of : " + typeof(e.target.id));
      turn === "X" ? xClickedCells.push(e.target.id) : oClickedCells.push(e.target.id);

      // check winstate array every time

      // xClickedCells check with win2DArray everytime
      //compare garda sequence matter garnu vayena

      console.log('----fjklsld------');
      win2DArray.map((win1DArray) => {
        win = false;
        win1DArray.map((value) => {
          // console.log('----------')
          // console.log(value);
          // console.log("type of value : " + typeof(value.toString()));
          // console.log(xClickedCells.includes(value.toString()));
          if(xClickedCells.includes(value.toString())){
            console.log('I am here');
            win = true;
          }
        })
        if(win) {
          alert("Win");
        }
      })

      console.log('win ' + win)

      

      // oClickedCells check with winstate array everytime
    }

    console.log("xClickedCells : " + xClickedCells);
    console.log("oClickedCells : " + oClickedCells);
    clickedCell.classList.add(turn);
    turn === "X" ? turn="O" : turn="X";
    
  };

  return (
    <>
      <h2>TicTacToe</h2>
      <div id="turn"></div>
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
    </>
  )
}

export default Grid