import Direction from 'railsmodel/lib/Model/Direction'

import Horizontal from './Horizontal'
import Vertical from './Vertical'
import Left from './Left'
import Right from './Right'
import RightUp from './RightUp'
import RightDown from './RightDown'
import LeftDown from './LeftDown'
import LeftUp from './LeftUp'
import DownLeft from './DownLeft'
import DownRight from './DownRight'
import UpLeft from './UpLeft'
import UpRight from './UpRight'
import { RailSvgType } from './RailHelpers'

const RailSvg = ({
  X, Y, Scale = 1, Status, RailDirection,
}: RailSvgType) => {
  //  if (!RailDirection) throw new Error('Need direction of rail')
  switch (RailDirection) {
    case Direction.Vertical: return <Vertical X={X} Y={Y} Status={Status} />
    case Direction.Horizontal: return <Horizontal X={X} Y={Y} Status={Status} />
    case Direction.Left: return <Left X={X} Y={Y} Status={Status} />
    case Direction.Right: return <Right X={X} Y={Y} Status={Status} />
    case Direction.UpLeft: return <UpLeft X={X} Y={Y} Status={Status} />
    case Direction.UpRight: return <UpRight X={X} Y={Y} Status={Status} />
    case Direction.DownLeft: return <DownLeft X={X} Y={Y} Status={Status} />
    case Direction.DownRight: return <DownRight X={X} Y={Y} Status={Status} />
    case Direction.LeftDown: return <LeftDown X={X} Y={Y} Status={Status} />
    case Direction.LeftUp: return <LeftUp X={X} Y={Y} Status={Status} />
    case Direction.RightDown: return <RightDown X={X} Y={Y} Status={Status} />
    case Direction.RightUp: return <RightUp X={X} Y={Y} Status={Status} />
    default: throw new Error('Need direction of rail')
  }
}

export default RailSvg
