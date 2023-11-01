import { contexts as contexts_, useAppDispatch } from 'store'
import { Payload } from '.'

const contexts = (dispatch: ReturnType<typeof useAppDispatch>) => ({
  add: (payload: Payload<typeof contexts_.add>) =>
    dispatch(contexts_.add(payload)),
  remove: (payload: Payload<typeof contexts_.remove>) =>
    dispatch(contexts_.remove(payload)),
  update: (payload: Payload<typeof contexts_.update>) =>
    dispatch(contexts_.update(payload)),
})

export default contexts
