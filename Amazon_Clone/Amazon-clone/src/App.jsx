import { useState } from 'react'

import './App.css'

import Routering from './Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routering/>
    </>
  )
}

export default App
