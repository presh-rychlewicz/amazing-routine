import routines from '.'
import { AppThunk } from '../..'
import { SingleTask, UpdatePayload } from './types'

const addTime =
  ({ id, duration }: AddTimeParams): AppThunk =>
  (dispatch) => {
    const payload: UpdatePayload = {
      id,
      update: {
        duration,
      },
    }

    dispatch(routines.update(payload))
  }

type AddTimeParams = {
  id: UpdatePayload['id']
  duration: NonNullable<SingleTask['duration']>
}

export default addTime
