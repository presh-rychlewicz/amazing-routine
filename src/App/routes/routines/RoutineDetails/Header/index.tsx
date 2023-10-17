import { FC } from 'react'
import { HeaderGeneric } from '../../../../../components'
import { SingleRoutine } from '../../../../../store/reducers/routines/types'
import { StatusDataElem } from '../utils/getStatusData'
import Options from './Options'
import getDurationTotal from './utils/getDurationTotal'
import getEstimationString from './utils/getEstimationString'

type Props = {
  statusData: Array<StatusDataElem>
  routineName: SingleRoutine['name']
}

const Header: FC<Props> = ({ statusData, routineName }) => {
  const inProgressTasks =
    statusData.find((s) => s.status === 'IN_PROGRESS')?.tasks ?? []
  const hasAnyTasksInProgress = Boolean(inProgressTasks.length)
  const { mins, count } = getDurationTotal(inProgressTasks)
  const subLeftContent = getEstimationString(mins, count)

  return (
    <HeaderGeneric
      topLeft={{
        type: 'TEXT',
        level: 'h4',
        content: routineName,
      }}
      topRight={{
        type: 'COMPONENT',
        content: <Options hasAnyTasksInProgress={hasAnyTasksInProgress} />,
      }}
      bottomLeft={
        hasAnyTasksInProgress
          ? {
              type: 'TEXT',
              level: 'body-xs',
              content: subLeftContent,
            }
          : undefined
      }
    />
  )
}

export default Header
