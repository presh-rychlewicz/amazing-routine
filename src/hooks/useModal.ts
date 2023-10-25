import { Dispatch, SetStateAction, useState } from 'react'

const useModal = (): UseModalReturn => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return {
    isModalVisible,
    setIsModalVisible,
  }
}

type UseModalReturn = {
  isModalVisible: boolean
  setIsModalVisible: Dispatch<SetStateAction<boolean>>
}

export default useModal
export type { UseModalReturn }
