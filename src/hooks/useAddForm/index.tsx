import { useState } from 'react'
import { Field } from '../../types'
import useNavigate from '../useNavigate'
import { clearForm, getEmptyFields } from './utils'

function useAddForm<ValuesT extends Record<string, unknown>>(
  initialValues: ValuesT,
  fields: Field<ValuesT>[]
) {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<[keyof ValuesT, string]>()
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
    isSubmitting,
    error,
    getHandleSubmit,
    values,
    setValues,
  }
}

type GetHandleSubmitParams = {
  actualJob: () => void
  pathToGoAfterSubmitting: string | undefined
}

export default useAddForm
