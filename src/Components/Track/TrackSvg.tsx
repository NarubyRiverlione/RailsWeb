import { Track } from 'railsmodel'
import { Rail } from 'railsmodel/lib/Model/Rails'
import { SectionStatus } from 'railsmodel/lib/Model/Sections'
import { Fragment } from 'react'
import RailSvg from '../Rails/RailSvg'

type TackSvgTypes = {
  TrackObj: Track
}

const TackSvg = ({ TrackObj }: TackSvgTypes) => {
  const { sections } = TrackObj
  const allRails: Rail[] = []

  // get all rails for all sections in this trace
  sections.forEach((section) => {
    for (let railNr = 0; railNr < section.CountRails; railNr += 1) {
      allRails.push(section.GetRail(railNr))
    }
  })

  return (
    <Fragment>
      { // FIXME: section status not available in array of all rails in track
        // eslint-disable-next-line react/no-array-index-key
        allRails.map((rail, id) => <RailSvg key={id} X={rail.X} Y={rail.Y} RailDirection={rail.Direction} Status={SectionStatus.Unknown} />)
      }
    </Fragment>

  )
}

export default TackSvg
