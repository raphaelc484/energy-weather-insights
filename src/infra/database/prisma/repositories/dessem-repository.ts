import { DessemRepositories } from '@/domain/information/application/repositories/dessem-repositories'
import { Dessem } from '@/domain/information/enterprise/entities/dessem'
import { prisma } from '../prisma'

export class PrismaDessemRepository implements DessemRepositories {
  async findWithDateRunning(dateRunning: string): Promise<Dessem[]> {
    const result = await prisma.tbl_load_daily.findMany({
      where: {
        dat_running: dateRunning,
      },
    })

    return result
  }
}
