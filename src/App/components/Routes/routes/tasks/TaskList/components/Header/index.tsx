import { HeaderGeneric } from 'components'
import { paths } from 'config'
import { useListControls, useNavigate } from 'hooks'
import { Dispatch, FC, SetStateAction } from 'react'
import { TaskListFilters } from 'schemas'
import Filters from './Filters'

type Props = {
  filters: TaskListFilters
  setFilters: Dispatch<SetStateAction<Props['filters']>>
}

const Header: FC<Props> = ({ filters, setFilters }) => {
  const navigate = useNavigate()
  const { topRight, shouldShowFilters, toggleFilters } = useListControls(
    true,
    false,
    true
  )

  return (
    <>
      <HeaderGeneric
        topLeft={{
          disabled: true,
          label: 'New',
          onClick: () => navigate(paths.tasks.children.add.absolute),
          type: 'BUTTON',
        }}
        topRight={topRight}
      />

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
