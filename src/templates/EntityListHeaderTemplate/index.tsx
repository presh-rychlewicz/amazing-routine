import { CommonElementProps, HeaderGeneric } from 'components'
// import Sorting from './Sorting'
import { EntityType, SingleSettingCategoryEnum } from 'schemas'
import Filters, { SingleFilterProps } from './Filters'
import Settings from './Settings'

type EntityListHeaderTemplateTemplateProps = {
  shouldShowFilters: boolean
  shouldShowSorting: boolean
  shouldShowSettings: boolean
  toggleFilters: () => void
  toggleSettings: () => void
  toggleSorting: () => void
  topRight: Array<CommonElementProps>
  filtersConfig: Array<SingleFilterProps>
  entityType: EntityType
}

const EntityListHeaderTemplateTemplate = (
  props: EntityListHeaderTemplateTemplateProps
) => {
  const category =
    `${props.entityType.toUpperCase()}_LIST` as SingleSettingCategoryEnum

  return (
    <>
      <HeaderGeneric topRight={props.topRight} />

      {/* {props.shouldShowSorting && <Sorting />} */}

      <Settings
        category={category}
        isModalVisible={props.shouldShowSettings}
        setIsModalVisible={props.toggleSettings}
      />

      <Filters
        isModalVisible={props.shouldShowFilters}
        setIsModalVisible={props.toggleFilters}
        filters={props.filtersConfig}
      />
    </>
  )
}

export default EntityListHeaderTemplateTemplate
export type { EntityListHeaderTemplateTemplateProps }
