import counter from '.'
import { AppThunk } from '../..'
import selectCount from './selectCount'

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState())
    if (currentValue % 2 === 1) {
      dispatch(counter.incrementByAmount(amount))
    }
  }

export default incrementIfOdd
