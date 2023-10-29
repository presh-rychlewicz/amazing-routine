const getIsChecked = <
  ValueT extends string,
  StateT extends Record<string, Array<ValueT>>,
  StateKeyT extends keyof StateT
>(
  stateKeyValue: StateT[StateKeyT],
  value: ValueT
) => stateKeyValue.includes(value)

export default getIsChecked
