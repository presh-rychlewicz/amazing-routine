import dayjs from 'dayjs'
import { useAddForm, useStoreDispatch, useStoreState } from 'hooks'
import { useLocation } from 'react-router-dom'
import { Field, ReturnUseAddForm, singleContextStatusEnum } from 'schemas'

const useForm = (returnPath: string | undefined): ReturnUseAddForm<Values> => {
  const storeDispatch = useStoreDispatch()
  const storeState = useStoreState()
  const { state } = useLocation()

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
    handleSubmit: () =>
      getHandleSubmit((values) =>
        storeDispatch.tasks.add({
          contextId: values.contextId,
          durationInSeconds:
            values.duration !== ''
              ? dayjs.duration(parseInt(values.duration), 'minutes').asSeconds()
              : undefined,
          name: values.name,
          note: values.note || undefined,
          routineId: state && state.routineId ? state.routineId : undefined,
        })
      ),
    ...restValues,
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

export default useForm
