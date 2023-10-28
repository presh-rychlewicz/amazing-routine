/* eslint-disable @typescript-eslint/no-magic-numbers */
import {
  ContextsState,
  contextsStateSchema,
  singleContextStatusEnum,
} from 'schemas'

const migrateContexts = (rawContexts: any): ContextsState => {
  let newContexts: ContextsState = rawContexts

  switch (rawContexts.version) {
    case undefined:
      newContexts = {
        ...rawContexts,
        version: 1,
      }
      break

    case 1:
      newContexts = {
        ...rawContexts,
        value: rawContexts.value.map((c: any) => ({
          ...c,
          status: singleContextStatusEnum.enum.ACTIVE,
        })),
        version: 2,
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
