import { AppThunk, Id, ScheduleTaskStepData, TaskRun } from 'schemas'
import tasks from '..'
import dayjs from 'dayjs'

const addRun =
  ({ id, isDone, isSkipped }: AddRunPayload): AppThunk =>
  (dispatch) =>
    dispatch(
      tasks.update({
        id,
        update: (prev) => {
          let outcome: TaskRun['outcome'] = 'FAILED'
          if (isDone) {
            outcome = 'DONE'
          } else if (isSkipped) {
            outcome = 'SKIPPED'
          }

          const newRun: TaskRun = {
            // TEMP
            completionInSeconds: 0,
            // TEMP
            durationInSeconds: 0,
            id: crypto.randomUUID(),
            outcome,
            // TEMP
            score: 0,
            timestamp: dayjs().unix(),
          }

          return {
            runs: [...prev.runs, newRun],
          }
        },
      })
    )

type AddRunPayload = Pick<
  ScheduleTaskStepData,
  'isDone' | 'isFailed' | 'isSkipped'
> & {
  id: Id
}

export default addRun
