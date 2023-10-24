import { DetailsElem } from 'components'
import { useStoreState } from 'hooks'
import { SingleTask } from 'schemas'
import { getDurationString } from 'utils'

const getDetailsGenericProps = (
  task: SingleTask,
  getRoutinesBeId: ReturnType<typeof useStoreState>['getRoutinesById']
) => {
  const rawData: Array<DetailsElem> = [
    {
      label: 'DURATION IN SEC',
      value: task.durationInSeconds ?? 'undefined',
    },
    {
      label: 'ROUTINE ID',
      value: task.routineId ?? 'undefined',
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
    const routine = getRoutinesBeId(task.routineId)
    if (routine) {
      routineName = routine.name
    }
  }

  let durationInMins: string | undefined
  if (task.durationInSeconds) {
    durationInMins = getDurationString(task.durationInSeconds)
  }

  const generatedData: Array<DetailsElem> = [
    ...(durationInMins
      ? [
          {
            label: 'DURATION FORMATTED',
            value: `${durationInMins}`,
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
