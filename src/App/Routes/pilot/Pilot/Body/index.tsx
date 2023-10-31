import { FC } from 'react'
import { Id, SingleRoutine, SingleTask } from 'schemas'

import EndDecisionModal from './EndDecisionModal'
import List from './List'
import Main from './Main'
import { usePilot } from './hooks'

type Props = {
  tasks: Array<SingleTask>
  routineName: SingleRoutine['name']
  routineId: Id
}

const Body: FC<Props> = ({ tasks, routineName, routineId }) => {
  const { listProps, mainProps, endDecisionModalProps } = usePilot(
    tasks,
    routineId,
    routineName
  )

  return (
    <>
      <EndDecisionModal {...endDecisionModalProps} />

      <Main {...mainProps} />

      <List {...listProps} />
    </>
  )
}

export default Body
