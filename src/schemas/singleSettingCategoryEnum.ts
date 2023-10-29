import z, { enum as zEnum } from 'zod'

const singleSettingCategoryEnum = zEnum([
  'CONTEXT_LIST',
  'GENERAL',
  'PILOT',
  'ROUTINE_DETAILS',
  'ROUTINE_LIST',
  'TASK_LIST',
])
type SingleSettingCategoryEnum = z.infer<typeof singleSettingCategoryEnum>

export { singleSettingCategoryEnum }
export type { SingleSettingCategoryEnum }
