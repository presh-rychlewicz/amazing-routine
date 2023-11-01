import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { FooterGeneric } from 'components'
import { ONE } from 'config'
import { useStoreDispatch } from 'hooks'
import { FC } from 'react'
import { Id, ScheduleTaskStepData } from 'schemas'

type Props = {
  routineId: Id
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

          // How task score should be calculated on update?
          // - ?average, e.g. old:1, 1, 0, 1, 1, 0; update: 1, new: 0.71
          // - ?half, e.g. old: 1, 1, 0, 1, 1, 0; update 1, new:

          // NEW

          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
          taskTotal.slice(0, ONE).forEach((t) => {
            storeDispatch.tasks.updateScore({
              id: t.id,
              isDone: t.isDone,
              isFailed: t.isFailed,
              isSkipped: t.isSkipped,
            })
          })

          return
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
