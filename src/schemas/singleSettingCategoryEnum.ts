import z, { enum as zEnum } from 'zod'

const singleSettingCategoryEnum = zEnum(['GENERAL', 'PILOT', 'ROUTINE_LIST'])
type SingleSettingCategoryEnum = z.infer<typeof singleSettingCategoryEnum>

export { singleSettingCategoryEnum }
export type { SingleSettingCategoryEnum }
