import { Track } from 'railsmodel'
import RailSvg from '../Rails/RailSvg'

type TackSvgTypes = {
  TrackObj: Track
}

const TackSvg = ({ TrackObj }: TackSvgTypes) => {
  const { Sections } = TrackObj

  const { Rails, Status } = Sections[0]

  return (
    <svg height="80vh" width="100vw" stroke="white">
      {// eslint-disable-next-line react/no-array-index-key
        Rails.map((rail, id) => <RailSvg key={id} X={rail.X} Y={rail.Y} RailDirection={rail.Direction} Status={Status} />)
      }
    </svg>
  )
}

export default TackSvg
