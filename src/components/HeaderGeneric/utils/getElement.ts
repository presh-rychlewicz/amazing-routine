import handleSingleElement, { ElementVariant } from './handleSingleElement'

const getElement = (
  elementVariant: ElementVariant | Array<ElementVariant> | undefined
) => {
  if (
    !elementVariant ||
    (Array.isArray(elementVariant) && !elementVariant.length)
  ) {
    return null
  }

  const elements: ElementVariant[] = [elementVariant].flat()

  return elements.map((b) => handleSingleElement(b))
}

export default getElement
