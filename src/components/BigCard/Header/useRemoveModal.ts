import type { OptionsGenericElement } from 'components'
import { useModal } from 'hooks'

const useRemoveModal = () => {
  const { isModalVisible, setIsModalVisible } = useModal()

  const removeOption: OptionsGenericElement = {
    children: 'Delete',
    onClick: () => setIsModalVisible(true),
  }

  return {
    isModalVisible,
    removeOption,
    setIsModalVisible,
  }
}

export default useRemoveModal
