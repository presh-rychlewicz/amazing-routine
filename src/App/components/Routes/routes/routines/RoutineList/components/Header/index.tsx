import { HeaderGeneric } from 'components'
import { paths } from 'config'
import { useListControls, useNavigate } from 'hooks'
import { Dispatch, FC, SetStateAction } from 'react'
import { RoutineListFilters } from 'schemas'
import Filters from './Filters'
import Sorting from './Sorting'

type Props = {
  filters: RoutineListFilters
  setFilters: Dispatch<SetStateAction<Props['filters']>>
}

const Header: FC<Props> = ({ filters, setFilters }) => {
  const navigate = useNavigate()
  const { shouldShowSorting, shouldShowFilters, toggleFilters, topRight } =
    useListControls(true, undefined, true)

  return (
    <>
      <HeaderGeneric
        topLeft={{
          label: 'New',
          onClick: () => navigate(paths.routines.children.add.absolute),
          type: 'BUTTON',
        }}
        topRight={topRight}
      />

      {shouldShowSorting && <Sorting />}

      <Filters
        shouldShowFilters={shouldShowFilters}
        toggleFilters={toggleFilters}
        filters={filters}
        setFilters={setFilters}
      />
    </>
  )
}

export default Header
