import { RailSvgType, SectionColor } from './RailHelpers'
import { CstRails } from '../../Cst'

const { Size } = CstRails
const Horizontal = ({
  X, Y, Status,
}: RailSvgType) => (
  <g data-name="Horizontal Rail" transform={`translate(${X},${Y}) `}>
    <line x1={X} y1={Y + Size / 2} x2={X + Size} y2={Y + Size / 2} stroke={SectionColor(Status)} strokeWidth="2" />
  </g>
)

export default Horizontal
