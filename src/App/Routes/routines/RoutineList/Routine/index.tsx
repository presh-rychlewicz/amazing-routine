import { BigCard } from 'components'
import { useBigCard } from 'hooks'
import { FC } from 'react'
import { SingleRoutine } from 'schemas'
import { getDetailsGenericProps, getOptionsBase } from './utils'

type Props = {
  element: SingleRoutine
}

const Routine: FC<Props> = ({ element }) => (
  <BigCard
    {...useBigCard<SingleRoutine>({
      element,
      entityName: 'routine',
      getDetailsGenericProps,
      getOptionsBase,
    })}
  />
)

export default Routine
