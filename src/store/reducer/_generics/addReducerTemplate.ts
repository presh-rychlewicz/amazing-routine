import { PayloadAction } from '@reduxjs/toolkit'

const addReducerTemplate =
  <ElementT extends ElementBase, KeyT extends KeyBase<ElementT>>(
    missing: Missing<ElementT, KeyT>
  ) =>
  (
    state: StateBase<ElementT>,
    { payload }: PayloadAction<PayloadActionType<ElementT, KeyT>>
  ) => {
    let missingReturn: MissingReturn<ElementT, KeyT>
    if (typeof missing === 'function') {
      missingReturn = missing(payload, state)
    } else {
      missingReturn = missing
    }

    // @ts-ignore
    const newContext: ElementT = {
      ...payload,
      ...missingReturn,
    }
    const newValue = [...state.value, newContext]
    state.value = newValue
  }

type ElementBase = {}
type KeyBase<ElementT extends ElementBase> = keyof ElementT
type StateBase<ElementT extends ElementBase> = {
  value: Array<ElementT>
}
type MissingReturn<
  ElementT extends ElementBase,
  KeyT extends KeyBase<ElementT>
> = Pick<ElementT, KeyT>

type PayloadActionType<
  ElementT extends ElementBase,
  KeyT extends KeyBase<ElementT>
> = Omit<ElementT, KeyT>
type Missing<ElementT extends ElementBase, KeyT extends KeyBase<ElementT>> =
  | MissingReturn<ElementT, KeyT>
  | ((
      payload: PayloadActionType<ElementT, KeyT>,
      state: StateBase<ElementT>
    ) => MissingReturn<ElementT, KeyT>)
export default addReducerTemplate
