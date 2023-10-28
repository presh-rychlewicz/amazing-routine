import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import { ChangeEvent, FC } from 'react'

type CheckboxGroupProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void
  options: Array<SingleOption>
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({ options, onChange }) => (
  <FormGroup>
    {options.map((o, index) => (
      <FormControlLabel
        key={o.label}
        control={
          <Checkbox
            checked={o.isChecked}
            onChange={(event) => onChange(event, index)}
          />
        }
        label={o.label}
      />
    ))}
  </FormGroup>
)

type SingleOption = {
  label: string
  isChecked: boolean
}

export default CheckboxGroup
export type { CheckboxGroupProps }
