import { Dispatch, SetStateAction } from 'react'
import getIsChecked from './getIsChecked'

const getSingleFilterMultiTypeOption = <
  ValueT extends string,
  StateT extends Record<string, unknown>
>(
  value: ValueT,
  state: StateT,
  stateKey: keyof StateT,
  setState: Dispatch<SetStateAction<StateT>>
) => {
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
