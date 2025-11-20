import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorBends from './components/ColorBends/ColorBends.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='colorbends-container'> 
      <ColorBends
        colors={["#ff0000ff", "#15ff00ff", "#2f00ffff"]}
        rotation={-167}
        speed={0.2}
        scale={1}
        frequency={1}
        warpStrength={0.93
        }
        mouseInfluence={0.2}
        autoRotate = {1}
        parallax={0.5}
        noise={0.1}
        transparent
      />
    </div>
  )
}

export default App
