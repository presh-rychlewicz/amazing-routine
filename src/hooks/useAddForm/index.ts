import { useState } from 'react'
import useNavigate from '../useNavigate'
import { clearForm, getEmptyFields } from './utils'
import { Field } from 'schemas'

type AddFormParams<ValuesT extends Record<string, unknown>> = {
  initialValues: ValuesT
  fields: Array<Field<ValuesT>>
  pathToGoAfterSubmitting: string | undefined
  // TODO
  // elementType?: 'context' | 'routine' | 'task'
}

function useAddForm<ValuesT extends Record<string, unknown>>({
  initialValues,
  fields,
  pathToGoAfterSubmitting,
}: AddFormParams<ValuesT>) {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [error, setError] = useState<FormError<ValuesT>>()
  const [values, setValues] = useState<ValuesT>(initialValues)

  const getHandleSubmit = (doActualJob: (values: ValuesT) => void) => {
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
    doActualJob(values)
    //

    // CLEAR FORM
    clearForm<ValuesT>(setValues)
    //

    // ENABLE FIELDS
    setIsSubmitting(false)
    //

    if (pathToGoAfterSubmitting) {
      // NAVIGATE TO ROUTINES
      navigate(pathToGoAfterSubmitting, true)
      //
    }
  }

  return {
    getHandleSubmit,
    restValues: {
      error,
      fields,
      isSubmitting,
      setValues,
      values,
    },
  }
}

type FormError<ValuesT> = [keyof ValuesT, string] | undefined

export default useAddForm
export type { FormError }
