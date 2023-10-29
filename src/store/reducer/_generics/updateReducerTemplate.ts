import { PayloadAction } from '@reduxjs/toolkit'
import { Id } from 'schemas'

const updateReducerTemplate = <ElementT extends ElementBase>(
  state: StateBase<ElementT>,
  { payload }: PayloadAction<UpdatePayloadBase<ElementT>>
) => {
  const newValue = [...state.value]
  const index = newValue.findIndex((r) => r.id === payload.id)
  const element = newValue[index]

  if (!element) {
    throw new Error('Missing element')
  }

  let update: UpdateReturn<ElementT>
  if (typeof payload.update === 'function') {
    update = payload.update(element)
  } else {
    // eslint-disable-next-line prefer-destructuring
    update = payload.update
  }

  const updatedElement: ElementT = {
    ...element,
    ...update,
  }
  newValue[index] = updatedElement

  state.value = newValue
}

type ElementBase = { id: Id }
type StateBase<ElementT extends ElementBase> = { value: Array<ElementT> }

type UpdateReturn<ElementT extends ElementBase> = Partial<
  Omit<ElementT, keyof ElementBase>
>
type UpdatePayloadBase<ElementT extends ElementBase> = ElementBase & {
  update:
    | UpdateReturn<ElementT>
    | ((currentElement: ElementT) => UpdateReturn<ElementT>)
}

export default updateReducerTemplate
