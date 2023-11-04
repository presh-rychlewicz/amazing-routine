type GroupedElement<ElementT extends ElementBase> = {
  groupName: string
  hasMultipleElements: boolean
  hasElements: boolean
  elements: Array<ElementT>
}

type ElementBase = {}

export type { GroupedElement }
