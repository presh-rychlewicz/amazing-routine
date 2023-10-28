import { AppThunk, Id } from 'schemas'
import tasks from '..'

const updateScore =
  ({ id }: UpdateScorePayload): AppThunk =>
  (dispatch) =>
    dispatch(
      tasks.update({
        id,
        update: {
          // TEMP
          score: 0,
        },
      })
    )

type UpdateScorePayload = {
  id: Id
}

export default updateScore
