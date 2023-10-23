import { AppThunk, SingleTask, singleTaskStatusEnum } from 'schemas'
import routines from '..'

const remove =
  ({ id }: RemovePayload): AppThunk =>
  (dispatch) =>
    dispatch(
      routines.update({
        id,
        update: {
          status: singleTaskStatusEnum.enum.REMOVED,
        },
      })
    )

type RemovePayload = {
  id: SingleTask['id']
}

export default remove
