import { AppThunk, Id } from 'schemas'
import tasks from '..'

const promoteToInProgress =
  ({ id }: PromoteToInProgressPayload): AppThunk =>
  (dispatch) =>
    dispatch(
      tasks.update({
        id,
        update: {
          routineMeta: {
            status: 'IN_PROGRESS',
          },
        },
      })
    )

type PromoteToInProgressPayload = {
  id: Id
}

export default promoteToInProgress
