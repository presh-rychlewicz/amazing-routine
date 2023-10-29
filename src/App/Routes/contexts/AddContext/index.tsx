import { Route } from 'components'
import { AddFormBodyTemplate, AddFormHeaderTemplate } from 'templates'
import { useForm } from './hooks'

const AddContext = () => {
  const useFormReturn = useForm()

  return (
    <Route>
      <AddFormHeaderTemplate {...useFormReturn.headerProps} />

      <AddFormBodyTemplate {...useFormReturn.bodyProps} />
    </Route>
  )
}

export default AddContext
