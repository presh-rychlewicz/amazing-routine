import { tasks as tasks_, useAppDispatch } from 'store'
import { Payload } from '.'

const tasks = (dispatch: ReturnType<typeof useAppDispatch>) => ({
  add: (payload: Payload<typeof tasks_.add>) => {
    return dispatch(tasks_.add(payload))
  },
  addTime: (payload: Payload<typeof tasks_.addTime>) => {
    return dispatch(tasks_.addTime(payload))
  },
  fixDurationInSeconds: () => {
    return dispatch(tasks_.fixDurationInSeconds())
  },
  promoteToInProgress: (
    payload: Payload<typeof tasks_.promoteToInProgress>
  ) => {
    return dispatch(tasks_.promoteToInProgress(payload))
  },
  remove: (payload: Payload<typeof tasks_.remove>) => {
    return dispatch(tasks_.remove(payload))
  },
  update: (payload: Payload<typeof tasks_.update>) => {
    return dispatch(tasks_.update(payload))
  },
  updateIndex: (payload: Payload<typeof tasks_.updateIndex>) => {
    return dispatch(tasks_.updateIndex(payload))
  },
})

export default tasks
