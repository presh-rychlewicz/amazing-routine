import { Stack } from '@mui/joy'
import HeaderGeneric, { CommonElementProps } from 'components/HeaderGeneric'
import EmptyState from '../EmptyState'
import { Content } from './components'
import { ElementListPropsBase } from './components/Content'
import { PropsWithChildren } from 'react'

type Props<T extends ElementBase> = ElementListPropsBase<T> & {
  emptyStateMessage?: string
  title?: string
  subtitle?: string
  shouldShowEmptyState?: boolean
  right?: CommonElementProps | Array<CommonElementProps>
}

function ElementList<ElementT extends ElementBase>({
  elements,
  renderElement,
  emptyStateMessage,
  spacingBetweenElements = 'small',
  title,
  component,
  subtitle,
  shouldShowEmptyState = true,
  right,
}: PropsWithChildren<Props<ElementT>>) {
  const hasAnyelements = !!elements.length
  if (!hasAnyelements) {
    if (shouldShowEmptyState) {
      return <EmptyState message={emptyStateMessage} />
    }

    return null
  }

  const hasAnyTitle = !!(title || subtitle || right)
  const content = (
    <Content
      elements={elements}
      renderElement={renderElement}
      spacingBetweenElements={spacingBetweenElements}
      component={component}
      hasAnyTitle={hasAnyTitle}
    />
  )

  if (!hasAnyTitle) {
    return content
  }

  return (
    <Stack {...(component && { component })} width="100%" spacing={1}>
      <HeaderGeneric
        {...(title && {
          topLeft: {
            content: title,
            level: 'title-sm',
            type: 'TEXT',
          },
        })}
        {...(subtitle && {
          bottomLeft: {
            content: subtitle,
            level: 'body-xs',
            type: 'TEXT',
          },
        })}
        mergedRight
        right={right}
      />

      {content}
    </Stack>
  )
}

type ElementBase = unknown

export default ElementList
