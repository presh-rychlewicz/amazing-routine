import { FC } from 'react'
import DialogModalGeneric from '../../DialogModalGeneric'
import HeaderGeneric from '../../HeaderGeneric'
import OptionsGeneric, { OptionsGenericElement } from '../../OptionsGeneric'
import useRemoveModal from './useRemoveModal'

type HeaderProps = {
  entityName: string
  name: string
  onRemoveConfirm: () => void
  optionsBase: Array<OptionsGenericElement>
  canRemove: boolean
}

const Header: FC<HeaderProps> = ({
  onRemoveConfirm,
  entityName,
  optionsBase,
  name,
  canRemove,
}) => {
  const { removeOption, ...removeModalProps } = useRemoveModal()
  const options = [...optionsBase]

  if (canRemove) {
    options.push(removeOption)
  }

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
            <DialogModalGeneric
              onConfirm={onRemoveConfirm}
              message={`Are you sure you want to remove this ${entityName}?`}
              {...removeModalProps}
              confirmButtonLabel="Remove"
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
