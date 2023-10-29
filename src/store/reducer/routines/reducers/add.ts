import dayjs from 'dayjs'
import { SingleRoutine, singleRoutineStatusEnum } from 'schemas'
import { addReducerTemplate } from 'store/reducer/_generics'
import { getDateStringFromUnix } from 'utils'

type Key = 'id' | 'status' | 'pastRuns' | 'score'
const add = addReducerTemplate<SingleRoutine, Key>((payload) => {
  const startDate = getDateStringFromUnix(payload.startDateInUnix)
  const isInFuture = dayjs(startDate).isAfter(undefined, 'day')

  return {
    id: crypto.randomUUID(),
    pastRuns: [],
    score: 0,
    status: singleRoutineStatusEnum.enum[isInFuture ? 'FUTURE' : 'ACTIVE'],
  }
})

export default add
