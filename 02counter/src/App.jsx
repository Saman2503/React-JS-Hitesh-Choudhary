import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0)
  
  // let counter = 25

  const addValue = () => {
    // counter = counter + 1
    // setCounter(counter)
    if (counter<20) {
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      setCounter(prevcounter => prevcounter+1)
      setCounter(prevcounter => prevcounter+1)
      setCounter(prevcounter => prevcounter+1)
      setCounter(prevcounter => prevcounter+1)
    }
    // console.log("clicked", counter);
  }
  const removeValue = () => {
    // counter = counter + 1
    // setCounter(counter)
    if (counter > 0) {
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter value: {counter}</h2>
      
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
