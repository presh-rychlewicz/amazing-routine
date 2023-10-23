import { PayloadAction } from '@reduxjs/toolkit'
import dayjs from 'dayjs'
import { RoutinesState, SingleRoutine, singleRoutineStatusEnum } from 'schemas'
import { getDateStringFromUnix } from 'utils'

type Key = 'id' | 'status' | 'pastRuns' | 'score'

const add = (
  state: RoutinesState,
  { payload }: PayloadAction<Omit<SingleRoutine, Key>>
) => {
  const startDate = getDateStringFromUnix(payload.startDateInUnix)
  const isInFuture = dayjs(startDate).isAfter(undefined, 'day')

  const missing: Pick<SingleRoutine, Key> = {
    id: crypto.randomUUID(),
    pastRuns: [],
    score: 0,
    status: singleRoutineStatusEnum.enum[isInFuture ? 'FUTURE' : 'ACTIVE'],
  }
  const newRoutine: SingleRoutine = {
    ...payload,
    ...missing,
  }
  const newValue = [...state.value, newRoutine]
  state.value = newValue
}

export default add
