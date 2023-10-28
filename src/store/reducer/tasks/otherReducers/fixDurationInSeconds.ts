import { NUMBER_OF_SECONDS_IN_MINUTE } from 'config'
import { AppThunk } from 'schemas'
import tasks from '..'
import selectTasks from '../selectTasks'

const fixDurationInSeconds = (): AppThunk => (dispatch, getState) => {
  const currentValue = selectTasks(getState())
  currentValue.forEach((t) => {
    if (
      t.durationInSeconds &&
      t.durationInSeconds < NUMBER_OF_SECONDS_IN_MINUTE
    ) {
      dispatch(
        tasks.update({
          id: t.id,
          update: {
            durationInSeconds: NUMBER_OF_SECONDS_IN_MINUTE,
          },
        })
      )
    }
  })
}

export default fixDurationInSeconds
