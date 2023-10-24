import { Stack, Switch, Typography } from '@mui/joy'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import { FC } from 'react'

type SingleFilterProps = {
  label: string
} & (
  | {
      type: 'MULTI'
      options: Array<SingleOption>
    }
  | {
      type: 'BOOLEAN'
      options?: undefined
      value: boolean
      onChange: () => void
    }
)

const SingleFilter: FC<SingleFilterProps> = (props) => {
  switch (props.type) {
    case 'MULTI':
      return (
        <FormGroup>
          {props.options.map((o) => (
            <FormControlLabel
              key={o.value}
              control={<Checkbox onChange={o.onChange} checked={o.isChecked} />}
              label={o.value}
            />
          ))}
        </FormGroup>
      )

    case 'BOOLEAN':
      return (
        <Stack width="100%" direction="row">
          <Typography
            component="label"
            endDecorator={
              <Switch
                checked={props.value}
                onChange={props.onChange}
                sx={{ ml: 1 }}
              />
            }
          >
            {props.label}
          </Typography>
        </Stack>
      )

    default:
      return <Typography>UNHANDLED CASE</Typography>
  }
}

export type SingleOption = {
  value: string
  isChecked: boolean
  onChange: () => void
}

export default SingleFilter
export type { SingleFilterProps }
