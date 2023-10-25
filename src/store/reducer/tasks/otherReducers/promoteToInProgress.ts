import { AppThunk, Id } from 'schemas'
import routines from '..'

const promoteToInProgress =
  ({ id }: PromoteToInProgressPayload): AppThunk =>
  (dispatch) =>
    dispatch(
      routines.update({
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
