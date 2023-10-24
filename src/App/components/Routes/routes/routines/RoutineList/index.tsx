import { ElementList, Route } from 'components'
import { useListControls, useStoreState } from 'hooks'
import { FC } from 'react'
import { RoutineListFilters, singleRoutineStatusEnum } from 'schemas'
import { EntityListHeaderTemplate } from 'templates'
import { getSingleFilterMultiTypeOption } from 'utils'
import Routine from './Routine'

const RoutineList: FC = () => {
  const storeState = useStoreState()

  const useListControlsReturn = useListControls({
    disableOptions: true,
    disableSorting: true,
    entityType: 'routine',
    filtersConfigFn: (filters, setFilters) => [
      {
        label: 'Status',
        options: singleRoutineStatusEnum.options.map((o) =>
          getSingleFilterMultiTypeOption(o, filters, 'status', setFilters)
        ),
        type: 'MULTI',
      },
    ],
    initialFiltersState,
  })
  const routines = storeState.getRoutinesByStatus(
    useListControlsReturn.filters.status
  )

  return (
    <Route>
      <EntityListHeaderTemplate {...useListControlsReturn} />

      <ElementList
        elements={routines}
        emptyStateMessage={useListControlsReturn.emptyMessage}
        renderElement={(r) => <Routine key={r.id} routine={r} />}
      />
    </Route>
  )
}

export const initialFiltersState: RoutineListFilters = {
  status: [singleRoutineStatusEnum.enum.ACTIVE],
}

export default RoutineList
