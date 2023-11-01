import { Field } from 'schemas'

const getEmptyFields = <ValuesT extends {}, FieldsT extends Field<ValuesT>>(
  fields: Array<FieldsT>,
  values: ValuesT
) => {
  const emptyFields = fields
    .filter((f) => f.required)
    .map((f) => {
      const { key } = f
      const value = values[key]

      return {
        isEmpty: !value,
        key,
        value,
      }
    })
    .filter((f) => f.isEmpty)

  const [firstError] = emptyFields
  const hasErrors = !!firstError

  if (hasErrors) {
    return {
      hasErrors,
      key: firstError.key,
    }
  }

  return {
    hasErrors,
  }
}

export default getEmptyFields
