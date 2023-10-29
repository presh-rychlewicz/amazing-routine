import { paths } from 'config'
import dayjs from 'dayjs'
import { useAddForm, useStoreDispatch, useStoreState } from 'hooks'
import { useLocation } from 'react-router-dom'
import { Field, UseAddFormReturn, singleContextStatusEnum } from 'schemas'

const useForm = (): UseAddFormReturn<Values> => {
  const storeDispatch = useStoreDispatch()
  const storeState = useStoreState()

  const { state } = useLocation()
  const returnPath =
    state && state.returnPath
      ? state.returnPath.slice(SLICE_START)
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

  const { getHandleSubmit, restValues } = useAddForm({
    fields,
    initialValues,
    pathToGoAfterSubmitting: returnPath,
  })

  return {
    bodyProps: {
      ...restValues,
      handleSubmit: () =>
        getHandleSubmit((values) =>
          storeDispatch.tasks.add({
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
        ),
    },
    headerProps: {
      entityType: 'task',
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

const initialValues: Values = {
  contextId: '',
  duration: '',
  name: '',
  note: '',
}

const SLICE_START = 1

export default useForm
