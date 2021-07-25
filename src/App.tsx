import './App.css'
import { useState } from 'react'
import MainScreen from './Screens/MainScreen'
import Header from './Screens/Header'

const App = () => {
  const [traceFilename, setTraceFilename] = useState(new Blob())
  const [Mouse, setMouse] = useState<{ X: number, Y: number }>({ X: 0, Y: 0 })

  const LoadTrackFile = (file: Blob) => {
    setTraceFilename(file)
  }
  const UpdateMouse = (X: number, Y: number) => {
    console.log(`${X}/${Y}`)
    const railX = Math.floor(X / 20)
    const railY = Math.floor(Y / 20)
    setMouse({ X: railX, Y: railY })
  }

  return (
    <div className="container">
      <Header cbTraceFilename={LoadTrackFile} MouseX={Mouse.X} MouseY={Mouse.Y} />

      <div className="mainScreen">
        <MainScreen TraceFile={traceFilename} UpdateMouse={UpdateMouse} />
      </div>

      <footer>
        <p>By Naruby</p>
      </footer>
    </div>
  )
}

export default App
