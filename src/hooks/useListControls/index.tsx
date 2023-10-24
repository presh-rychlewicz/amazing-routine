import FilterAltIcon from '@mui/icons-material/FilterAlt'
import SettingsIcon from '@mui/icons-material/Settings'
import SortIcon from '@mui/icons-material/Sort'
import { CommonElementProps } from 'components'
import { useState } from 'react'
import useFilters, { UseFilters } from './useFilters'
import { SingleFilterProps } from 'templates/FiltersTemplate'
import { EntityType } from 'schemas'

function useListControls<FiltersShapeT extends Record<string, any>>({
  disableSorting,
  disableFiltering,
  disableOptions,
  initialFiltersState,
  filtersConfigFn,
  disableAddButton,
  entityType,
}: Params<FiltersShapeT>): UseListControlsReturn<FiltersShapeT> {
  const filtersProps = useFilters(initialFiltersState)
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
      disabled: disableSorting,
      icon: <SortIcon />,
      onClick: () => toggleSorting(),
      type: 'ICON_BUTTON',
      variant: shouldShowSorting ? 'solid' : 'plain',
    },
    {
      disabled: disableFiltering,
      icon: <FilterAltIcon />,
      onClick: () => toggleFilters(),
      type: 'ICON_BUTTON',
      variant: shouldShowFilters ? 'solid' : 'plain',
    },
    {
      disabled: disableOptions,
      icon: <SettingsIcon />,
      onClick: () => toggleOptions(),
      type: 'ICON_BUTTON',
      variant: shouldShowOptions ? 'solid' : 'plain',
    },
  ]

  return {
    emptyMessage: `No ${entityType}s yet:(`,
    entityType,
    filtersConfig: filtersConfigFn(
      filtersProps.filters,
      filtersProps.setFilters
    ),
    shouldDisableAddButton: disableAddButton ?? false,
    shouldShowFilters,
    shouldShowSorting,
    toggleFilters,
    topRight,
    ...filtersProps,
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

type UseListControlsReturn<FiltersShapeT> = Pick<
  Params<FiltersShapeT>,
  'entityType'
> &
  UseFilters<FiltersShapeT> & {
    shouldDisableAddButton: boolean
    shouldShowFilters: boolean
    shouldShowSorting: boolean
    emptyMessage: string
    toggleFilters: () => void
    topRight: Array<CommonElementProps>
    filtersConfig: ReturnType<Params<FiltersShapeT>['filtersConfigFn']>
  }

export default useListControls
export type { UseListControlsReturn }
