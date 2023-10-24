import { TypeOf, array, object } from 'zod'
import { singleContextStatusEnum } from './singleContextStatusEnum'

const contextsListFiltersSchema = object({
  status: array(singleContextStatusEnum),
})
type ContextsListFilters = TypeOf<typeof contextsListFiltersSchema>

export { contextsListFiltersSchema }
export type { ContextsListFilters }
