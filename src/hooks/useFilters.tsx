import { useState } from 'react'

function useFilters<ShapeT extends Record<string, any>>(initialState: ShapeT) {
  const [filters, setFilters] = useState<ShapeT>(initialState)

  return {
    filters,
    setFilters,
  }
}

export default useFilters
