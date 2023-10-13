import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { Button, IconButton, Stack } from '@mui/joy'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { SelectedStatuses } from '..'
import AddNewRoutineModal from './AddNewRoutineModal'
import Filters from './Filters'

type Props = {
  selectedStatuses: SelectedStatuses
  setSelectedStatuses: Dispatch<SetStateAction<SelectedStatuses>>
}

const Header: FC<Props> = ({ selectedStatuses, setSelectedStatuses }) => {
  const [shouldShowFilters, setShouldShowFilters] = useState(false)
  const [isAddRoutineModalOpen, setIsAddRoutineModalOpen] = useState(false)

  useEffect(() => {
    if (isAddRoutineModalOpen) {
      setShouldShowFilters(false)
    }
  }, [isAddRoutineModalOpen])

  useEffect(() => {
    if (shouldShowFilters) {
      setIsAddRoutineModalOpen(false)
    }
  }, [shouldShowFilters])

  return (
    <Stack spacing={0.5}>
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <Button
          variant={isAddRoutineModalOpen ? 'solid' : 'soft'}
          size="sm"
          onClick={() => setIsAddRoutineModalOpen((prev) => !prev)}
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

      {isAddRoutineModalOpen && <AddNewRoutineModal />}
    </Stack>
  )
}

export default Header
