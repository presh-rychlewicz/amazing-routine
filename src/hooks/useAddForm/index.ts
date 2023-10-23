import { useState } from 'react'
import useNavigate from '../useNavigate'
import { clearForm, getEmptyFields } from './utils'
import { Field } from 'schemas'

function useAddForm<ValuesT extends Record<string, unknown>>(
  initialValues: ValuesT,
  fields: Array<Field<ValuesT>>
) {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [error, setError] = useState<FormError<ValuesT>>()
  const [values, setValues] = useState<ValuesT>(initialValues)

  const getHandleSubmit = (params: GetHandleSubmitParams) => {
    // CHECK FOR ERRORS
    const emptyFields = getEmptyFields(fields, values)

    if (emptyFields.hasErrors) {
      setError([emptyFields.key, 'This field cannot be empty'])
      return
    }
    //

    // DISABLE FIELDS
    setIsSubmitting(true)
    //

    // ADD ROUTINE TO REDUX
    params.actualJob()
    //

    // CLEAR FORM
    clearForm<ValuesT>(setValues)
    //

    // ENABLE FIELDS
    setIsSubmitting(false)
    //

    if (params.pathToGoAfterSubmitting) {
      // NAVIGATE TO ROUTINES
      navigate(params.pathToGoAfterSubmitting, true)
      //
    }
  }

  return {
    error,
    getHandleSubmit,
    isSubmitting,
    setValues,
    values,
  }
}

type GetHandleSubmitParams = {
  actualJob: () => void
  pathToGoAfterSubmitting: string | undefined
}

type FormError<ValuesT> = [keyof ValuesT, string] | undefined

export default useAddForm
export type { FormError }
