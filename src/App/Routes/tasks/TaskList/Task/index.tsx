import { BigCard } from 'components'
import { useBigCard } from 'hooks'
import { FC } from 'react'
import { SingleTask } from 'schemas'
import { getDetailsGenericProps, getOptionsBase } from './utils'

type Props = {
  element: SingleTask
}
const Task: FC<Props> = ({ element }) => (
  <BigCard
    {...useBigCard<SingleTask>({
      element,
      entityName: 'task',
      getDetailsGenericProps,
      getOptionsBase,
    })}
  />
)

export default Task
