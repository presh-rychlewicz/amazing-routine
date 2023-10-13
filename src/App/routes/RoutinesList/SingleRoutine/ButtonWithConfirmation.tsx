import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'
import { Button, Stack, Typography } from '@mui/joy'
import { FC, useState } from 'react'

type Props = {
  label: string
  onClick: () => void
}

const ButtonWithConfirmation: FC<Props> = ({ label, onClick }) => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false)

  return (
    <>
      {!hasBeenClicked && (
        <Button
          variant="outlined"
          color="neutral"
          fullWidth
          onClick={() => setHasBeenClicked(true)}
        >
          {label}
        </Button>
      )}

      {hasBeenClicked && (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Typography whiteSpace="nowrap">Are you sure?</Typography>

          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              variant="soft"
              color="danger"
              fullWidth
              onClick={() => setHasBeenClicked(false)}
            >
              <ClearIcon />
            </Button>

            <Button
              variant="soft"
              color="success"
              fullWidth
              onClick={() => {
                onClick()
                setHasBeenClicked(false)
              }}
            >
              <CheckIcon />
            </Button>
          </Stack>
        </Stack>
      )}
    </>
  )
}

export default ButtonWithConfirmation
