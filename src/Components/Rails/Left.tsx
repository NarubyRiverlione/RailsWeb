import { RailSvgType, SectionColor } from './RailHelpers'
import { CstRails } from '../../Cst'

const { Size } = CstRails
const Left = ({
  X, Y, Scale = 1, Status,
}: RailSvgType) => (
  <g data-name="Left Rail" transform={`translate(${X},${Y}) scale(${1 / Scale})`}>
    <line x1={X} y1={Y} x2={X + Size} y2={Y + Size} stroke={SectionColor(Status)} strokeWidth="2" />
  </g>
)

export default Left
