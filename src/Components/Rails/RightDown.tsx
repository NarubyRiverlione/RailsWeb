import { RailSvgType, SectionColor } from './RailHelpers'
import { CstRails } from '../../Cst'

const { Size } = CstRails
const RightDown = ({
  X, Y, Scale = 1, Status,
}: RailSvgType) => (
  <g data-name="RightDown Rail" transform={`translate(${X},${Y}) scale(${1 / Scale})`}>
    <line x1={X + Size} y1={Y + Size / 2} x2={X + Size / 2} y2={Y + Size / 2} stroke={SectionColor(Status)} strokeWidth="2" />
    <line x1={X + Size / 2} y1={Y + Size / 2} x2={X} y2={Y + Size} stroke={SectionColor(Status)} strokeWidth="2" />
  </g>
)

export default RightDown
