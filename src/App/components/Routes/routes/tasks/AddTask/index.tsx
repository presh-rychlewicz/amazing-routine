import { Route } from 'components'
import { paths } from 'config'
import { useLocation } from 'react-router-dom'
import { AddFormBodyTemplate, AddFormHeaderTemplate } from 'templates'
import useForm from './useForm'

const AddTask = () => {
  const { state } = useLocation()
  const returnPath =
    state && state.returnPath
      ? state.returnPath.slice(SLICE_START)
      : paths.tasks.children.index.absolute
  const useFormReturn = useForm(returnPath)

  return (
    <Route>
      <AddFormHeaderTemplate returnPath={returnPath} entityType="task" />

      <AddFormBodyTemplate useFormReturn={useFormReturn} />
    </Route>
  )
}

const SLICE_START = 1

export default AddTask
