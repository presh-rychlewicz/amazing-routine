import { BigCardProps, OptionsGenericElement } from 'components'
import { paths } from 'config'
import { useNavigate, useStoreDispatch } from 'hooks'
import { SingleRoutine, singleRoutineStatusEnum } from 'schemas'
import { getDetailsGenericProps } from './utils'

const useRoutine = (routine: SingleRoutine): BigCardProps => {
  const storeDispatch = useStoreDispatch()
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
    entityName: 'routine',
    name: routine.name,
    note: routine.note,
    onRemoveConfirm: () => storeDispatch.routines.remove({ id: routine.id }),
    optionsBase,
    ...detailsGenericProps,
  }
}

export default useRoutine
