import { AddFormBodyTemplate } from 'templates/AddFormBodyTemplate'
import { AddOrEditFormHeaderTemplate } from 'templates/AddOrEditFormHeaderTemplate'

type UseAddFormReturn<ValuesT extends ValuesBase> = {
  bodyProps: AddFormBodyTemplate<ValuesT>
  headerProps: AddOrEditFormHeaderTemplate
}

type ValuesBase = Record<string, any>

export type { UseAddFormReturn }
