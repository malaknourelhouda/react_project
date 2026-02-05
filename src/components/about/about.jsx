import React from 'react'
import image from "./image.png"


//malak y'a une methode avant hwssi 3liha
//const About = ({props}) => {

  //const name = props.name;// destructuring c'est asseigner mm var a mm var qui a le mm nom donc je fais :
  
 // const age = props.age;
const About = ({name, age}) => {
  //const name = props.name;// destructuring c'est asseigner mm var a mm var qui a le mm nom donc je fais :
  
 // const age = props.age;
  return (
    <div className='about'>
      <h2>A propos de nous</h2>
  
      <p>Bienvenue {name} qui a l'age {age} ans sur notre site web</p>
      <img src={image} alt="about" />
    </div>
  )
}

export default About
