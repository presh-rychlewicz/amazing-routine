import { AppThunk, Id, SingleTask } from 'schemas'
import tasks from '..'

const addTime =
  ({ id, durationInSeconds }: AddTimePayload): AppThunk =>
  (dispatch) =>
    dispatch(
      tasks.update({
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
