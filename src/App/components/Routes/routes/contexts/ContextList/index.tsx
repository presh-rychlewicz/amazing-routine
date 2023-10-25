import { ElementList, Route } from 'components'
import { useListControls, useStoreState } from 'hooks'
import { ContextsListFilters, singleContextStatusEnum } from 'schemas'
import { EntityListFooterTemplate, EntityListHeaderTemplate } from 'templates'
import { getSingleFilterMultiTypeOption } from 'utils'
import Context from './Context'

const ContextList = () => {
  const storeState = useStoreState()
  const { listBodyProps, listFooterProps, listHeaderProps, filters } =
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

  const contexts = storeState.getContextsByStatus(filters.status)

  return (
    <Route>
      <EntityListHeaderTemplate {...listHeaderProps} />

      <ElementList
        {...listBodyProps}
        elements={contexts}
        renderElement={(c) => <Context key={c.id} context={c} />}
      />

      <EntityListFooterTemplate {...listFooterProps} />
    </Route>
  )
}

const initialFiltersState: ContextsListFilters = {
  status: [singleContextStatusEnum.enum.ACTIVE],
}

export default ContextList
