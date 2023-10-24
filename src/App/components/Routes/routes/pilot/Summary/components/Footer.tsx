import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { FooterGeneric } from 'components'
import { useStoreDispatch } from 'hooks'
import { FC } from 'react'
import { SingleRoutine } from 'schemas'

type Props = {
  routineId: SingleRoutine['id']
}

const Footer: FC<Props> = ({ routineId }) => {
  const storeDispatch = useStoreDispatch()

  return (
    <FooterGeneric
      smallButton={{
        icon: <DeleteForeverIcon />,
        // TODO
        onClick: () => null,
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

          // NEW
          storeDispatch.routines.addPastRun({
            id: routineId,
            pastRunBase: {},
          })
          // navigate(paths.dashboard.core)
        },
        variant: 'solid',
      }}
    />
  )
}

export default Footer
