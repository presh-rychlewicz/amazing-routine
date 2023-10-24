import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { AppThunk, Id, RemovePayload } from 'schemas'

function removeReducerTemplate<
  UpdateReducerT extends ActionCreatorWithPayload<UpdateReducerTParam>
>(updateFunction: UpdateReducerT) {
  return ({ id }: RemovePayload): AppThunk =>
    (dispatch) => {
      const updateReducerReturn = updateFunction({
        id,
        update: {
          status: 'REMOVED',
        },
      })
      dispatch(updateReducerReturn)
    }
}

type UpdateReducerTParam = {
  id: Id
  update: any
}

export default removeReducerTemplate
