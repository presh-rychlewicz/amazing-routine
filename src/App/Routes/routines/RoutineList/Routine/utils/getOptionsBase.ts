import { OptionsGenericElement } from 'components'
import { paths } from 'config'
import { GetOptionsBase } from 'hooks/useBigCard'
import { SingleRoutine, singleRoutineStatusEnum } from 'schemas'

const getOptionsBase: GetOptionsBase<SingleRoutine> = (
  routine,
  navigate
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
      onClick: () =>
        navigate(paths.routines.children.edit.absolute, undefined, {
          routineId: routine.id,
        }),
    })
  }

  return optionsBase
}

export default getOptionsBase
