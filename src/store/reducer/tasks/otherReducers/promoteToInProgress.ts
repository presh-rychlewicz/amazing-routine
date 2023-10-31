import { AppThunk, Id } from 'schemas'
import tasks from '..'
import selectTasks from '../selectTasks'
import { ONE } from 'config'

const promoteToInProgress =
  ({ id }: PromoteToInProgressPayload): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectTasks(getState())
    const task = currentValue.find((t) => t.id === id)
    const routineId = task?.routineId

    if (!routineId) {
      return
    }

    const allTasksBelongingToRoutineId = currentValue
      .filter((t) => t.routineId === routineId)
      .filter((t) => t.routineMeta?.status === 'IN_PROGRESS').length

    return dispatch(
      tasks.update({
        id,
        update: {
          routineMeta: {
            index: allTasksBelongingToRoutineId + ONE,
            status: 'IN_PROGRESS',
          },
        },
      })
    )
  }

type PromoteToInProgressPayload = {
  id: Id
}

export default promoteToInProgress
