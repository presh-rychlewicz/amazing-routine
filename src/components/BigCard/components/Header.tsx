import { FC } from 'react'
import { useRemoveModal } from 'hooks'
import HeaderGeneric from '../../HeaderGeneric'
import OptionsGeneric, { OptionsGenericElement } from '../../OptionsGeneric'
import RemoveModalGeneric from '../../RemoveModalGeneric'

type HeaderProps = {
  entityName: string
  name: string
  onRemoveConfirm: () => void
  optionsBase: Array<OptionsGenericElement>
}

const Header: FC<HeaderProps> = ({
  onRemoveConfirm,
  entityName,
  optionsBase,
  name,
}) => {
  const { removeOption, ...removeModalProps } = useRemoveModal()
  const options = [...optionsBase, removeOption]

  return (
    <HeaderGeneric
      topLeft={{
        content: name,
        level: 'h4',
        type: 'TEXT',
      }}
      topRight={{
        content: (
          <OptionsGeneric options={options}>
            <RemoveModalGeneric
              onConfirm={onRemoveConfirm}
              message={`Are you sure you want to remove this ${entityName}?`}
              {...removeModalProps}
              confirmButtonLabel={`Remove ${entityName}`}
            />
          </OptionsGeneric>
        ),
        type: 'COMPONENT',
      }}
    />
  )
}

export default Header
export type { HeaderProps }
