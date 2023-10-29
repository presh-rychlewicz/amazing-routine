/* eslint-disable @typescript-eslint/no-magic-numbers */
import {
  ContextsState,
  contextsStateSchema,
  singleContextStatusEnum,
} from 'schemas'
import { getNewVersion } from './utils'

const migrateContexts = (rawContexts: any): ContextsState => {
  let newContexts: ContextsState = rawContexts

  const commonProps = {
    version: getNewVersion(rawContexts.version),
  }

  switch (rawContexts.version) {
    case undefined:
      newContexts = {
        ...rawContexts,
        ...commonProps,
      }
      break

    case 1:
      newContexts = {
        ...rawContexts,
        ...commonProps,
        value: rawContexts.value.map((c: any) => ({
          ...c,
          status: singleContextStatusEnum.enum.ACTIVE,
        })),
      }
      break
  }

  const parsingStatus = contextsStateSchema.safeParse(newContexts)
  if (parsingStatus.success) {
    return parsingStatus.data
  } else {
    return migrateContexts(newContexts)
  }
}

export default migrateContexts
