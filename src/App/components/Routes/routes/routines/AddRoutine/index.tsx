import { Route } from 'components'
import { AddFormHeaderTemplate } from 'templates'
import Body from './Body'

const AddRoutine = () => (
  <Route>
    <AddFormHeaderTemplate entityType="routine" />

    <Body />
  </Route>
)

export default AddRoutine
