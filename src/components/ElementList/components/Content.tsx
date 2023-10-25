import { Stack } from '@mui/joy'
import { ElementType, ReactNode } from 'react'

type ElementListProps<T extends ElementBase> = ElementListPropsBase<T> & {
  hasAnyTitle: boolean
}

function ElementList<ElementT extends ElementBase>({
  elements,
  renderElement,
  spacingBetweenElements = 'small',
  component,
  hasAnyTitle,
}: ElementListProps<ElementT>) {
  return (
    <Stack
      width="100%"
      {...(!hasAnyTitle && { component })}
      spacing={spacingBetweenElementsMapping[spacingBetweenElements]}
    >
      {elements.map((routine, index, array) =>
        renderElement(routine, index, array)
      )}
    </Stack>
  )
}

const spacingBetweenElementsMapping: Record<SpacingBetweenElements, number> = {
  medium: 2,
  small: 1,
  tiny: 0.5,
}

type SpacingBetweenElements = 'tiny' | 'small' | 'medium'
type ElementBase = unknown

type ElementListPropsBase<T extends ElementBase> = {
  elements: Array<T>
  gridArea?: string
  renderElement: (elementProps: T, index: number, array: Array<T>) => ReactNode
  spacingBetweenElements?: SpacingBetweenElements
  component?: ElementType<any>
}

export default ElementList
export type { ElementListPropsBase }
