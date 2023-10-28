import { FormError } from 'hooks/useAddForm'
import { Dispatch, SetStateAction } from 'react'
import { Field } from './field'

type ReturnUseAddForm<ValuesT extends Record<string, any>> = {
  error: FormError<ValuesT>
  handleSubmit: () => void
  isSubmitting: boolean
  setValues: Dispatch<SetStateAction<ValuesT>>
  values: ValuesT
  fields: Array<Field<ValuesT>>
}

export type { ReturnUseAddForm }
