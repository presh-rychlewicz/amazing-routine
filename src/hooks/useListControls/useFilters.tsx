import { Dispatch, SetStateAction, useState } from 'react'

function useFilters<ShapeT extends Record<string, any>>(
  initialState: ShapeT
): UseFilters<ShapeT> {
  const [filters, setFilters] = useState<ShapeT>(initialState)

  return {
    filters,
    setFilters,
  }
}

type UseFilters<ShapeT> = {
  filters: ShapeT
  setFilters: Dispatch<SetStateAction<ShapeT>>
}

export default useFilters
export type { UseFilters }
