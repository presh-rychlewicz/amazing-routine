import FilterAltIcon from '@mui/icons-material/FilterAlt'
import SettingsIcon from '@mui/icons-material/Settings'
import SortIcon from '@mui/icons-material/Sort'
import { CommonElementProps } from 'components'
import { EntityType, SingleSettingCategoryEnum } from 'schemas'
import { EntityListFooterTemplateProps } from 'templates/EntityListFooterTemplate'
import { EntityListHeaderTemplateTemplateProps } from 'templates/EntityListHeaderTemplate'
import { SingleFilterProps } from 'templates/EntityListHeaderTemplate/Filters'
import useFilters, { UseFilters } from './useFilters'
import useModal from 'hooks/useModal'

const useListControls = <FiltersShapeT extends Record<string, any>>(
  params: Params<FiltersShapeT>
): UseListControlsReturn<FiltersShapeT> => {
  const filtersProps = useFilters(params.initialFiltersState)

  const settingsModalProps = useModal()
  const filtersModalProps = useModal()
  const sortingModalProps = useModal()

  const topRight: Array<CommonElementProps> = [
    {
      disabled: params.disableSorting,
      icon: <SortIcon />,
      onClick: sortingModalProps.toggle,
      type: 'ICON_BUTTON',
      variant: sortingModalProps.isOpen ? 'solid' : 'plain',
    },
    {
      icon: <FilterAltIcon />,
      onClick: filtersModalProps.toggle,
      type: 'ICON_BUTTON',
      variant: filtersModalProps.isOpen ? 'solid' : 'plain',
    },
    {
      icon: <SettingsIcon />,
      onClick: settingsModalProps.toggle,
      type: 'ICON_BUTTON',
      variant: settingsModalProps.isOpen ? 'solid' : 'plain',
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
      filtersModal: filtersModalProps,
      settingsModal: settingsModalProps,
      sortingModal: sortingModalProps,
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
