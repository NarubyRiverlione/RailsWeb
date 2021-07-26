import Tracks, { Track } from 'railsmodel'
import {
  createContext, Dispatch, SetStateAction, useContext, useState,
} from 'react'

type Coordinate = {
  X: number, Y: number
}
type RailContextType = {
  ErrorMsg: string,
  setErrorMsg: Dispatch<SetStateAction<string>>,

  BuildMode: boolean,
  setBuildMode: Dispatch<SetStateAction<boolean>>,

  MousePosition: Coordinate,
  setMousePosition: Dispatch<SetStateAction<Coordinate>>,

  RailTrack: Track,
  setRailTrack: Dispatch<SetStateAction<Tracks>>,
}

const RailContext = createContext<RailContextType>({
  ErrorMsg: '',
  setErrorMsg: () => { },
  BuildMode: false,
  setBuildMode: () => { },
  MousePosition: { X: -1, Y: -1 },
  setMousePosition: () => { },
  RailTrack: new Tracks(),
  setRailTrack: () => { },
})

export const RailProvider = ({ children }: { children: JSX.Element[] }) => {
  const [ErrorMsg, setErrorMsg] = useState('')
  const [BuildMode, setBuildMode] = useState(true)
  const [MousePosition, setMousePosition] = useState({ X: -1, Y: -1 })
  const [RailTrack, setRailTrack] = useState(new Tracks())

  const startRailContext: RailContextType = {
    ErrorMsg,
    setErrorMsg,

    BuildMode,
    setBuildMode,

    MousePosition,
    setMousePosition,

    RailTrack,
    setRailTrack,
  }
  return (
    <RailContext.Provider value={startRailContext}>
      {children}
    </RailContext.Provider>
  )
}

const useRailContext = () => useContext(RailContext)
export default useRailContext
