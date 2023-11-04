import { useState } from 'react'

const useModal = (): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(false)

  return {
    hide: () => setIsOpen(false),
    isOpen,
    show: () => setIsOpen(true),
    toggle: () => setIsOpen((prev) => !prev),
  }
}

type UseModalReturn = {
  isOpen: boolean
  toggle: () => void
  show: () => void
  hide: () => void
}

export default useModal
export type { UseModalReturn }
