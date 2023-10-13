import routines from '.'
import { AppThunk } from '../..'
import { getIsExpired } from '../../../utils'
import selectRoutines from './selectRoutines'

const removeAllExpired = (): AppThunk => (dispatch, getState) => {
  const currentValue = selectRoutines(getState())
  currentValue
    .filter((r) => (r.endDate ? getIsExpired(r.endDate) : false))
    .forEach((r) => dispatch(routines.remove(r.id)))
}

export default removeAllExpired
