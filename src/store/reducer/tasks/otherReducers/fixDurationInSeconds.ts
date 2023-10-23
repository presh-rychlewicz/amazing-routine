import { AppThunk } from 'schemas'
import tasks from '..'
import selectTasks from '../selectTasks'

const fixDurationInSeconds = (): AppThunk => (dispatch, getState) => {
  const currentValue = selectTasks(getState())
  currentValue.forEach((t) => {
    if (t.durationInSeconds && t.durationInSeconds < 60) {
      dispatch(
        tasks.update({
          id: t.id,
          update: {
            durationInSeconds: 60,
          },
        })
      )
    }
  })
}

export default fixDurationInSeconds
