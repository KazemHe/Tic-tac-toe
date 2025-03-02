
import { useState } from "react"
import GameBoard from "./cmps/GameBoard"
import Header from "./cmps/Header"
import Player from "./cmps/Player"
import Logs from "./cmps/Logs"

function App() {
  const  [gameTurns,setGameTurns] = useState([])
  const [activePlayer , setActivePlayer] = useState("X")


function handleSelectSquare(rowIndex,colIndex){
  console.log("hi")
  setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X') 
  setGameTurns((prevTurns) =>{
    let currentPlayer = 'X';

if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
  currentPlayer ='O';
}

const upsatedTurns = [
  {square : {row : rowIndex, col : colIndex } , player : currentPlayer} ,
  ...prevTurns
]

return upsatedTurns
  });
}



  return (
    <main>
      <Header />
<div id="game-container">
<ol id="players" className="highlight-player">

<Player name="Ronaldo" symbol="X" isActice={activePlayer === 'X'}/>
<Player name="Messi" symbol="O" isActice={activePlayer === 'O'}/>
</ol>
<GameBoard 
onSelectSquare={handleSelectSquare} 
// activePlayerSybmol={activePlayer}
turns={gameTurns}
/>
</div>
<Logs />
    </main>
  )
}

export default App
