import { AppThunk, Id } from 'schemas'
import settings from '..'

const toggle =
  ({ id }: TogglePayload): AppThunk =>
  (dispatch) =>
    dispatch(
      settings.update({
        id,
        update: (prev) => ({
          value: !prev.value,
        }),
      })
    )

type TogglePayload = {
  id: Id
}

export default toggle
