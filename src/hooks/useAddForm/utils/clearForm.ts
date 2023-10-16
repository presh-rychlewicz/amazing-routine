import { SetStateAction } from 'react'

function clearForm<ValuesT extends Record<string, unknown>>(
  setValues: (value: SetStateAction<ValuesT>) => void
) {
  setValues((prev) => {
    const entries = Object.entries(prev).map((entry) => [entry[0], ''])

    return Object.fromEntries(entries)
  })
  return 2
}

export default clearForm
