import { AppThunk, SingleRoutine, singleRoutineStatusEnum } from 'schemas'
import routines from '..'

const remove =
  ({ id }: RemovePayload): AppThunk =>
  (dispatch) =>
    dispatch(
      routines.update({
        id,
        update: {
          status: singleRoutineStatusEnum.enum.REMOVED,
        },
      })
    )

type RemovePayload = {
  id: SingleRoutine['id']
}

export default remove
