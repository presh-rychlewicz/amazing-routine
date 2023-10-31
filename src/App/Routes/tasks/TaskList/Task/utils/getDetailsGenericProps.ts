import { DetailsElem } from 'components'
import { UseStoreState } from 'hooks/useStoreState'
import { SingleTask } from 'schemas'
import { getDurationString } from 'utils'

const getDetailsGenericProps = (
  task: SingleTask,
  storeState: UseStoreState
) => {
  const rawData: Array<DetailsElem> = [
    {
      label: 'CONTEXT ID',
      value: task.contextId ?? 'undefined',
    },
    {
      label: 'DURATION IN SEC',
      value: task.durationInSeconds ?? 'undefined',
    },
    {
      label: 'ROUTINE ID',
      value: task.routineId ?? 'undefined',
    },
    {
      label: 'ROUTINE INDEX',
      value: task.routineMeta?.index ?? 'undefined',
    },
    {
      label: 'ROUTINE STATUS',
      value: task.routineMeta?.status ?? 'undefined',
    },
    {
      label: 'SCORE',
      value: task.score,
    },
    {
      label: 'STATUS',
      value: task.status,
    },
  ]

  let routineName: string | undefined
  if (task.routineId) {
    const routine = storeState.getRoutinesById(task.routineId)
    if (routine) {
      routineName = routine.name
    }
  }

  let durationInMins: string | undefined
  if (task.durationInSeconds) {
    durationInMins = getDurationString(task.durationInSeconds)
  }

  let contextName: string | undefined
  if (task.contextId) {
    contextName = storeState.getContextsById(task.contextId)?.name
  }

  const generatedData: Array<DetailsElem> = [
    ...(contextName
      ? [
          {
            label: 'CONTEXT NAME',
            value: contextName,
          },
        ]
      : []),
    ...(durationInMins
      ? [
          {
            label: 'DURATION FORMATTED',
            value: durationInMins,
          },
        ]
      : []),
    ...(routineName
      ? [
          {
            label: 'ROUTINE NAME',
            value: routineName,
          },
        ]
      : []),
  ]

  return {
    generatedData,
    rawData,
  }
}

export default getDetailsGenericProps
