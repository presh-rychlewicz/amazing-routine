import type { OptionsGenericElement } from 'components'
import { useModal } from 'hooks'

const useRemoveModal = () => {
  const modalProps = useModal()
  const removeOption: OptionsGenericElement = {
    children: 'Delete',
    onClick: modalProps.show,
  }

  return {
    ...modalProps,
    removeOption,
  }
}

export default useRemoveModal
