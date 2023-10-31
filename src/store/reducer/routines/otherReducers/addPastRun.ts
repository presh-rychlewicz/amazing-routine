import dayjs from 'dayjs'
import { AppThunk, Id, PastRun } from 'schemas'
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
  id: Id
  pastRunBase: Omit<PastRun, 'id' | 'timestamp'>
}

export default addPastRun
