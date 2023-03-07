import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Hero} from './pages/hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>React Redux Example</h1>
      <div>
      <Hero/>
    </div>
    </div>
  )
}

export default App
