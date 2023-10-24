import { FC } from 'react'
import { BigCard } from 'components'
import { SingleTask } from 'schemas'
import { useTask } from './hooks'

type Props = {
  task: SingleTask
}
const Task: FC<Props> = ({ task }) => {
  const taskProps = useTask(task)

  return <BigCard {...taskProps} />
}

export default Task
