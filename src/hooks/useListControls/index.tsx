import FilterAltIcon from '@mui/icons-material/FilterAlt'
import SettingsIcon from '@mui/icons-material/Settings'
import SortIcon from '@mui/icons-material/Sort'
import { CommonElementProps } from 'components'
import { useState } from 'react'
import { EntityType, SingleSettingCategoryEnum } from 'schemas'
import { EntityListFooterTemplateProps } from 'templates/EntityListFooterTemplate'
import { EntityListHeaderTemplateTemplateProps } from 'templates/EntityListHeaderTemplate'
import { SingleFilterProps } from 'templates/EntityListHeaderTemplate/Filters'
import useFilters, { UseFilters } from './useFilters'

const useListControls = <FiltersShapeT extends Record<string, any>>(
  params: Params<FiltersShapeT>
): UseListControlsReturn<FiltersShapeT> => {
  const filtersProps = useFilters(params.initialFiltersState)
  const [visibility, setVisibility] = useState({
    filters: false,
    settings: false,
    sorting: false,
  })

  const shouldShowFilters = visibility.filters
  const shouldShowSettings = visibility.settings
  const shouldShowSorting = visibility.sorting

  const toggleVisibility = (key: keyof typeof visibility) => () =>
    setVisibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  const toggleFilters = toggleVisibility('filters')
  const toggleSorting = toggleVisibility('sorting')
  const toggleSettings = toggleVisibility('settings')

  const topRight: Array<CommonElementProps> = [
    {
      disabled: params.disableSorting,
      icon: <SortIcon />,
      onClick: () => toggleSorting(),
      type: 'ICON_BUTTON',
      variant: shouldShowSorting ? 'solid' : 'plain',
    },
    {
      icon: <FilterAltIcon />,
      onClick: () => toggleFilters(),
      type: 'ICON_BUTTON',
      variant: shouldShowFilters ? 'solid' : 'plain',
    },
    {
      icon: <SettingsIcon />,
      onClick: () => toggleSettings(),
      type: 'ICON_BUTTON',
      variant: shouldShowSettings ? 'solid' : 'plain',
    },
  ]

  return {
    filters: filtersProps.filters,
    listBodyProps: {
      component: 'main',
      emptyMessage: `No ${params.entityType}s yet:(`,
    },
    listFooterProps: {
      entityType: params.entityType,
      shouldDisableAddButton: params.disableAddButton ?? false,
    },
    listHeaderProps: {
      entityType: params.entityType,
      filtersConfig: params.filtersConfigFn(
        filtersProps.filters,
        filtersProps.setFilters
      ),
      shouldShowFilters,
      shouldShowSettings,
      shouldShowSorting,
      toggleFilters,
      toggleSettings,
      toggleSorting,
      topRight,
    },
  }
}

type Params<FiltersShapeT> = {
  entityType: EntityType
  disableSorting?: boolean
  disableAddButton?: boolean
  initialFiltersState: FiltersShapeT
  category: SingleSettingCategoryEnum
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
  listFooterProps: EntityListFooterTemplateProps
  listHeaderProps: EntityListHeaderTemplateTemplateProps
} & Pick<UseFilters<FiltersShapeT>, 'filters'>

export default useListControls
export type { UseListControlsReturn }
