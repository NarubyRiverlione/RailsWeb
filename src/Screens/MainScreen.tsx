import React, { Fragment } from 'react'

import GridLines from 'react-gridlines'
import TackSvg from '../Components/Track/TrackSvg'
import useRailContext from '../RailContext'

const MainScreen = () => {
  const { setMousePosition } = useRailContext()

  // send mouse coordinates
  const UpdateMouseCoordinates = (event: React.MouseEvent<SVGGElement, MouseEvent>) => {
    event.stopPropagation()
    const X = event.clientX // - 10
    const Y = event.clientY - 120
    console.log(`${X}/${Y}`)

    const railX = Math.floor(X / 20)
    const railY = Math.floor(Y / 20)
    setMousePosition({ X: railX, Y: railY })
  }
  return (
    <Fragment>
      <GridLines cellWidth={20} strokeWidth={1} lineColor="gray" dashArray="5,5">
        <svg height="80vh" width="100vw" stroke="white" onMouseDown={(e) => UpdateMouseCoordinates(e)}>
          <TackSvg />
        </svg>
      </GridLines>
    </Fragment>
  )
}

export default MainScreen
