import routines from '.'
import { AppThunk } from '../..'
import { SingleRoutineStatuses, UpdatePayload } from './types'

const remove =
  (id: UpdatePayload['id']): AppThunk =>
  (dispatch) => {
    const payload: UpdatePayload = {
      id,
      update: {
        status: SingleRoutineStatuses.REMOVED,
      },
    }

    dispatch(routines.update(payload))
  }

export default remove
