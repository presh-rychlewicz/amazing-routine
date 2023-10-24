import { Route } from 'components'
import { AddFormBodyTemplate, AddFormHeaderTemplate } from 'templates'
import { useForm } from './hooks'

const AddContext = () => {
  const useFormReturn = useForm()

  return (
    <Route>
      <AddFormHeaderTemplate entityType="context" />

      <AddFormBodyTemplate useFormReturn={useFormReturn} />
    </Route>
  )
}

export default AddContext
