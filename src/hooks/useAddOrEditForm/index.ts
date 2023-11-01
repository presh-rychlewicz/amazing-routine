import { useState } from 'react'
import useNavigate from '../useNavigate'
import { clearForm, getEmptyFields } from './utils'
import { Field, FormError } from 'schemas'

type Params<ValuesT extends Record<string, unknown>> = {
  initialValues: ValuesT
  fields: Array<Field<ValuesT>>
  pathToGoAfterSubmitting: string | undefined
  isEdit?: boolean
}

const useAddOrEditForm = <ValuesT extends Record<string, unknown>>({
  initialValues,
  fields,
  pathToGoAfterSubmitting,
  isEdit,
}: Params<ValuesT>) => {
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
      isEdit,
      isSubmitting,
      setValues,
      values,
    },
  }
}

export default useAddOrEditForm
