import { Dispatch, SetStateAction } from 'react'

const getSingleFilterBooleanType = <
  StateT extends Record<string, unknown>,
  StateKeyT extends keyof StateT
>(
  stateKey: StateKeyT,
  setState: Dispatch<SetStateAction<StateT>>
) => {
  setState((prev) => ({
    ...prev,
    [stateKey]: !prev[stateKey],
  }))
}

export default getSingleFilterBooleanType
