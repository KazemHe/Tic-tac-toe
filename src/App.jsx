
import { useState } from "react"
import GameBoard from "./cmps/GameBoard"
import Header from "./cmps/Header"
import Player from "./cmps/Player"

function App() {
  const [activePlayer , setActivePlayer] = useState("X")
function handleSelectSquare(){
  setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X') 

}
  return (
    <main>
      <Header />
<div id="game-container">
<ol id="players" className="highlight-player">

<Player name="Ronaldo" symbol="X" isActice={activePlayer === 'X'}/>
<Player name="Messi" symbol="O" isActice={activePlayer === 'O'}/>
</ol>
<GameBoard onSelectSquare={handleSelectSquare} activePlayerSybmol={activePlayer}/>
</div>
log
    </main>
  )
}

export default App
