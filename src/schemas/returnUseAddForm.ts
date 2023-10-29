import { AddFormBodyTemplateProps } from 'templates/AddFormBodyTemplate'
import { AddFormHeaderTemplateProps } from 'templates/AddFormHeaderTemplate'

type UseAddFormReturn<ValuesT extends Record<string, any>> = {
  bodyProps: AddFormBodyTemplateProps<ValuesT>
  headerProps: AddFormHeaderTemplateProps
}

export type { UseAddFormReturn }
