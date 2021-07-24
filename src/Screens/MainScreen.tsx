import Tracks from 'railsmodel'
import { Fragment, useEffect, useState } from 'react'

import GridLines from 'react-gridlines'
import TackSvg from '../Components/Track/TrackSvg'
// import testTrack from '../testTrack.json'

type MainScreenTypes = {
  TraceFile: Blob,
}

const MainScreen = ({ TraceFile }: MainScreenTypes) => {
  const [track, setTrack] = useState(new Tracks())
  useEffect(() => {
    TraceFile.text()
      .then((text) => {
        if (!text) return
        const loadedTrack = new Tracks()
        loadedTrack.ParseJson(text)
        setTrack(loadedTrack)
      })
      .catch((err) => { console.error(err.message) })
  }, [TraceFile])

  return (
    <Fragment>
      <GridLines cellWidth={20} strokeWidth={1} lineColor="gray" dashArray="5,5">
        {track.Name !== '' && <TackSvg TrackObj={track} />}
      </GridLines>
    </Fragment>
  )
}

export default MainScreen
