import { DessemRepositories } from '../repositories/dessem-repositories'
import { format, subDays } from 'date-fns'
import { IPDORepositories } from '../repositories/ipdo-repositories'

interface WeeklyLoadMonitoringDessemProps {
  id: string
  dayPrediction?: string
  carga: number
  bacia: number
  tipo: string
}

function formatDate(date: Date) {
  return format(new Date(date), 'yyyy-MM-dd')
}

export class FetchDessemUseCase {
  /* 
    dessem-repo
    ipdo-repo
  */
  constructor(
    private dessemRepositories: DessemRepositories,
    private ipdoRepositories: IPDORepositories,
  ) {}

  async execute(): Promise<WeeklyLoadMonitoringDessemProps> {
    const dateRunningFormated = formatDate(subDays(new Date(), 1))

    const dessemListWtihDateRunning =
      await this.dessemRepositories.findWithDateRunning(dateRunningFormated)

    const listOfFormattedDays = dessemListWtihDateRunning.map((item) =>
      formatDate(item.dat_initi),
    )

    const uniqueDatesDessem = Array.from(new Set(listOfFormattedDays))

    const ipdoListWithDateInit =
      await this.ipdoRepositories.findWithDateInit(uniqueDatesDessem)

    // const allFilterIPDO = ipdoListWithDateInit.filter(
    //   (item) =>
    //     ale(sistem.dat_ipdo) >=
    //     ale(subDays(new Date(), 7 - uniqueDateDessem.length)),
    // )
  }
}
