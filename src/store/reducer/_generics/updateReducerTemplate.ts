import { PayloadAction } from '@reduxjs/toolkit'
import { Id } from 'schemas'

function updateReducerTemplate<
  ElementT extends { id: Id },
  StateT extends { value: Array<ElementT> },
  UpdatePayloadT extends { id: ElementT['id']; update: {} }
>(state: StateT, { payload }: PayloadAction<UpdatePayloadT>) {
  const newValue = [...state.value]
  const elementToBeUpdatedIndex = newValue.findIndex((r) => r.id === payload.id)
  const elementToBeUpdated = newValue[elementToBeUpdatedIndex]

  if (!elementToBeUpdated) {
    throw new Error('Missing element')
  }

  const updatedElement: ElementT = {
    ...elementToBeUpdated,
    ...payload.update,
  }
  newValue[elementToBeUpdatedIndex] = updatedElement

  state.value = newValue
}

export default updateReducerTemplate
