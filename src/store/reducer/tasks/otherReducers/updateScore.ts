import mean from 'lodash.mean'
import { AppThunk, Id, ScheduleTaskStepData, SingleTask } from 'schemas'
import tasks from '..'
import { TASK_COMPLETION_SCORE, TASK_FAIL_SCORE } from 'config'

const updateScore =
  ({ id, isSkipped, isDone }: UpdateScorePayload): AppThunk =>
  (dispatch) => {
    if (isSkipped) {
      return
    }

    dispatch(
      tasks.update({
        id,
        update: (prev) => {
          let score: SingleTask['score'] = TASK_FAIL_SCORE
          if (isDone) {
            score = TASK_COMPLETION_SCORE
          }

          return {
            score: mean([prev.score, score]),
          }
        },
      })
    )
  }

type UpdateScorePayload = { id: Id } & Pick<
  ScheduleTaskStepData,
  'isDone' | 'isFailed' | 'isSkipped'
>

export default updateScore
