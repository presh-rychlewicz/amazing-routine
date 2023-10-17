import { Stack, Typography } from '@mui/joy'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import { Dispatch, FC, SetStateAction } from 'react'
import {
  SingleRoutineStatuses,
  singleRoutineStatuses,
} from '../../../../../store/reducers/routines/types'

type Props = {
  selectedStatuses: Array<SingleRoutineStatuses>
  setSelectedStatuses: Dispatch<SetStateAction<Props['selectedStatuses']>>
}

const Filters: FC<Props> = ({ selectedStatuses, setSelectedStatuses }) => (
  <Stack marginBottom={1}>
    <Typography level="title-md">Status</Typography>

    <FormGroup>
      {singleRoutineStatuses.map((s) => (
        <FormControlLabel
          key={s}
          control={
            <Checkbox
              onChange={() =>
                setSelectedStatuses((prev) => {
                  const isOn = prev.includes(s)

                  if (isOn) {
                    return [...prev].filter((e) => e !== s)
                  } else {
                    return [...prev, s]
                  }
                })
              }
              checked={selectedStatuses.includes(s)}
            />
          }
          label={s}
        />
      ))}
    </FormGroup>
  </Stack>
)

export default Filters
