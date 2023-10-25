import { CommonElementProps, HeaderGeneric } from 'components'
// import Sorting from './Sorting'
import Filters, { SingleFilterProps } from './Filters'

type EntityListHeaderTemplateTemplateProps = {
  shouldShowFilters: boolean
  shouldShowSorting: boolean
  toggleFilters: () => void
  topRight: Array<CommonElementProps>
  filtersConfig: Array<SingleFilterProps>
}

const EntityListHeaderTemplateTemplate = (
  props: EntityListHeaderTemplateTemplateProps
) => (
  <>
    <HeaderGeneric topRight={props.topRight} />

    {/* {props.shouldShowSorting && <Sorting />} */}

    <Filters
      shouldShowFilters={props.shouldShowFilters}
      onClose={props.toggleFilters}
      filters={props.filtersConfig}
    />
  </>
)

export default EntityListHeaderTemplateTemplate
export type { EntityListHeaderTemplateTemplateProps }
