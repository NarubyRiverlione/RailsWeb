import { RailSvgType, SectionColor } from './RailHelpers'
import { CstRails } from '../../Cst'

const { Size } = CstRails
const LeftUp = ({
  X, Y, Scale = 1, Status,
}: RailSvgType) => (
  <g data-name="LeftUp Rail" transform={`translate(${X},${Y}) scale(${1 / Scale})`}>
    <line x1={X} y1={Y + Size / 2} x2={X + Size / 2} y2={Y + Size / 2} stroke={SectionColor(Status)} strokeWidth="2" />
    <line x1={X + Size / 2} y1={Y + Size / 2} x2={X + Size} y2={Y} stroke={SectionColor(Status)} strokeWidth="2" />
  </g>
)

export default LeftUp
