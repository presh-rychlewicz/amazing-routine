import { useAddForm, useStoreDispatch } from 'hooks'
import { Field, Id, ReturnUseAddForm } from 'schemas'

const useForm = (taskId: Id, onClose: () => void): ReturnUseAddForm<Values> => {
  const storeDispatch = useStoreDispatch()
  const { getHandleSubmit, restValues } = useAddForm({
    fields,
    initialValues,
    pathToGoAfterSubmitting: undefined,
  })

  return {
    handleSubmit: () =>
      getHandleSubmit((values) => {
        storeDispatch.tasks.addTime({
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
          durationInSeconds: parseInt(values.duration) * 60,
          id: taskId,
        })
        onClose()
      }),
    ...restValues,
  }
}

type Values = {
  duration: string
}

const initialValues: Values = {
  duration: '3',
}

const fields: Array<Field<Values>> = [
  {
    autofocus: true,
    key: 'duration',
    required: true,
    type: 'number',
  },
]

export default useForm
export { fields }
