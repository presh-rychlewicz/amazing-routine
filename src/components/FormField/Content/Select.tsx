import { Option, Select as SelectMui } from '@mui/joy'
import { FC, FocusEvent, KeyboardEvent } from 'react'

type SelectProps = {
  onChange: (
    event:
      | React.MouseEvent<Element, MouseEvent>
      | KeyboardEvent<Element>
      | FocusEvent<Element, Element>
      | null,
    value: {} | null
  ) => void
  options: Array<SingleOption>
  placeholder?: string
}

const Select: FC<SelectProps> = ({ placeholder, onChange, options }) => {
  const hasOptions = !!options.length

  return (
    <SelectMui placeholder={placeholder} onChange={onChange}>
      {hasOptions ? (
        options.map(({ label, value }) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))
      ) : (
        <Option value="no-options" disabled>
          No options
        </Option>
      )}
    </SelectMui>
  )
}

type SingleOption = {
  label: string
  value: string
}

export default Select
export type { SelectProps }
