import React, { useState } from 'react'
const initialBoard =[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
export default function GameBoard({onSelectSquare  ,turns }) {

let gameBoard = initialBoard

for(const turn of turns){
  const {square , player} = turn
  const {row , col} = square
  gameBoard[row][col] = player
}

// const [gameBoard , setGameBoard] = useState(initialBoard)

// function handleSelect(rowIndex,colIndex){
//     setGameBoard(prevGameBoard => {
//         const updatedGameBoard = [...prevGameBoard.map(ineerArray => [...ineerArray])]
//         updatedGameBoard[rowIndex][colIndex] =activePlayerSybmol

//         return updatedGameBoard
//     }
//     )

//     onSelectSquare()
// }
  return (
    <ol id='game-board'>
      {gameBoard.map((row,rowIndex) =>(
        <li key={rowIndex}>
            <ol>
            {row.map((col,colIndex) =>
            <ol key={colIndex}><button onClick={() => onSelectSquare(rowIndex,colIndex)}>{col}</button></ol>
            )}
            </ol>
        </li>
      ))}

    </ol>
  )
}
