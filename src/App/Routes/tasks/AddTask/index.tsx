import { Route } from 'components'
import { AddFormBodyTemplate, AddFormHeaderTemplate } from 'templates'
import useForm from './useForm'

const AddTask = () => {
  const useFormReturn = useForm()

  return (
    <Route>
      <AddFormHeaderTemplate {...useFormReturn.headerProps} />

      <AddFormBodyTemplate {...useFormReturn.bodyProps} />
    </Route>
  )
}

export default AddTask
