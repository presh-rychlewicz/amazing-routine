import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { SelectedStatuses } from '..'
import { HeaderGeneric } from '../../../../../components'
import { useNavigate } from '../../../../../hooks'
import { routes } from '../../../../../types'
import Filters from './Filters'

type Props = {
  selectedStatuses: SelectedStatuses
  setSelectedStatuses: Dispatch<SetStateAction<SelectedStatuses>>
}

const Header: FC<Props> = ({ selectedStatuses, setSelectedStatuses }) => {
  const navigate = useNavigate()
  const [shouldShowFilters, setShouldShowFilters] = useState(false)

  return (
    <>
      <HeaderGeneric
        left={{
          type: 'BUTTON',
          label: 'New',
          onClick: () => navigate(routes.routines.children.add.absolute),
        }}
        right={{
          type: 'ICON_BUTTON',
          icon: <FilterAltIcon />,
          variant: shouldShowFilters ? 'solid' : 'plain',
          onClick: () => setShouldShowFilters((prev) => !prev),
        }}
      />

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
