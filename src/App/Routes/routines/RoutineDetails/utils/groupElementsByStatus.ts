import { ONE } from 'config'
import { GroupedElement, SingleTask } from 'schemas'

const groupElementsByStatus = <ElementT extends ElementBase>(
  elements: Array<ElementT>
): Array<GroupedElement<ElementT>> =>
  // @ts-expect-error
  [...new Set(elements.map((e) => e.routineMeta?.status))].map(
    (s): GroupedElement<ElementT> => {
      const groupElements = elements.filter((e) => e.routineMeta?.status === s)
      const groupElementCount = groupElements.length

      return {
        elements: groupElements,
        groupName: s,
        hasElements: !!groupElementCount,
        hasMultipleElements: groupElementCount > ONE,
      }
    }
  )

type ElementBase = SingleTask

export default groupElementsByStatus
