import { useAppDispatch } from 'store'
import contexts from './contexts'
import routines from './routines'
import tasks from './tasks'

const useStoreDispatch = () => {
  const dispatch = useAppDispatch()

  return {
    contexts: contexts(dispatch),
    routines: routines(dispatch),
    tasks: tasks(dispatch),
  }
}

export type Payload<T extends (param: any) => void> = Parameters<T>[0]

export default useStoreDispatch
