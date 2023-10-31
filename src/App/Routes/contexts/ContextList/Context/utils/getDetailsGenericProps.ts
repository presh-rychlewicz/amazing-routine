import { DetailsElem } from 'components'
import { UseStoreState } from 'hooks/useStoreState'
import { SingleContext } from 'schemas'

const getDetailsGenericProps = (
  context: SingleContext,
  storeState: UseStoreState
) => {
  const rawData: Array<DetailsElem> = [
    {
      label: 'ID',
      value: context.id,
    },
    {
      label: 'NAME',
      value: context.name,
    },
    {
      label: 'STATUS',
      value: context.status,
    },
  ]

  const generatedData: Array<DetailsElem> = [
    {
      label: 'TASK COUNT',
      value: storeState.getTasksByContextId(context.id).length,
    },
  ]

  return {
    generatedData,
    rawData,
  }
}

export default getDetailsGenericProps
