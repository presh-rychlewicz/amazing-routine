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
        update: (prev) => {
          if (prev.routineMeta && down.routineMeta) {
            return {
              routineMeta: {
                ...prev.routineMeta,
                index: down.routineMeta.index,
              },
            }
          }

          return {}
        },
      })
    )
    dispatch(
      tasks.update({
        id: downId,
        update: (prev) => {
          if (prev.routineMeta && up.routineMeta) {
            return {
              routineMeta: {
                ...prev.routineMeta,
                index: up.routineMeta.index,
              },
            }
          }

          return {}
        },
      })
    )
  }

type SwapIndexesPayload = {
  upId: Id
  downId: Id
}

export default swapIndexes
