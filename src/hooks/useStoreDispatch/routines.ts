import { routines as routines_, useAppDispatch } from 'store'
import { Payload } from '.'

const routines = (dispatch: ReturnType<typeof useAppDispatch>) => ({
  add: (payload: Payload<typeof routines_.add>) =>
    dispatch(routines_.add(payload)),
  addPastRun: (payload: Payload<typeof routines_.addPastRun>) =>
    dispatch(routines_.addPastRun(payload)),
  remove: (payload: Payload<typeof routines_.remove>) =>
    dispatch(routines_.remove(payload)),
  removeAllExpired: () => dispatch(routines_.removeAllExpired()),
})

export default routines
