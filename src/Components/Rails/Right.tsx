import { RailSvgType, SectionColor } from './RailHelpers'
import { CstRails } from '../../Cst'

const { Size } = CstRails
const Right = ({
  X, Y, Status,
}: RailSvgType) => (
  <g data-name="Right Rail" transform={`translate(${X},${Y}) `}>
    <line x1={X + Size} y1={Y} x2={X} y2={Y + Size} stroke={SectionColor(Status)} strokeWidth="2" />
  </g>
)

export default Right
