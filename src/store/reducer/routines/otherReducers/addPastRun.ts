import dayjs from 'dayjs'
import { AppThunk, SingleRoutine } from 'schemas'
import { PastRun } from 'schemas'
import routines from '..'

const addPastRun =
  ({ id, pastRunBase }: AddPastRunPayload): AppThunk =>
  (dispatch) =>
    dispatch(
      routines.update({
        id,
        update: (prev) => ({
          pastRuns: [
            ...prev.pastRuns,
            {
              ...pastRunBase,
              id: crypto.randomUUID(),
              timestamp: dayjs().unix(),
            },
          ],
        }),
      })
    )

type AddPastRunPayload = {
  id: SingleRoutine['id']
  pastRunBase: Omit<PastRun, 'id' | 'timestamp'>
}

export default addPastRun
