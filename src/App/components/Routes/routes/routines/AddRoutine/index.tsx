import { Route } from 'components'
import { AddFormHeaderTemplate } from 'templates'
import { Body } from './components'

const AddRoutine = () => (
  <Route>
    <AddFormHeaderTemplate entityType="routine" />

    <Body />
  </Route>
)

export default AddRoutine
