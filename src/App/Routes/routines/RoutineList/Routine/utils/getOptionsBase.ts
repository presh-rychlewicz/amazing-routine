import { OptionsGenericElement } from 'components'
import { paths } from 'config'
import { useNavigate } from 'hooks'
import { SingleRoutine, singleRoutineStatusEnum } from 'schemas'

const getOptionsBase = (
  routine: SingleRoutine,
  navigate: ReturnType<typeof useNavigate>
): Array<OptionsGenericElement> => {
  const optionsBase = []
  if (routine.status !== singleRoutineStatusEnum.enum.REMOVED) {
    optionsBase.push({
      children: 'Preview',
      onClick: () => navigate(routine.id, false),
    })

    optionsBase.push({
      children: 'Edit',
      disabled: true,
      onClick: () => navigate(paths.routines.children.edit.absolute),
    })
  }

  return optionsBase
}

export default getOptionsBase
