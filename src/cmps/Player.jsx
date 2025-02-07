import React, { useState } from 'react'

export default function Player({name,symbol}) {
    const [isEditing , setIsEditing] = useState(false);
    const[playerName ,setPlayerName] = useState(name);
    let editButton =!isEditing ? "edit" : "save"
    function handleEditing(){
    setIsEditing(()=>!isEditing)
    }


  return (
    <li>
<span className='player' >
    {!isEditing ? <span className='player-name'>{name}</span> : 
    <input type="text" value={playerName}/>
    }
    
    <span className='player-symbol'>{symbol}</span>
</span>
<button onClick={()=>handleEditing()}>{editButton}</button>
    </li>
  )
}
