import { AppThunk, Id } from 'schemas'
import settings from '..'
import selectSettings from '../selectSettings'

const toggle =
  ({ id }: TogglePayload): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectSettings(getState())
    const index = currentValue.findIndex((s) => s.id === id)
    const setting = currentValue[index]

    if (!setting) {
      throw new Error('ERROR')
    }

    dispatch(
      settings.update({
        id,
        update: {
          value: !setting.value,
        },
      })
    )
  }

type TogglePayload = {
  id: Id
}

export default toggle
