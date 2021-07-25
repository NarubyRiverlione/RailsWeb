import { RailSvgType, SectionColor } from './RailHelpers'
import { CstRails } from '../../Cst'

const { Size } = CstRails
const Vertical = ({
  X, Y, Status,
}: RailSvgType) => (
  <g data-name="Vertical Rail" transform={`translate(${X},${Y}) `}>
    <line x1={X + Size / 2} y1={Y} x2={X + Size / 2} y2={Y + Size} stroke={SectionColor(Status)} strokeWidth="2" />
  </g>
)

export default Vertical
