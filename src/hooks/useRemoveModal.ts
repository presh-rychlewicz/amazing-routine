import { useState } from 'react'
import type { OptionsGenericElement } from 'components'

const useRemoveModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const option: OptionsGenericElement = {
    children: 'Delete',
    onClick: () => setIsModalVisible(true),
  }

  return {
    isModalVisible,
    removeOption: option,
    setIsModalVisible,
  }
}

export default useRemoveModal
