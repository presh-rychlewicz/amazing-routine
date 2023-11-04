import { CommonElementProps, HeaderGeneric } from 'components'
// import Sorting from './Sorting'
import { UseModalReturn } from 'hooks'
import { EntityType, SingleSettingCategoryEnum } from 'schemas'
import SettingsDrawerTemplate from 'templates/SettingsDrawerTemplate'
import Filters, { SingleFilterProps } from './Filters'

type EntityListHeaderTemplateTemplateProps = {
  topRight: Array<CommonElementProps>
  filtersConfig: Array<SingleFilterProps>
  entityType: EntityType
  filtersModal: UseModalReturn
  settingsModal: UseModalReturn
  sortingModal: UseModalReturn
}

const EntityListHeaderTemplateTemplate = (
  props: EntityListHeaderTemplateTemplateProps
) => {
  const category =
    `${props.entityType.toUpperCase()}_LIST` as SingleSettingCategoryEnum

  return (
    <>
      <HeaderGeneric topRight={props.topRight} />

      {/* <Sorting {...props.sortingModal} /> */}

      <SettingsDrawerTemplate
        {...props.settingsModal}
        categories={[category]}
      />

      <Filters {...props.filtersModal} filters={props.filtersConfig} />
    </>
  )
}

export default EntityListHeaderTemplateTemplate
export type { EntityListHeaderTemplateTemplateProps }
