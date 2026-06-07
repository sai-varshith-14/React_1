import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const Card = ( {name} ) => {
  return (<div>
    <h2>{name}</h2>
  </div>)
}

const App = () =>{
  return (
    <>
    <h2>Functional Arrow Component</h2>
    <Card name="Avengers" />
    <Card name="Para" />
    <Card name="Hi" />
    </>
  
);
}

export default App
