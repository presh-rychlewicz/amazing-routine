import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { Button, IconButton, Stack } from '@mui/joy'
import { useStoreDispatch } from 'hooks'
import { FC } from 'react'
import { SingleRoutine } from 'schemas'

type Props = {
  routineId: SingleRoutine['id']
}

const Footer: FC<Props> = ({ routineId }) => {
  const storeDispatch = useStoreDispatch()

  return (
    <Stack component="footer" spacing={1}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton variant="outlined" color="neutral">
          <DeleteForeverIcon />
        </IconButton>

        <Button
          fullWidth
          color="success"
          onClick={() => {
            // TODO
            // What should happen when routine run is finished
            // - routine/task score

            // NEW
            storeDispatch.routines.addPastRun({
              id: routineId,
              pastRunBase: {},
            })
            // navigate(paths.dashboard.core)
          }}
        >
          Done
        </Button>
      </Stack>
    </Stack>
  )
}

export default Footer
