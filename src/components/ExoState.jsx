


import React ,  { useState }from 'react'

function ExoState() {
    const [Color, setColor] = useState("green");

    const changeColor = () => {
        setColor(Color==="green" ? "red" : "green");
    }
  return (
    <div>
         
      <h1 style={{color:Color}}>changment de couleur avec useState</h1>
      <button onClick={changeColor}>changer de couleur</button>
       
    </div>
  )
}

export default ExoState;