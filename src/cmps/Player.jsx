import React, { useState } from 'react'

export default function Player({name,symbol , isActice}) {
    const [isEditing , setIsEditing] = useState(false);
    const[playerName ,setPlayerName] = useState(name);
    let editButton =!isEditing ? "edit" : "save"
    function handleEditing(){
    setIsEditing((editing)=>!isEditing)
    }

function handleChange(ev){
  setPlayerName(ev.target.value)
}
  return (
    <li className={isActice ? 'active' : undefined}>
<span className='player' >
    {!isEditing ? <span className='player-name'>{playerName}</span> : 
    <input type="text" required value={playerName} onChange={handleChange}/>
    }
    
    <span className='player-symbol'>{symbol}</span>
</span>
<button onClick={()=>handleEditing()}>{editButton}</button>
    </li>
  )
}
