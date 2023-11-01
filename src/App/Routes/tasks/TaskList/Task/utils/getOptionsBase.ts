import { OptionsGenericElement } from 'components'
import { paths } from 'config'
import { GetOptionsBase } from 'hooks/useBigCard'
import { SingleTask } from 'schemas'

const getOptionsBase: GetOptionsBase<SingleTask> = (
  task,
  navigate
): Array<OptionsGenericElement> => {
  const optionsBase: Array<OptionsGenericElement> = [
    {
      children: 'Edit',
      onClick: () =>
        navigate(paths.tasks.children.edit.absolute, undefined, {
          taskId: task.id,
        }),
    },
  ]

  return optionsBase
}

export default getOptionsBase
