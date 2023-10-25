import { Route } from 'components'
import { paths } from 'config'
import { useLocation } from 'react-router-dom'
import { AddFormBodyTemplate, AddFormHeaderTemplate } from 'templates'
import useForm from './useForm'

const AddTask = () => {
  const { state } = useLocation()
  const returnPath =
    state && state.returnPath
      ? state.returnPath.slice(1)
      : paths.tasks.children.index.absolute
  const useFormReturn = useForm(returnPath)

  return (
    <Route>
      <AddFormHeaderTemplate returnPath={returnPath} entityType="task" />

      <AddFormBodyTemplate useFormReturn={useFormReturn} />
    </Route>
  )
}

export default AddTask
