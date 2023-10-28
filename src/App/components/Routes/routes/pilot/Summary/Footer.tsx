import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { FooterGeneric } from 'components'
import { useStoreDispatch } from 'hooks'
import { FC } from 'react'
import { SingleRoutine, ScheduleTaskStepData } from 'schemas'

type Props = {
  routineId: SingleRoutine['id']
  onExit: () => void
  taskData: Array<ScheduleTaskStepData>
}

const Footer: FC<Props> = ({ onExit, routineId, taskData }) => {
  const storeDispatch = useStoreDispatch()

  return (
    <FooterGeneric
      smallButton={{
        icon: <DeleteForeverIcon />,
        onClick: onExit,
        variant: 'outlined',
      }}
      largeButton={{
        color: 'success',
        fullWidth: true,
        label: 'Done',
        onClick: () => {
          // TODO
          // What should happen when routine run is finished
          // - routine/task score

          // - ROUTINE_SCORE should be based on
          // -- CURRENT_ROUTINE_SCORE
          // -- THIS_RUN_ROUTINE_SCORE

          // - THIS_RUN_ROUTINE_SCORE should be based on:
          // - each task score done/skipped/failed
          // - ?time +/-

          const taskTotal = taskData.filter((t) => !t.isSkipped)
          const taskCount = taskTotal.length

          const doneTasks = taskTotal.filter((t) => t.isDone)
          const doneTasksCount = doneTasks.length

          const failedTasks = taskTotal.filter((t) => t.isFailed)
          const failedTasksCount = failedTasks.length

          // Test if done + failed === total without skipped
          if (doneTasksCount + failedTasksCount !== taskCount) {
            throw new Error('Something is wrong')
          }

          // NEW
          storeDispatch.routines.addPastRun({
            id: routineId,
            pastRunBase: {},
          })

          // TEMP
          // onExit()
        },
        variant: 'solid',
      }}
    />
  )
}

export default Footer
