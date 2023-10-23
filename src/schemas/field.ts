import { TypeOf, boolean, object, enum as zEnum } from 'zod'

const fieldBaseSchema = object({
  autofocus: boolean().optional(),
  required: boolean().optional(),
  type: zEnum(['text', 'number', 'date', 'time']),
})
type FieldBase = TypeOf<typeof fieldBaseSchema>

type Field<ValuesT extends Record<string, any>> = FieldBase & {
  key: keyof ValuesT
}

export type { Field }
