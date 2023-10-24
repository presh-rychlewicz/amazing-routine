import { BigCard } from 'components'
import { FC } from 'react'
import { SingleContext } from 'schemas'
import useContext from './useContext'

type Props = {
  context: SingleContext
}

const Context: FC<Props> = ({ context }) => {
  const contextProps = useContext(context)

  return <BigCard {...contextProps} />
}

export default Context
