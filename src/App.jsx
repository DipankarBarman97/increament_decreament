import React, { useState } from 'react'
import './App.css';

const App = () => {

  const [a, setA] = useState(0)

  const increament = () => {
    setA ( a + 1 )
  }

  const decreament = () => {
    setA ( a - 1 )
  }

  return (
    <div className='app'>
      <button onClick={increament}>+</button>
      <p>{a}</p>
      <button onClick={decreament}>-</button>
    </div>
  )
}

export default App
