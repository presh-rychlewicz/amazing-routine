import { SetStateAction } from 'react'

function clearForm<ValuesT extends Record<string, unknown>>(
  setValues: (value: SetStateAction<ValuesT>) => void
) {
  setValues((prev) => {
    const entries = Object.entries(prev).map(([key]) => [key, ''])

    return Object.fromEntries(entries)
  })
}

export default clearForm
