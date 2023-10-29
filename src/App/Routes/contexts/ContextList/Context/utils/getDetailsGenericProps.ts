import { DetailsElem } from 'components'
import { SingleContext } from 'schemas'

const getDetailsGenericProps = (context: SingleContext) => {
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
  const generatedData: Array<DetailsElem> = []

  return {
    generatedData,
    rawData,
  }
}

export default getDetailsGenericProps
