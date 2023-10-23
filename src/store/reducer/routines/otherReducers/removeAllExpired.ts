import routines from '..'
import { getIsExpired } from 'utils'
import selectRoutines from '../selectRoutines'
import { AppThunk } from 'schemas'

const removeAllExpired = (): AppThunk => (dispatch, getState) => {
  const currentValue = selectRoutines(getState())
  currentValue
    .filter((r) => (r.endDateInUnix ? getIsExpired(r.endDateInUnix) : false))
    .forEach((r) => dispatch(routines.remove({ id: r.id })))
}

export default removeAllExpired
