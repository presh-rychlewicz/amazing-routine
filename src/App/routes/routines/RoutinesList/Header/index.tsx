import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { HeaderGeneric } from '../../../../../components'
import { useNavigate } from '../../../../../hooks'
import { SingleRoutineStatuses } from '../../../../../store/reducers/routines/types'
import { routes } from '../../../../../types'
import SortIcon from '@mui/icons-material/Sort'
import Filters from './Filters'
import Sorting from './Sorting'

type Props = {
  selectedStatuses: Array<SingleRoutineStatuses>
  setSelectedStatuses: Dispatch<SetStateAction<Props['selectedStatuses']>>
}

const Header: FC<Props> = ({ selectedStatuses, setSelectedStatuses }) => {
  const navigate = useNavigate()
  const [shouldShowFilters, setShouldShowFilters] = useState(false)
  const [shouldShowSorting, setShouldShowSorting] = useState(false)

  return (
    <>
      <HeaderGeneric
        topLeft={{
          type: 'BUTTON',
          label: 'New',
          onClick: () => navigate(routes.routines.children.add.absolute),
        }}
        topRight={[
          {
            type: 'ICON_BUTTON',
            icon: <SortIcon />,
            variant: shouldShowSorting ? 'solid' : 'plain',
            onClick: () => setShouldShowSorting((prev) => !prev),
          },
          {
            type: 'ICON_BUTTON',
            icon: <FilterAltIcon />,
            variant: shouldShowFilters ? 'solid' : 'plain',
            onClick: () => setShouldShowFilters((prev) => !prev),
          },
        ]}
      />

      {shouldShowSorting && <Sorting />}

      {shouldShowFilters && (
        <Filters
          selectedStatuses={selectedStatuses}
          setSelectedStatuses={setSelectedStatuses}
        />
      )}
    </>
  )
}

export default Header
