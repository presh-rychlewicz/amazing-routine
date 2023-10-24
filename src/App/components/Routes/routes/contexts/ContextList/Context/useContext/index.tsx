import { BigCardProps, OptionsGenericElement } from 'components'
import { useStoreDispatch } from 'hooks'
import { SingleContext, singleContextStatusEnum } from 'schemas'
import getDetailsGenericProps from './getDetailsGenericProps'

const useContext = (context: SingleContext): BigCardProps => {
  const storeDispatch = useStoreDispatch()

  const optionsBase = ((): Array<OptionsGenericElement> => {
    const options: Array<OptionsGenericElement> = []

    return options
  })()

  const detailsGenericProps = getDetailsGenericProps(context)

  return {
    canRemove: context.status !== singleContextStatusEnum.enum.REMOVED,
    entityName: 'context',
    name: context.name,
    onRemoveConfirm: () => storeDispatch.contexts.remove({ id: context.id }),
    optionsBase,
    ...detailsGenericProps,
  }
}

export default useContext
