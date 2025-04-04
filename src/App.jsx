import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import './App.css'
import Weather from './Components/Weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Weather/>
    </>
  )
}

export default App
