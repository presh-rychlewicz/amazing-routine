import { ONE, paths } from 'config'
import dayjs from 'dayjs'
import { useAddOrEditForm, useStoreDispatch, useStoreState } from 'hooks'
import { useLocation } from 'react-router-dom'
import { Field, UseAddFormReturn, singleContextStatusEnum } from 'schemas'

const useForm = (isEdit: boolean): UseAddFormReturn<Values> | null => {
  const storeDispatch = useStoreDispatch()
  const storeState = useStoreState()
  const { state } = useLocation()

  let initialValues: Values = {
    contextId: '',
    duration: '',
    name: '',
    note: '',
  }

  const taskId = state?.taskId
  const task = storeState.getTasksById(taskId)
  if (isEdit) {
    if (!taskId || !task) {
      return null
    }

    initialValues = {
      contextId: task.contextId ?? '',
      duration: task.durationInSeconds
        ? dayjs
            .duration(task.durationInSeconds, 'seconds')
            .asMinutes()
            .toString()
        : '',
      name: task.name,
      note: task.note ?? '',
    }
  }

  const returnPath =
    state && state.returnPath
      ? state.returnPath.slice(ONE)
      : paths.tasks.children.index.absolute

  const activeContexts = storeState.getContextsByStatus([
    singleContextStatusEnum.enum.ACTIVE,
  ])
  const fields: Array<Field<Values>> = [
    {
      key: 'name',
      required: true,
      type: 'text',
    },
    {
      key: 'duration',
      type: 'number',
    },
    {
      key: 'contextId',
      options: activeContexts.map(({ name, id }) => ({
        label: name,
        value: id,
      })),
      type: 'select',
    },
    {
      key: 'note',
      type: 'text',
    },
  ]

  const { getHandleSubmit, restValues } = useAddOrEditForm({
    fields,
    initialValues,
    pathToGoAfterSubmitting: returnPath,
  })

  return {
    bodyProps: {
      ...restValues,
      handleSubmit: () =>
        getHandleSubmit((values) => {
          if (isEdit) {
            return storeDispatch.tasks.update({
              // @ts-expect-error
              id: task.id,
              update: {
                contextId: values.contextId,
                durationInSeconds:
                  values.duration !== ''
                    ? dayjs
                        .duration(parseInt(values.duration), 'minutes')
                        .asSeconds()
                    : undefined,
                name: values.name,
                note: values.note || undefined,
              },
            })
          }

          return storeDispatch.tasks.add({
            contextId: values.contextId,
            durationInSeconds:
              values.duration !== ''
                ? dayjs
                    .duration(parseInt(values.duration), 'minutes')
                    .asSeconds()
                : undefined,
            name: values.name,
            note: values.note || undefined,
            routineId: state && state.routineId ? state.routineId : undefined,
          })
        }),
    },
    headerProps: {
      entityType: 'task',
      isEdit: false,
      returnPath,
    },
  }
}

type Values = {
  name: string
  note: string
  duration: string
  contextId: string
}

export default useForm
