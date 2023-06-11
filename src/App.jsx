import React, { useState } from 'react'
import './App.css';

const App = () => {

  const [number, setNumber] = useState(0)

  const increament = () => {
    setNumber ( number + 1 )
  }

  const decreament = () => {
    setNumber ( number - 1 )
  }

  return (
    <div className='app'>
      <button onClick={increament}>+</button>
      <p>{number}</p>
      <button onClick={decreament}>-</button>
    </div>
  )
}

export default App
