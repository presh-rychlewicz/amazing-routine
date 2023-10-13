import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { Button, IconButton, Stack } from '@mui/joy'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { SelectedStatuses } from '..'
import { View } from '../../..'
import Filters from './Filters'
import { useRouteContext } from '../../../../providers'

type Props = {
  selectedStatuses: SelectedStatuses
  setSelectedStatuses: Dispatch<SetStateAction<SelectedStatuses>>
}

const Header: FC<Props> = ({ selectedStatuses, setSelectedStatuses }) => {
  const { setView } = useRouteContext()
  const [shouldShowFilters, setShouldShowFilters] = useState(false)

  return (
    <Stack spacing={0.5}>
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <Button
          variant="soft"
          size="sm"
          onClick={() => setView(View.ADD_ROUTINE)}
        >
          New
        </Button>

        <IconButton
          variant={shouldShowFilters ? 'solid' : 'plain'}
          onClick={() => setShouldShowFilters((prev) => !prev)}
        >
          <FilterAltIcon />
        </IconButton>
      </Stack>

      {shouldShowFilters && (
        <Filters
          selectedStatuses={selectedStatuses}
          setSelectedStatuses={setSelectedStatuses}
        />
      )}
    </Stack>
  )
}

export default Header
