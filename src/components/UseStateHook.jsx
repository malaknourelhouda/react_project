


import React, { useState } from 'react'

function UseStateHook() {

    const [Count, setCount] = useState(0);

    const incrementation = () => {
        setCount(Count + 1);
    }
     const decrementation = () => {
        setCount(Count - 1);
    }
//use effect quand on fait appel a une api ou pour faire du fetch
  return (
    <div>

      <h1>Mon compteur initial est {Count} </h1>

      <button onClick={incrementation}>Incrémenter</button>

      <button onClick={decrementation}>Décrémenter</button>

    </div>
  )
}

export default UseStateHook