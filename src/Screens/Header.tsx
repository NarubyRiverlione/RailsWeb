import Tracks from 'railsmodel'
import useRailContext from '../RailContext'

const Header = () => {
  const { setRailTrack, setErrorMsg, MousePosition } = useRailContext()

  const LoadTrackFromFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { target: { files } } = event
      if (files?.length !== 1) return
      const TraceFile = files[0]

      const text = await TraceFile.text()
      if (!text) return

      const loadedTrack = new Tracks()
      loadedTrack.ParseJson(text)
      setRailTrack(loadedTrack)
    } catch (err) {
      console.error(err.message)
      setErrorMsg(err.message)
    }
  }

  return (
    <header>
      <h1>Rails</h1>
      <div>
        Load trace file
        <input type="file" name="file" onChange={LoadTrackFromFile} />
      </div>
      <div>
        {`Mouse position X:${MousePosition.X} Y:${MousePosition.Y}`}
      </div>

    </header>
  )
}
export default Header
