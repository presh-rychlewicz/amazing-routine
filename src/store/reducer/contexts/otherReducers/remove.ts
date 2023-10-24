import { removeReducerTemplate } from 'store/reducer/_generics'
import contexts from '..'
import { RemovePayload } from 'schemas'

const remove = (payload: RemovePayload) =>
  removeReducerTemplate(contexts.update)(payload)

export default remove
