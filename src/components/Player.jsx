import {useRef, useState} from 'react'

export default function Player() {
  
  const playerName = useRef();
  const [enterPlayerName ,setPlayerName] = useState('')

  function handleClick(){
    setPlayerName(playerName.current.value)
    playerName.current.value='';
  }
  return (
    <section id="player">

      <h2>Welcome {enterPlayerName ? enterPlayerName : 'unknown entity'}</h2>

      {/* <h2>Welcome {enterPlayerName ?? 'unknown entity'}</h2> */}
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
