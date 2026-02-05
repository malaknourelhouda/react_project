 //on ecrit rfc(react function component)ou rfce(react function component export) pour avoir cette structure et pour travailler avec des fct flécher rafc rafce


//par exemple ici rafce

import React from 'react'

const Home = () => {
  return (
    
// c bien d'uyuliser ca pour regrouper tt dans une seule partie <React.Fragment>
<>
   <h1> les frmawokrs frontend web</h1>
   <ul> 
    <li>   react js</li>
      <li>   angular js</li>
        <li>   vue js</li>
   </ul>
   </>
   //</React.Fragment>
  )
}

export default Home
