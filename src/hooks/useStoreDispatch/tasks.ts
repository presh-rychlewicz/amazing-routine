import { tasks as tasks_, useAppDispatch } from 'store'
import { Payload } from '.'

const tasks = (dispatch: ReturnType<typeof useAppDispatch>) => ({
  add: (payload: Payload<typeof tasks_.add>) => dispatch(tasks_.add(payload)),
  addTime: (payload: Payload<typeof tasks_.addTime>) =>
    dispatch(tasks_.addTime(payload)),
  fixDurationInSeconds: () => dispatch(tasks_.fixDurationInSeconds()),
  promoteToInProgress: (payload: Payload<typeof tasks_.promoteToInProgress>) =>
    dispatch(tasks_.promoteToInProgress(payload)),
  remove: (payload: Payload<typeof tasks_.remove>) =>
    dispatch(tasks_.remove(payload)),
  swapIndexes: (payload: Payload<typeof tasks_.swapIndexes>) =>
    dispatch(tasks_.swapIndexes(payload)),
  update: (payload: Payload<typeof tasks_.update>) =>
    dispatch(tasks_.update(payload)),
  updateScore: (payload: Payload<typeof tasks_.updateScore>) =>
    dispatch(tasks_.updateScore(payload)),
})

export default tasks
