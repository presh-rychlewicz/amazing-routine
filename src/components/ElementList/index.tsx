import { Stack, Typography } from '@mui/joy'
import EmptyState from '../EmptyState'
import { Content } from './components'
import { ElementListPropsBase } from './components/Content'

type Props<T extends ElementBase> = ElementListPropsBase<T> & {
  emptyStateMessage?: string
  title?: string
  subtitle?: string
  shouldShowEmptyState?: boolean
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
}: Props<ElementT>) {
  const hasAnyelements = !!elements.length
  if (!hasAnyelements) {
    if (shouldShowEmptyState) {
      return <EmptyState message={emptyStateMessage} />
    }

    return null
  }

  const hasAnyTitle = !!(title || subtitle)
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
      <Stack>
        {title && <Typography level="title-sm">{title}</Typography>}
        {subtitle && <Typography level="body-xs">{subtitle}</Typography>}
      </Stack>

      {content}
    </Stack>
  )
}

type ElementBase = unknown

export default ElementList
