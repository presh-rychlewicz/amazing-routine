import { AppThunk, Id } from 'schemas'
import tasks from '..'
import selectTasks from '../selectTasks'

const swapIndexes =
  ({ downId, upId }: SwapIndexesPayload): AppThunk =>
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
      tasks.update({
        id: upId,
        update: {
          index: down.index,
        },
      })
    )
    dispatch(
      tasks.update({
        id: downId,
        update: {
          index: up.index,
        },
      })
    )
  }

type SwapIndexesPayload = {
  upId: Id
  downId: Id
}

export default swapIndexes
