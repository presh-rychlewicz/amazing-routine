type Field<ValuesT extends Record<string, any>> = {
  key: keyof ValuesT
  required?: boolean | undefined
} & (
  | {
      type: 'date' | 'number' | 'time' | 'text'
      autofocus?: boolean | undefined
    }
  | {
      type: 'checkbox_group'
      options: Array<string>
      // options: Array<{
      //   label: string
      //   isChecked: boolean
      // }>
    }
  | {
      type: 'select'
      options: Array<{
        label: string
        value: string
      }>
      placeholder?: string
    }
)

export type { Field }
