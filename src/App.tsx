import './App.css'
import { useState } from 'react'
import MainScreen from './Screens/MainScreen'
import Header from './Screens/Header'

const App = () => {
  const [traceFilename, setTraceFilename] = useState(new Blob())
  const LoadTrackFile = (file: Blob) => {
    setTraceFilename(file)
  }
  return (
    <div className="container">
      <Header cbTraceFilename={LoadTrackFile} />

      <div className="mainScreen">
        <MainScreen TraceFile={traceFilename} />
      </div>

      <footer>
        <p>By Naruby</p>
      </footer>
    </div>
  )
}

export default App
