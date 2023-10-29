import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { AppThunk, Id, RemovePayload } from 'schemas'

const removeReducerTemplate =
  <UpdateReducerT extends ActionCreatorWithPayload<UpdateReducerTParam>>(
    updateFunction: UpdateReducerT
  ) =>
  ({ id }: RemovePayload): AppThunk =>
  (dispatch) => {
    const updateReducerReturn = updateFunction({
      id,
      update: {
        status: 'REMOVED',
      },
    })
    dispatch(updateReducerReturn)
  }

type UpdateReducerTParam = {
  id: Id
  update: any
}

export default removeReducerTemplate
