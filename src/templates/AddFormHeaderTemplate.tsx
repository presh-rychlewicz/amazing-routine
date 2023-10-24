import { HeaderGeneric } from 'components'
import { paths } from 'config'
import { useNavigate } from 'hooks'
import { FC } from 'react'
import { EntityType } from 'schemas'

type Props = {
  entityType: EntityType
  returnPath?: string
}

const AddFormHeaderTemplate: FC<Props> = ({ entityType, returnPath }) => {
  const navigate = useNavigate()
  const pathToReturn =
    returnPath ?? paths[`${entityType}s`].children.index.absolute

  return (
    <HeaderGeneric
      topLeft={{
        content: `Add ${entityType}`,
        level: 'h4',
        type: 'TEXT',
      }}
      topRight={{
        onClick: () => navigate(pathToReturn),
        type: 'X_BUTTON',
      }}
    />
  )
}

export default AddFormHeaderTemplate
