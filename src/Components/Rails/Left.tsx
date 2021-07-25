import { RailSvgType, SectionColor } from './RailHelpers'
import { CstRails } from '../../Cst'

const { Size } = CstRails
const Left = ({
  X, Y, Status,
}: RailSvgType) => (
  <g data-name="Left Rail" transform={`translate(${X},${Y}) `}>
    <line x1={X} y1={Y} x2={X + Size} y2={Y + Size} stroke={SectionColor(Status)} strokeWidth="2" />
  </g>
)

export default Left
