/* eslint-disable sort-keys */
import {
  Id,
  RootState,
  SingleRoutine,
  SingleRoutineStatusEnum,
  SingleTask,
  SingleTaskStatusEnum,
} from 'schemas'
import { routines, tasks, useAppSelector } from 'store'

const useStoreState = (): UseStoreState => {
  const tasksData = useAppSelector(tasks.selectTasks)
  const routinesData = useAppSelector(routines.selectRoutines)

  return {
    // ROUTINES
    getRoutinesById: (id) => routinesData.find((r) => r.id === id),
    getRoutinesByStatus: (statuses) =>
      routinesData.filter((r) => statuses.includes(r.status)),
    routines: routinesData,
    //

    // TASKS
    getTasksById: (id) => tasksData.find((t) => t.id === id),
    getTasksByRoutineId: (routineId) =>
      tasksData.filter((t) => t.routineId === routineId),
    getTasksByStatus: (statuses) =>
      tasksData.filter((t) => statuses.includes(t.status)),
    tasks: tasksData,
    //
  }
}

type UseStoreState = RootStateAsValues<RootState> &
  ByIdGetters<RootState> &
  CustomGetters
type OrUndefined<T> = T | undefined
type StateValueBase = { value: Array<unknown> }
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
  getTasksByRoutineId: (routineId: SingleRoutine['id']) => Array<SingleTask>
  getRoutinesByStatus: (
    statuses: Array<SingleRoutineStatusEnum>
  ) => Array<SingleRoutine>
  getTasksByStatus: (statuses: Array<SingleTaskStatusEnum>) => Array<SingleTask>
}

export default useStoreState
