import Tracks from 'railsmodel'
import React, { Fragment, useEffect, useState } from 'react'

import GridLines from 'react-gridlines'
import TackSvg from '../Components/Track/TrackSvg'
// import testTrack from '../testTrack.json'

type MainScreenTypes = {
  TraceFile: Blob
  UpdateMouse: (X: number, Y: number) => void
}

const MainScreen = ({ TraceFile, UpdateMouse }: MainScreenTypes) => {
  const [track, setTrack] = useState(new Tracks())
  // load & paste Trace file
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

  // send mouse coordinates
  const mouseCoordinates = (event: React.MouseEvent<SVGGElement, MouseEvent>) => {
    event.stopPropagation()
    UpdateMouse(event.clientX - 10, event.clientY - 120)
  }
  return (
    <Fragment>
      <GridLines cellWidth={20} strokeWidth={1} lineColor="gray" dashArray="5,5">
        <svg height="80vh" width="100vw" stroke="white" onMouseDown={(e) => mouseCoordinates(e)}>
          {track.Name !== '' && <TackSvg TrackObj={track} />}
        </svg>
      </GridLines>
    </Fragment>
  )
}

export default MainScreen
