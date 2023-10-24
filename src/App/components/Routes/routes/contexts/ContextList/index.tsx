import { ElementList, Route } from 'components'
import { useListControls, useStoreState } from 'hooks'
import { ContextsListFilters, singleContextStatusEnum } from 'schemas'
import { EntityListHeaderTemplate } from 'templates'
import { getSingleFilterMultiTypeOption } from 'utils'
import Context from './Context'

const ContextList = () => {
  const storeState = useStoreState()
  const { listBodyProps, listHeaderProps, ...useListControlsReturn } =
    useListControls({
      disableOptions: true,
      disableSorting: true,
      entityType: 'context',
      filtersConfigFn: (filters, setFilters) => [
        {
          label: 'Status',
          options: singleContextStatusEnum.options.map((o) =>
            getSingleFilterMultiTypeOption(o, filters, 'status', setFilters)
          ),
          type: 'MULTI',
        },
      ],
      initialFiltersState,
    })

  const contexts = storeState.getContextsByStatus(
    useListControlsReturn.filters.status
  )

  return (
    <Route>
      <EntityListHeaderTemplate {...listHeaderProps} />

      <ElementList
        elements={contexts}
        {...listBodyProps}
        renderElement={(c) => <Context key={c.id} context={c} />}
      />
    </Route>
  )
}

const initialFiltersState: ContextsListFilters = {
  status: [singleContextStatusEnum.enum.ACTIVE],
}

export default ContextList
