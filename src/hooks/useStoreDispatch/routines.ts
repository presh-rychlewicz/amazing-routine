import { routines as routines_, useAppDispatch } from 'store'
import { Payload } from '.'

const routines = (dispatch: ReturnType<typeof useAppDispatch>) => ({
  add: (payload: Payload<typeof routines_.add>) => {
    return dispatch(routines_.add(payload))
  },
  addPastRun: (payload: Payload<typeof routines_.addPastRun>) => {
    return dispatch(routines_.addPastRun(payload))
  },
  remove: (payload: Payload<typeof routines_.remove>) => {
    return dispatch(routines_.remove(payload))
  },
  removeAllExpired: () => {
    return dispatch(routines_.removeAllExpired())
  },
})

export default routines
