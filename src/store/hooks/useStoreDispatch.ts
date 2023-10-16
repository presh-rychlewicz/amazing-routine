import { counter, routines, tasks } from '../reducers'
import { useAppDispatch } from './internal'

const useStoreDispatch = () => {
  const dispatch = useAppDispatch()

  return {
    counter: {
      decrement: () => {
        return dispatch(counter.decrement())
      },
      increment: () => {
        return dispatch(counter.increment())
      },
      incrementAsync: (payload: Payload<typeof counter.incrementAsync>) => {
        return dispatch(counter.incrementAsync(payload))
      },
      incrementByAmount: (
        payload: Payload<typeof counter.incrementByAmount>
      ) => {
        return dispatch(counter.incrementByAmount(payload))
      },
      incrementIfOdd: (payload: Payload<typeof counter.incrementIfOdd>) => {
        return dispatch(counter.incrementIfOdd(payload))
      },
    },
    routines: {
      add: (payload: Payload<typeof routines.add>) => {
        return dispatch(routines.add(payload))
      },
      remove: (payload: Payload<typeof routines.remove>) => {
        return dispatch(routines.remove(payload))
      },
      removeAllExpired: () => {
        return dispatch(routines.removeAllExpired())
      },
    },
    tasks: {
      add: (payload: Payload<typeof tasks.add>) => {
        return dispatch(tasks.add(payload))
      },
      update: (payload: Payload<typeof tasks.update>) => {
        return dispatch(tasks.update(payload))
      },
      promoteToInProgress: (
        payload: Payload<typeof tasks.promoteToInProgress>
      ) => {
        return dispatch(tasks.promoteToInProgress(payload))
      },
    },
  }
}

type Payload<T extends (param: any) => void> = Parameters<T>[0]

export default useStoreDispatch
