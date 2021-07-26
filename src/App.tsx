import './App.css'
import MainScreen from './Screens/MainScreen'
import Header from './Screens/Header'
import { RailProvider } from './RailContext'

const App = () => (
  <div className="container">
    <RailProvider>

      <Header />

      <div className="mainScreen">
        <MainScreen />
      </div>

      <footer>
        <p>By Naruby</p>
      </footer>
    </RailProvider>
  </div>
)

export default App
