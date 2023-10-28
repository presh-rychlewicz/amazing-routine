import CheckboxGroup, { CheckboxGroupProps } from './CheckboxGroup'
import Input, { InputProps } from './Input'
import Select, { SelectProps } from './Select'

type ContentProps =
  | InputProps
  | ({
      type: 'checkbox_group'
    } & CheckboxGroupProps)
  | ({
      type: 'select'
    } & SelectProps)

const Content = (props: ContentProps) => {
  if (
    props.type === 'number' ||
    props.type === 'time' ||
    props.type === 'text' ||
    props.type === 'date'
  ) {
    return (
      <Input
        autoFocus={props.autoFocus}
        isDisabled={props.isDisabled}
        isRequired={props.isRequired}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
      />
    )
  }

  if (props.type === 'checkbox_group') {
    return <CheckboxGroup onChange={props.onChange} options={props.options} />
  }

  if (props.type === 'select') {
    return (
      <Select
        placeholder={props.placeholder}
        options={props.options}
        onChange={props.onChange}
      />
    )
  }

  return null
}

export default Content
export type { ContentProps }
