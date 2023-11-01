import { Route } from 'components'
import { paths } from 'config'
import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { AddFormBodyTemplate, AddOrEditFormHeaderTemplate } from 'templates'
import useForm from './useForm'

type Props = {
  isEdit?: boolean
}

const AddOrEditContext: FC<Props> = ({ isEdit = false }) => {
  const useFormReturn = useForm(isEdit)

  if (!useFormReturn) {
    return <Navigate to={`/${paths.contexts.core}`} />
  }

  return (
    <Route>
      <AddOrEditFormHeaderTemplate {...useFormReturn.headerProps} />

      <AddFormBodyTemplate {...useFormReturn.bodyProps} />
    </Route>
  )
}

export default AddOrEditContext
