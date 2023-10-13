import routines from '.'
import { AppThunk } from '../..'
import { SingleRoutine, SingleRoutineStatuses } from './types'

const remove =
  (id: RemovePayload['id']): AppThunk =>
  (dispatch) => {
    const payload: RemovePayload = {
      id,
      update: {
        status: SingleRoutineStatuses.REMOVED,
      },
    }

    dispatch(routines.update(payload))
  }

export type RemovePayload = {
  id: SingleRoutine['id']
  update: Partial<Omit<SingleRoutine, 'id'>>
}

export default remove
