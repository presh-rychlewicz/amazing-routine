import { SingleContext, singleContextStatusEnum } from 'schemas'
import { addReducerTemplate } from 'store/reducer/_generics'

type Key = 'id' | 'status'
const add = addReducerTemplate<SingleContext, Key>(() => ({
  id: crypto.randomUUID(),
  status: singleContextStatusEnum.enum.ACTIVE,
}))

export default add
