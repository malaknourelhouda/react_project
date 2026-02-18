import React, { useEffect, useState } from 'react'

// Fonction de nettoyage permet de nettoyer lors du démontage du composant 
// (par ex : lorsqu'on ferme la fenêtre concernée)
// Dès que l'effet ne s'exécute plus, la fonction de nettoyage s'exécute

const Effect_with_clean_up_function = () => {

  const [count, setcount] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setcount((count) => count + 1) 
      // il y'a bcp de blocs donc on fait une fonction flèche au lieu de count+1
    }, 1000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div>
      Compteur : {count}
    </div>
  )
}

export default Effect_with_clean_up_function
