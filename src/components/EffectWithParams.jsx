import React, { useState, useEffect } from 'react'

const EffectWithParams = () => {

  const [count, setcount] = useState(0)

  useEffect(() => {
    document.title = `Le nombre de clicks est ${count}`  // modifier le texte de la fenêtre
  }, [count])

  return (
    <div>
      <p>
        <button onClick={() => {
          setcount(count + 1)
        }}>
          Cliquez ici
        </button>

        <button onClick={() => {
          setcount(count - 1)
        }}>
          Ne cliquez pas
        </button>
      </p>
    </div>
  )
}

export default EffectWithParams
