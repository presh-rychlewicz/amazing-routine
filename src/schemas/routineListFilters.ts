import { singleRoutineStatusEnum } from './singleRoutineStatusEnum'
import { TypeOf, array, object } from 'zod'

const routineListFiltersSchema = object({
  status: array(singleRoutineStatusEnum),
})
type RoutineListFilters = TypeOf<typeof routineListFiltersSchema>

export { routineListFiltersSchema }
export type { RoutineListFilters }
