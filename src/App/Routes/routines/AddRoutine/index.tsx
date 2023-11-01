import { Route } from 'components'
import { AddFormBodyTemplate, AddOrEditFormHeaderTemplate } from 'templates'
import { useForm } from './hooks'

const AddRoutine = () => {
  const { headerProps, bodyProps } = useForm()

  return (
    <Route>
      <AddOrEditFormHeaderTemplate {...headerProps} />

      <AddFormBodyTemplate {...bodyProps} />
    </Route>
  )
}

export default AddRoutine
