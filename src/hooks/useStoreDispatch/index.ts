import { useAppDispatch } from 'store'
import contexts from './contexts'
import routines from './routines'
import settings from './settings'
import tasks from './tasks'

const useStoreDispatch = () => {
  const dispatch = useAppDispatch()

  return {
    contexts: contexts(dispatch),
    routines: routines(dispatch),
    settings: settings(dispatch),
    tasks: tasks(dispatch),
  }
}

const FIRST_INDEX = 0
type Payload<T extends (param: any) => void> = Parameters<T>[typeof FIRST_INDEX]

export default useStoreDispatch
export type { Payload }
