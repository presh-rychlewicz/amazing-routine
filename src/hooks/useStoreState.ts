/* eslint-disable sort-keys */
import {
  Id,
  RootState,
  SingleContext,
  SingleContextStatusEnum,
  SingleRoutine,
  SingleRoutineStatusEnum,
  SingleTask,
  SingleTaskStatusEnum,
  singleTaskStatusEnum,
} from 'schemas'
import { contexts, routines, tasks, useAppSelector } from 'store'
import settings from 'store/reducer/settings'

const useStoreState = (): UseStoreState => {
  const contextsData = useAppSelector(contexts.selectContexts)
  const routinesData = useAppSelector(routines.selectRoutines)
  const settingsData = useAppSelector(settings.selectSettings)
  const tasksData = useAppSelector(tasks.selectTasks)

  return {
    // CONTEXTS
    contexts: contextsData,
    getContextsById: (id) => contextsData.find((c) => c.id === id),
    getContextsByStatus: (statuses) =>
      contextsData.filter((r) => statuses.includes(r.status)),
    //

    // ROUTINES
    routines: routinesData,
    getRoutinesById: (id) => routinesData.find((r) => r.id === id),
    getRoutinesByStatus: (statuses) =>
      routinesData.filter((r) => statuses.includes(r.status)),
    //

    // SETTINGS
    settings: settingsData,
    getSettingsById: (id) => settingsData.find((s) => s.id === id),
    //

    // TASKS
    tasks: tasksData,
    getActiveTasksByRoutineId: (routineId) =>
      tasksData.filter(
        (t) =>
          t.routineId === routineId &&
          t.status === singleTaskStatusEnum.enum.ACTIVE
      ),
    getTasksByContextId: (contextId) =>
      tasksData.filter((t) => t.contextId === contextId),
    getTasksById: (id) => tasksData.find((t) => t.id === id),
    getTasksByRoutineId: (routineId) =>
      tasksData.filter((t) => t.routineId === routineId),
    getTasksByStatus: (statuses) =>
      tasksData.filter((t) => statuses.includes(t.status)),
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
  // CONTEXTS
  getContextsByStatus: (
    statuses: Array<SingleContextStatusEnum>
  ) => Array<SingleContext>
  //

  // ROUTINES
  getRoutinesByStatus: (
    statuses: Array<SingleRoutineStatusEnum>
  ) => Array<SingleRoutine>
  //

  // SETTINGS
  //

  // TASKS
  getActiveTasksByRoutineId: (routineId: Id) => Array<SingleTask>
  getTasksByContextId: (contextId: Id) => Array<SingleTask>
  getTasksByRoutineId: (routineId: Id) => Array<SingleTask>
  getTasksByStatus: (statuses: Array<SingleTaskStatusEnum>) => Array<SingleTask>
  //
}

export default useStoreState
export type { UseStoreState }
