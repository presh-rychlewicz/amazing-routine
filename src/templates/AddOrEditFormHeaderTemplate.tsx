import { HeaderGeneric } from 'components'
import { paths } from 'config'
import { useNavigate } from 'hooks'
import { FC } from 'react'
import { EntityType } from 'schemas'

type AddOrEditFormHeaderTemplate = {
  isEdit: boolean
} & (
  | {
      entityType: EntityType
      returnPath?: undefined
    }
  | {
      entityType?: undefined
      returnPath: string
    }
)

const AddOrEditFormHeaderTemplate: FC<AddOrEditFormHeaderTemplate> = ({
  isEdit,
  ...props
}) => {
  const navigate = useNavigate()
  const pathToReturn = props.entityType
    ? paths[`${props.entityType}s`].children.index.absolute
    : props.returnPath
  const title = `${isEdit ? 'Edit' : 'Add'} ${props.entityType}`

  return (
    <HeaderGeneric
      topLeft={
        props.entityType && {
          content: title,
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

export default AddOrEditFormHeaderTemplate
export type { AddOrEditFormHeaderTemplate }
