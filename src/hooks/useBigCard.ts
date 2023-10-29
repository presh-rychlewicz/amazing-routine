import {
  BigCardProps,
  DetailsGenericProps,
  OptionsGenericElement,
} from 'components'
import { EntityType, Id } from 'schemas'
import useStoreDispatch from './useStoreDispatch'
import useStoreState, { UseStoreState } from './useStoreState'
import useNavigate from './useNavigate'

const useBigCard = <ElementT extends ElementBase>({
  element,
  entityName,
  getDetailsGenericProps,
  getOptionsBase,
}: UseGetBigCardProps<ElementT>): BigCardProps => {
  const navigate = useNavigate()
  const storeState = useStoreState()
  const storeDispatch = useStoreDispatch()

  const shouldDisplayDetails =
    !!storeState.getSettingsById(`SHOW_${entityName.toUpperCase()}_DEV_DETAILS`)
      ?.value ?? true

  return {
    detailsGenericProps: {
      ...getDetailsGenericProps(element, storeState),
      shouldDisplayDetails,
    },
    headerProps: {
      canRemove: element.status !== 'REMOVED',
      entityName,
      name: element.name,
      onRemoveConfirm: () => storeDispatch.routines.remove({ id: element.id }),
      optionsBase: getOptionsBase(element, navigate),
    },
    note: element.note,
  }
}

type UseGetBigCardProps<ElementT extends ElementBase> = {
  entityName: EntityType
  element: ElementT
  getDetailsGenericProps: (
    element: ElementT,
    storeState: UseStoreState
  ) => Omit<DetailsGenericProps, 'shouldDisplayDetails'>
  getOptionsBase: (
    element: ElementT,
    navigate: ReturnType<typeof useNavigate>
  ) => Array<OptionsGenericElement>
}

type ElementBase = {
  id: Id
  name: string
  status: string
  note?: string
}

export default useBigCard
