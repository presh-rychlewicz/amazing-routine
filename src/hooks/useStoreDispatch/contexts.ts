import { contexts as contexts_, useAppDispatch } from 'store'
import { Payload } from '.'

const contexts = (dispatch: ReturnType<typeof useAppDispatch>) => ({
  add: (payload: Payload<typeof contexts_.add>) => {
    return dispatch(contexts_.add(payload))
  },
  remove: (payload: Payload<typeof contexts_.remove>) => {
    return dispatch(contexts_.remove(payload))
  },
})

export default contexts
