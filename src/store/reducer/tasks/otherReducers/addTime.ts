import { AppThunk, SingleTask } from 'schemas'
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
  id: SingleTask['id']
  durationInSeconds: NonNullable<SingleTask['durationInSeconds']>
}

export default addTime
