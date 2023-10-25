import { AppThunk, Id } from 'schemas'
import routines from '..'
import selectTasks from '../selectTasks'

const updateIndex =
  ({ downId, upId }: UpdateIndexPayload): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectTasks(getState())
    const upIndex = currentValue.findIndex((t) => t.id === upId)
    const downIndex = currentValue.findIndex((t) => t.id === downId)

    const up = currentValue[upIndex]
    const down = currentValue[downIndex]
    if (!up || !down) {
      throw new Error('ERROR')
    }

    dispatch(
      routines.update({
        id: upId,
        update: {
          index: down.index,
        },
      })
    )
    dispatch(
      routines.update({
        id: downId,
        update: {
          index: up.index,
        },
      })
    )
  }

type UpdateIndexPayload = {
  upId: Id
  downId: Id
}

export default updateIndex
