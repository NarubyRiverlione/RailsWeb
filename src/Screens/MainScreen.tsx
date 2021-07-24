import Tracks from 'railsmodel'

import GridLines from 'react-gridlines'
import TackSvg from '../Components/Track/TrackSvg'
import testTrack from '../testTrack.json'

const MainScreen = () => {
  const trackObj = new Tracks()
  trackObj.ParseJson(JSON.stringify(testTrack))

  return (
    <div>
      <GridLines cellWidth={20} strokeWidth={1} lineColor="gray" dashArray="5,5">

        <svg height="80vh" width="100vw" stroke="white">
          <TackSvg TrackObj={trackObj} />
        </svg>
      </GridLines>
    </div>
  )
}

export default MainScreen
