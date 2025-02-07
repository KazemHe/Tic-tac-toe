
import Header from "./cmps/Header"
import Player from "./cmps/Player"

function App() {
  return (
    <main>
      <Header />
<div id="game-container">
<ol id="players">

<Player name="Ronaldo" symbol="X"/>
<Player name="Messi" symbol="O"/>
</ol>
game board
</div>
log
    </main>
  )
}

export default App
