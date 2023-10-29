import { HeaderGeneric } from 'components'
import { paths } from 'config'
import { useNavigate } from 'hooks'
import { FC } from 'react'
import { EntityType } from 'schemas'

type AddFormHeaderTemplateProps =
  | {
      entityType: EntityType
      returnPath?: undefined
    }
  | {
      entityType?: undefined
      returnPath: string
    }

const AddFormHeaderTemplate: FC<AddFormHeaderTemplateProps> = (props) => {
  const navigate = useNavigate()
  const pathToReturn = props.entityType
    ? paths[`${props.entityType}s`].children.index.absolute
    : props.returnPath

  return (
    <HeaderGeneric
      topLeft={
        props.entityType && {
          content: `Add ${props.entityType}`,
          level: 'h4',
          type: 'TEXT',
        }
      }
      topRight={{
        onClick: () => navigate(pathToReturn),
        type: 'X_BUTTON',
      }}
    />
  )
}

export default AddFormHeaderTemplate
export type { AddFormHeaderTemplateProps }
