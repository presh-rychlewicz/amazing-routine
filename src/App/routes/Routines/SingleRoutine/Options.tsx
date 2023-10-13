import { Stack } from '@mui/joy'
import { FC, Fragment } from 'react'
import { EmptyState } from '../../../../components'
import { useStoreDispatch } from '../../../../store/hooks'
import { SingleRoutine } from '../../../../store/reducers/routines/types'
import ButtonWithConfirmation from './ButtonWithConfirmation'

type Props = {
  id: SingleRoutine['id']
  status: SingleRoutine['status']
}

const Options: FC<Props> = ({ id, status }) => {
  const { routines } = useStoreDispatch()

  let options = []
  if (status !== 'REMOVED') {
    options.push(
      <ButtonWithConfirmation
        label="Delete"
        onClick={() => routines.remove(id)}
      />
    )
  }

  const hasAnyOptions = !!options.length

  return (
    <Stack alignItems="flex-start" spacing={1}>
      {hasAnyOptions ? (
        options.map((o, index) => <Fragment key={index}>{o}</Fragment>)
      ) : (
        <EmptyState message="No options available" />
      )}
    </Stack>
  )
}

export default Options
