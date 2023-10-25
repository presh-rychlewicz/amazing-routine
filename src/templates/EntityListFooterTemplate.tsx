import { FooterGeneric } from 'components'
import { paths } from 'config'
import { useNavigate } from 'hooks'
import { FC } from 'react'
import { EntityType } from 'schemas'

type EntityListFooterTemplateProps = {
  shouldDisableAddButton: boolean
  entityType: EntityType
}
const EntityListFooterTemplate: FC<EntityListFooterTemplateProps> = (props) => {
  const navigate = useNavigate()

  return (
    <FooterGeneric
      largeButton={{
        color: 'success',
        disabled: props.shouldDisableAddButton,
        fullWidth: true,
        label: 'New',
        onClick: () =>
          navigate(paths[`${props.entityType}s`].children.add.absolute),
      }}
    />
  )
}

export default EntityListFooterTemplate
export type { EntityListFooterTemplateProps }
