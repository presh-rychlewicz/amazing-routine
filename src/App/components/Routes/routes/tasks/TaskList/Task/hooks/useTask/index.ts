import { BigCardProps, OptionsGenericElement } from 'components'
import { useStoreDispatch, useStoreState } from 'hooks'
import { SingleTask, singleTaskStatusEnum } from 'schemas'
import { getDetailsGenericProps } from './utils'

const useTask = (task: SingleTask): BigCardProps => {
  const storeDispatch = useStoreDispatch()
  const storeState = useStoreState()

  const optionsBase: Array<OptionsGenericElement> = (() => {
    const options: Array<OptionsGenericElement> = []

    return options
  })()

  const detailsGenericProps = getDetailsGenericProps(
    task,
    storeState.getRoutinesById
  )

  return {
    canRemove: task.status !== singleTaskStatusEnum.enum.REMOVED,
    entityName: 'task',
    name: task.name,
    note: task.note,
    onRemoveConfirm: () => storeDispatch.tasks.remove({ id: task.id }),
    optionsBase,
    ...detailsGenericProps,
  }
}

export default useTask
