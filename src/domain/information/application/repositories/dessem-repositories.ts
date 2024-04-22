import { Dessem } from '../../enterprise/entities/dessem'

export interface DessemRepositories {
  findWithDateRunning(dateRunning: string): Promise<Dessem[]>
}
