import { RemovePayload } from 'schemas'
import { removeReducerTemplate } from 'store/reducer/_generics'
import routines from '..'

const remove = (payload: RemovePayload) =>
  removeReducerTemplate(routines.update)(payload)

export default remove
