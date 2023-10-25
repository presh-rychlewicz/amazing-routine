import { ElementList, Route } from 'components'
import { useListControls, useStoreState } from 'hooks'
import { FC } from 'react'
import { RoutineListFilters, singleRoutineStatusEnum } from 'schemas'
import { EntityListFooterTemplate, EntityListHeaderTemplate } from 'templates'
import { getSingleFilterMultiTypeOption } from 'utils'
import Routine from './Routine'

const RoutineList: FC = () => {
  const storeState = useStoreState()

  const { listBodyProps, listFooterProps, listHeaderProps, filters } =
    useListControls({
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
  const routines = storeState.getRoutinesByStatus(filters.status)

  return (
    <Route>
      <EntityListHeaderTemplate {...listHeaderProps} />

      <ElementList
        {...listBodyProps}
        elements={routines}
        renderElement={(r) => <Routine key={r.id} routine={r} />}
      />

      <EntityListFooterTemplate {...listFooterProps} />
    </Route>
  )
}

export const initialFiltersState: RoutineListFilters = {
  status: [singleRoutineStatusEnum.enum.ACTIVE],
}

export default RoutineList
