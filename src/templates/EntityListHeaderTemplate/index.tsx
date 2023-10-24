import { HeaderGeneric } from 'components'
import { paths } from 'config'
import { useNavigate } from 'hooks'
// import Sorting from './Sorting'
import { UseListControlsReturn } from 'hooks/useListControls'
import FiltersTemplate from 'templates/FiltersTemplate'

type Props<FiltersShapeT> = UseListControlsReturn<FiltersShapeT>

function EntityListHeaderTemplateTemplate<FiltersShapeT>(
  props: Props<FiltersShapeT>
) {
  const navigate = useNavigate()

  return (
    <>
      <HeaderGeneric
        topLeft={{
          disabled: props.shouldDisableAddButton,
          label: 'New',
          onClick: () =>
            navigate(paths[`${props.entityType}s`].children.add.absolute),
          type: 'BUTTON',
        }}
        topRight={props.topRight}
      />

      {/* {props.shouldShowSorting && <Sorting />} */}

      <FiltersTemplate
        shouldShowFilters={props.shouldShowFilters}
        onClose={props.toggleFilters}
        filters={props.filtersConfig}
      />
    </>
  )
}

export default EntityListHeaderTemplateTemplate
