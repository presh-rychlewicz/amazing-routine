import { CommonElementProps } from '../../CommonElement'

const getShouldShowElements = (elements?: Array<CommonElementProps>) =>
  !!(
    elements &&
    elements.length &&
    elements.some((b) => (b.isVisible !== undefined ? b.isVisible : true))
  )

export default getShouldShowElements
