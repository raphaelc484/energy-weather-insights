import { AggregateRoot } from '@/core/entities/aggregate-root'
import { Zones } from './zones'

interface IPDOLoadProps {
  num_ipdo: number
  dat_ipdo: Date
  num_ssis: number
  val_load_verif: number
  val_load_predi: number
  zone: Zones
}

export class IPDOLoad extends AggregateRoot<IPDOLoadProps> {
  get num_ipdo() {
    return this.props.num_ipdo
  }

  get dat_ipdo() {
    return this.props.dat_ipdo
  }

  get num_ssis() {
    return this.props.num_ssis
  }

  get val_load_verif() {
    return this.props.val_load_verif
  }

  get val_load_predi() {
    return this.props.val_load_predi
  }

  get zone() {
    return this.props.zone
  }
}
