import React from 'react'
import Logo from "../../public/game-logo.png"

export default function Header() {
  return (
<header>
   <img src={Logo} alt="Logo"/>
      <h1>Tic-Tac-Toe</h1>
</header>
  )
}
