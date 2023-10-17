import { RootState } from '..'
import { Id } from '../../types'
import { routines, tasks } from '../reducers'
import {
  SingleRoutine,
  SingleRoutineStatuses,
} from '../reducers/routines/types'
import { SingleTask } from '../reducers/tasks/types'
import { useAppSelector } from './internal'

const useStoreState = (): UseStoreState => {
  const tasksData = useAppSelector(tasks.selectTasks)
  const routinesData = useAppSelector(routines.selectRoutines)

  return {
    // ROUTINES
    routines: routinesData,
    getRoutinesById: (id) => routinesData.find((r) => r.id === id),
    getRoutinesByStatuses: (statuses) =>
      routinesData.filter((r) => statuses.includes(r.status)),
    //

    // TASKS
    tasks: tasksData,
    getTasksById: (id) => tasksData.find((t) => t.id === id),
    getTasksByRoutineId: (routineId) =>
      tasksData.filter((t) => t.routineId === routineId),
    //
  }
}

type UseStoreState = RootStateAsValues<RootState> &
  ByIdGetters<RootState> &
  CustomGetters
type OrUndefined<T> = T | undefined
type StateValueBase = { value: unknown[] }
type StateValue<StateT extends StateValueBase> = StateT['value']
type RootStateAsValues<RootStateT extends Record<string, StateValueBase>> = {
  [Property in keyof RootStateT]: StateValue<RootStateT[Property]>
}

// TODO: this type is not ideal - it should be singular form
type Greeting<T extends string> = `get${T}ById`
type ByIdGetters<RootStateT extends Record<string, StateValueBase>> = {
  [Property in keyof RootStateT as Greeting<Capitalize<string & Property>>]: (
    id: Id
  ) => OrUndefined<StateValue<RootStateT[Property]>[number]>
}

type CustomGetters = {
  getTasksByRoutineId: (routineId: Id) => Array<SingleTask>
  getRoutinesByStatuses: (
    statuses: Array<SingleRoutineStatuses>
  ) => Array<SingleRoutine>
}

export default useStoreState
