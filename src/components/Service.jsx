// un petit exemple avec classe mais on doit tjrs travailler avec function
import React, { Component } from 'react'
//componenet ici c'est une classe mére predefini qui contient tt les fonctionnalités de react , pour voir son contenu on fait ctrl clique
export default class Service extends Component {
// malak essaye d ecomprendre render
  render() {
    return (
      <>
      <h1>les composants de type classe </h1>
      <p> se sont des composants qui heritent de la classe mére component qui est une class prédefini dans react</p>
      </>
    )
  }
}
