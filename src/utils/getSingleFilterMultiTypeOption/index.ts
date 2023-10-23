import { Dispatch, SetStateAction } from 'react'
import getIsChecked from './getIsChecked'

export function getSingleFilterMultiTypeOption<
  ValueT extends string,
  StateT extends Record<string, unknown>,
  StateKeyT extends keyof StateT
>(
  value: ValueT,
  state: StateT,
  stateKey: StateKeyT,
  setState: Dispatch<SetStateAction<StateT>>
) {
  type Alfa = Array<ValueT>

  const stateKeyValue = state[stateKey] as Alfa

  return {
    isChecked: getIsChecked(stateKeyValue, value),
    onChange: () => {
      setState((prev) => {
        const prevStateKeyValue = prev[stateKey] as Alfa
        const isOn = getIsChecked(prevStateKeyValue, value)

        let newStateKeyValue
        if (isOn) {
          newStateKeyValue = [...prevStateKeyValue].filter((e) => e !== value)
        } else {
          newStateKeyValue = [...prevStateKeyValue, value]
        }

        return {
          ...prev,
          [stateKey]: newStateKeyValue,
        }
      })
    },
    value,
  }
}

export default getSingleFilterMultiTypeOption
