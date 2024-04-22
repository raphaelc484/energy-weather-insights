import { Entity } from '@/core/entities/entities'

interface DessemProps {
  num_load_daily: number
  dat_initi: Date
  dat_final: Date
  dat_running: Date
  num_ssis: number
  val_load_daily: number
}

export class Dessem extends Entity<DessemProps> {
  get num_load_daily() {
    return this.props.num_load_daily
  }

  get dat_initi() {
    return this.props.dat_initi
  }

  get dat_final() {
    return this.props.dat_final
  }

  get dat_running() {
    return this.props.dat_running
  }

  get num_ssis() {
    return this.props.num_ssis
  }

  get val_load_daily() {
    return this.props.val_load_daily
  }

  static create(props: DessemProps) {
    return new Dessem({ ...props })
  }
}
