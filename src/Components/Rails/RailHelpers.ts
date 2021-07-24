import Direction from 'railsmodel/lib/Model/Direction'
import { SectionStatus } from 'railsmodel/lib/Model/Sections'

export type RailSvgType = {
  X: number;
  Y: number;
  Status: SectionStatus;
  Scale?: number;
  RailDirection?: Direction;
}

export const SectionColor = (Status: SectionStatus): string => {
  switch (Status) {
    case SectionStatus.Green: return 'green'
    case SectionStatus.Orange: return 'orange'
    case SectionStatus.Red: return 'red'
    case SectionStatus.Unknown: return 'white'
    default: return 'white'
  }
}
