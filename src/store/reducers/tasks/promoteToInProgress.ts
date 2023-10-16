import routines from '.'
import { AppThunk } from '../..'
import { UpdatePayload } from './types'

const promoteToInProgress =
  (id: UpdatePayload['id']): AppThunk =>
  (dispatch) => {
    const payload: UpdatePayload = {
      id,
      update: {
        routineMeta: {
          status: 'IN_PROGRESS',
        },
      },
    }

    dispatch(routines.update(payload))
  }

export default promoteToInProgress
