import dayjs from 'dayjs'
import { AppThunk, SingleRoutine } from 'schemas'
import { PastRun } from 'schemas/pastRun'
import routines from '..'
import selectRoutines from '../selectRoutines'

const addPastRun =
  ({ id, pastRunBase }: AddPastRunPayload): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectRoutines(getState())
    const oldRoutine = currentValue.find((r) => r.id === id)

    if (!oldRoutine) {
      throw new Error('No old routine')
    }

    const newPastRun: PastRun = {
      ...pastRunBase,
      id: crypto.randomUUID(),
      timestamp: dayjs().unix(),
    }

    dispatch(
      routines.update({
        id,
        update: {
          pastRuns: [...oldRoutine.pastRuns, newPastRun],
        },
      })
    )
  }

type AddPastRunPayload = {
  id: SingleRoutine['id']
  pastRunBase: Omit<PastRun, 'id' | 'timestamp'>
}

export default addPastRun
