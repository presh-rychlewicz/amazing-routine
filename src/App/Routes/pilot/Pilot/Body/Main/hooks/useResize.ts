/* eslint-disable @typescript-eslint/no-magic-numbers */
import { useEffect, useRef, useState } from 'react'

const useResize = () => {
  const [elementsWidth, setElementsWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (ref) {
        if (ref.current) {
          const { clientWidth } = ref.current
          const elementsWidth = Math.min(CLOCK_MAX_SIZE, clientWidth) - 16

          setElementsWidth(elementsWidth)
        }
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    elementsWidth,
    ref,
  }
}

const CLOCK_MAX_SIZE = 400

export default useResize
