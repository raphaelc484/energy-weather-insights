import { AggregateRoot } from '@/core/entities/aggregate-root'

interface ZoneProps {
  num_ssis: number
  nom_ssis: string
  nom_ssis_comp: string
}

export class Zones extends AggregateRoot<ZoneProps> {
  get num_ssis() {
    return this.props.num_ssis
  }

  get nom_ssis() {
    return this.props.nom_ssis
  }

  get nom_ssis_comp() {
    return this.props.nom_ssis_comp
  }
}
