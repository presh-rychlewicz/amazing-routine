import { PayloadAction } from '@reduxjs/toolkit'
import { ContextsState, SingleContext, singleContextStatusEnum } from 'schemas'

type Key = 'id' | 'status'

const add = (
  state: ContextsState,
  { payload }: PayloadAction<Omit<SingleContext, Key>>
) => {
  const missing: Pick<SingleContext, Key> = {
    id: crypto.randomUUID(),
    status: singleContextStatusEnum.enum.ACTIVE,
  }
  const newContext: SingleContext = {
    ...payload,
    ...missing,
  }
  const newValue = [...state.value, newContext]
  state.value = newValue
}

export default add
