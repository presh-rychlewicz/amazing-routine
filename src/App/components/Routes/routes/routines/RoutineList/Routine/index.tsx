import { BigCard } from 'components'
import { FC } from 'react'
import { SingleRoutine } from 'schemas'
import { useRoutine } from './hooks'

type Props = {
  routine: SingleRoutine
}

const Routine: FC<Props> = ({ routine }) => {
  const routineProps = useRoutine(routine)

  return <BigCard {...routineProps} />
}

export default Routine
