import { Input as InputMui } from '@mui/joy'
import { ChangeEvent, FC } from 'react'

type InputProps = {
  type: 'date' | 'number' | 'time' | 'text'
  isRequired?: boolean
  autoFocus?: boolean
  value: string
  isDisabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = (props) => (
  <InputMui
    // TODO: this seems to not work
    autoFocus={props.autoFocus}
    disabled={props.isDisabled}
    required={props.isRequired}
    value={props.value}
    type={props.type}
    onChange={props.onChange}
  />
)

export default Input
export type { InputProps }
