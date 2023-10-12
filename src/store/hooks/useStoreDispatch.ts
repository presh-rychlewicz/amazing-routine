import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
} from '../reducers'
import { useAppDispatch } from './internal'

const useStoreDispatch = () => {
  const dispatch = useAppDispatch()

  return {
    counter: {
      decrement: () => {
        return dispatch(decrement())
      },
      increment: () => {
        return dispatch(increment())
      },
      incrementAsync: (value: Parameters<typeof incrementAsync>[0]) => {
        return dispatch(incrementAsync(value))
      },
      incrementByAmount: (value: Parameters<typeof incrementByAmount>[0]) => {
        return dispatch(incrementByAmount(value))
      },
      incrementIfOdd: (value: Parameters<typeof incrementIfOdd>[0]) => {
        return dispatch(incrementIfOdd(value))
      },
    },
  }
}

export default useStoreDispatch
