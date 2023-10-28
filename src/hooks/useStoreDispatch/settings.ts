import { settings as settings_, useAppDispatch } from 'store'
import { Payload } from '.'

const settings = (dispatch: ReturnType<typeof useAppDispatch>) => ({
  toggle: (payload: Payload<typeof settings_.toggle>) => {
    dispatch(settings_.toggle(payload))
  },
})

export default settings
