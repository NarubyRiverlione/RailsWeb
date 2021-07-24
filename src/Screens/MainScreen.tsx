import Direction from 'railsmodel/lib/Model/Direction'
import { SectionStatus } from 'railsmodel/lib/Model/Sections'

import GridLines from 'react-gridlines'
import RailSvg from '../Components/Rails/RailSvg'

const MainScreen = () => {
  const test = 125
  return (
    <div>
      <GridLines cellWidth={20} strokeWidth={1} lineColor="gray" dashArray="5,5">

        <svg height="80vh" width="100vw" stroke="white">

          {/* <rect width="100%" height="100%" strokeWidth="1" stroke="red" /> */}
          <RailSvg X={100} Y={100} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.Horizontal} />
          <RailSvg X={110} Y={100} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.LeftUp} />
          <RailSvg X={120} Y={90} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.Right} />
          <RailSvg X={130} Y={80} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.RightDown} />
          <RailSvg X={140} Y={80} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.Horizontal} />
          <RailSvg X={150} Y={80} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.LeftDown} />
          <RailSvg X={160} Y={90} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.Left} />
          <RailSvg X={170} Y={100} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.DownLeft} />
          <RailSvg X={170} Y={110} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.Vertical} />
          <RailSvg X={170} Y={120} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.Vertical} />
          <RailSvg X={170} Y={130} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.UpLeft} />
          <RailSvg X={160} Y={140} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.Right} />
          <RailSvg X={150} Y={150} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.LeftUp} />
          <RailSvg X={140} Y={150} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.Horizontal} />
          <RailSvg X={130} Y={150} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.RightUp} />
          <RailSvg X={120} Y={140} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.Left} />
          <RailSvg X={110} Y={130} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.LeftDown} />
          <RailSvg X={100} Y={130} Scale={1} Status={SectionStatus.Unknown} RailDirection={Direction.Horizontal} />
        </svg>
      </GridLines>
    </div>
  )
}

export default MainScreen
