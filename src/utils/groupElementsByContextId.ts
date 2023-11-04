import { ONE } from 'config'
import { GroupedElement } from 'schemas'

const groupElementsByContextId = <ElementT extends ElementBase>(
  elements: Array<ElementT>
): Array<GroupedElement<ElementT>> =>
  // @ts-expect-error
  [...new Set(elements.map((e) => e.contextId))].map(
    (c): GroupedElement<ElementT> => {
      const groupElements = elements.filter((e) => e.contextId === c)
      const groupElementCount = groupElements.length

      return {
        elements: groupElements,
        groupName: c,
        hasElements: !!groupElementCount,
        hasMultipleElements: groupElementCount > ONE,
      }
    }
  )

type ElementBase = { contextId?: string }

export default groupElementsByContextId
