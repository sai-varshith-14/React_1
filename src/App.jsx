import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const App = () =>{
  const [count, setCount] = useState(0);
    useEffect(() => {
      document.title = `You have clicked ${count} times`
    }, [count])
  return (
    <>
    <div >The count is {count}</div>

    <button onClick={() => {setCount(count+1)}}>Update count</button>
    </>
);
}

export default App
