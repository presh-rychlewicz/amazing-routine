import { removeReducerTemplate } from 'store/reducer/_generics'
import tasks from '..'
import { RemovePayload } from 'schemas'

const remove = (payload: RemovePayload) =>
  removeReducerTemplate(tasks.update)(payload)

export default remove
