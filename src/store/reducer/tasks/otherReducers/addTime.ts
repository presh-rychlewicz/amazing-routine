import { AppThunk, Id, SingleTask } from 'schemas'
import routines from '..'

const addTime =
  ({ id, durationInSeconds }: AddTimePayload): AppThunk =>
  (dispatch) =>
    dispatch(
      routines.update({
        id,
        update: {
          durationInSeconds,
        },
      })
    )

type AddTimePayload = {
  id: Id
  durationInSeconds: NonNullable<SingleTask['durationInSeconds']>
}

export default addTime
