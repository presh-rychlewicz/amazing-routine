import { BigCardProps, OptionsGenericElement } from 'components'
import { paths } from 'config'
import { useNavigate, useStoreDispatch, useStoreState } from 'hooks'
import { SingleRoutine, singleRoutineStatusEnum } from 'schemas'
import { getDetailsGenericProps } from './utils'

const useRoutine = (routine: SingleRoutine): BigCardProps => {
  const storeDispatch = useStoreDispatch()
  const storeState = useStoreState()
  const navigate = useNavigate()

  const optionsBase = ((): Array<OptionsGenericElement> => {
    const options: Array<OptionsGenericElement> = []
    if (routine.status !== singleRoutineStatusEnum.enum.REMOVED) {
      options.push({
        children: 'Preview',
        onClick: () => navigate(routine.id, false),
      })

      options.push({
        children: 'Edit',
        disabled: true,
        onClick: () => navigate(paths.routines.children.edit.absolute),
      })
    }

    return options
  })()

  const detailsGenericProps = getDetailsGenericProps(routine)

  return {
    canRemove: routine.status !== singleRoutineStatusEnum.enum.REMOVED,
    entityName: 'routine',
    name: routine.name,
    note: routine.note,
    onRemoveConfirm: () => storeDispatch.routines.remove({ id: routine.id }),
    optionsBase,
    shouldDisplayDetails: !!storeState.getSettingsById(
      'SHOW_ROUTINE_DEV_DETAILS'
    )?.value,
    ...detailsGenericProps,
  }
}

export default useRoutine
