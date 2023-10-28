const REDUX_LOCAL_STORAGE_KEY = 'persistantState'
const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const MISSING_CONTEXT_VALUE = 'Missing context'

const CONTEXTS_SCHEMA_CURRENT_VERSION = 2
const ROUTINES_SCHEMA_CURRENT_VERSION = 5
const TASKS_SCHEMA_CURRENT_VERSION = 5
const SETTINGS_SCHEMA_CURRENT_VERSION = 8

export { default as paths } from './paths'
export * from './paths'

export {
  CONTEXTS_SCHEMA_CURRENT_VERSION,
  ROUTINES_SCHEMA_CURRENT_VERSION,
  SETTINGS_SCHEMA_CURRENT_VERSION,
  TASKS_SCHEMA_CURRENT_VERSION,
  DAYS,
  MISSING_CONTEXT_VALUE,
  REDUX_LOCAL_STORAGE_KEY,
}
