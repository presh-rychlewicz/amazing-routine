import { TypeOf, object } from 'zod'

const contextsListFiltersSchema = object({})
type ContextsListFilters = TypeOf<typeof contextsListFiltersSchema>

export { contextsListFiltersSchema }
export type { ContextsListFilters }
