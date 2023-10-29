import { NUMBER_OF_SECONDS_IN_MINUTE } from 'config'
import { useAddForm, useStoreDispatch } from 'hooks'
import { Field, Id, UseAddFormReturn } from 'schemas'

const useForm = (taskId: Id, onClose: () => void): UseAddFormReturn<Values> => {
  const storeDispatch = useStoreDispatch()
  const { getHandleSubmit, restValues } = useAddForm({
    fields,
    initialValues,
    pathToGoAfterSubmitting: undefined,
  })

  return {
    bodyProps: {
      ...restValues,
      handleSubmit: () =>
        getHandleSubmit((values) => {
          storeDispatch.tasks.addTime({
            durationInSeconds:
              parseInt(values.duration) * NUMBER_OF_SECONDS_IN_MINUTE,
            id: taskId,
          })
          onClose()
        }),
    },
    headerProps: {
      // TEMP
      entityType: 'task',
    },
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
