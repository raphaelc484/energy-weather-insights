import { IPDOLoad } from '../../enterprise/entities/ipdo-load'

export interface IPDORepositories {
  findWithDateInit(uniqueDates: string[]): Promise<IPDOLoad[]>
  // findWithDateInit(): Promise<IPDOLoad[]>
}
