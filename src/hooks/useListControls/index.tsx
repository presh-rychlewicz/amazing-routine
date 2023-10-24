import FilterAltIcon from '@mui/icons-material/FilterAlt'
import SettingsIcon from '@mui/icons-material/Settings'
import SortIcon from '@mui/icons-material/Sort'
import { CommonElementProps } from 'components'
import { useState } from 'react'
import useFilters, { UseFilters } from './useFilters'
import { SingleFilterProps } from 'templates/EntityListHeaderTemplate/Filters'
import { EntityType } from 'schemas'

function useListControls<FiltersShapeT extends Record<string, any>>(
  params: Params<FiltersShapeT>
): UseListControlsReturn<FiltersShapeT> {
  const filtersProps = useFilters(params.initialFiltersState)
  const [visibility, setVisibility] = useState({
    filters: false,
    options: false,
    sorting: false,
  })

  const shouldShowFilters = visibility.filters
  const shouldShowOptions = visibility.options
  const shouldShowSorting = visibility.sorting

  const toggleVisibility = (key: keyof typeof visibility) => () =>
    setVisibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  const toggleFilters = toggleVisibility('filters')
  const toggleSorting = toggleVisibility('sorting')
  const toggleOptions = toggleVisibility('options')

  const topRight: Array<CommonElementProps> = [
    {
      disabled: params.disableSorting,
      icon: <SortIcon />,
      onClick: () => toggleSorting(),
      type: 'ICON_BUTTON',
      variant: shouldShowSorting ? 'solid' : 'plain',
    },
    {
      disabled: params.disableFiltering,
      icon: <FilterAltIcon />,
      onClick: () => toggleFilters(),
      type: 'ICON_BUTTON',
      variant: shouldShowFilters ? 'solid' : 'plain',
    },
    {
      disabled: params.disableOptions,
      icon: <SettingsIcon />,
      onClick: () => toggleOptions(),
      type: 'ICON_BUTTON',
      variant: shouldShowOptions ? 'solid' : 'plain',
    },
  ]

  return {
    filters: filtersProps.filters,
    listBodyProps: {
      component: 'main',
      emptyMessage: `No ${params.entityType}s yet:(`,
    },
    listHeaderProps: {
      entityType: params.entityType,
      filtersConfig: params.filtersConfigFn(
        filtersProps.filters,
        filtersProps.setFilters
      ),
      shouldDisableAddButton: params.disableAddButton ?? false,
      shouldShowFilters,
      shouldShowSorting,
      toggleFilters,
      topRight,
    },
  }
}

type Params<FiltersShapeT> = {
  entityType: EntityType
  disableSorting?: boolean
  disableFiltering?: boolean
  disableOptions?: boolean
  disableAddButton?: boolean
  initialFiltersState: FiltersShapeT
  filtersConfigFn: (
    filters: UseFilters<FiltersShapeT>['filters'],
    setFilters: UseFilters<FiltersShapeT>['setFilters']
  ) => Array<SingleFilterProps>
}

type UseListControlsReturn<FiltersShapeT> = {
  listBodyProps: {
    emptyMessage: string
    component: 'main'
  }
  listHeaderProps: {
    shouldDisableAddButton: boolean
    shouldShowFilters: boolean
    shouldShowSorting: boolean
    toggleFilters: () => void
    topRight: Array<CommonElementProps>
    filtersConfig: ReturnType<Params<FiltersShapeT>['filtersConfigFn']>
  } & Pick<Params<FiltersShapeT>, 'entityType'>
} & Pick<UseFilters<FiltersShapeT>, 'filters'>

export default useListControls
export type { UseListControlsReturn }
