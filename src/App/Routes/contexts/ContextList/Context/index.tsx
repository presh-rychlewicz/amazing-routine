import { BigCard } from 'components'
import { useBigCard } from 'hooks'
import { FC } from 'react'
import { SingleContext } from 'schemas'
import { getDetailsGenericProps, getOptionsBase } from './utils'

type Props = {
  element: SingleContext
}

const Context: FC<Props> = ({ element }) => (
  <BigCard
    {...useBigCard<SingleContext>({
      element,
      entityName: 'context',
      getDetailsGenericProps,
      getOptionsBase,
    })}
  />
)

export default Context
