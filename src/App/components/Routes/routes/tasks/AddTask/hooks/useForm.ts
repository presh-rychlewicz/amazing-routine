import dayjs from 'dayjs'
import { useAddForm, useStoreDispatch } from 'hooks'
import { useLocation } from 'react-router-dom'
import { Field, ReturnUseAddForm } from 'schemas'

const useForm = (returnPath: string | undefined): ReturnUseAddForm<Values> => {
  const storeDispatch = useStoreDispatch()
  const { state } = useLocation()
  const { getHandleSubmit, restValues } = useAddForm({
    fields,
    initialValues,
    pathToGoAfterSubmitting: returnPath,
  })

  return {
    handleSubmit: () =>
      getHandleSubmit((values) =>
        storeDispatch.tasks.add({
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
}

const initialValues: Values = {
  duration: '',
  name: '',
  note: '',
}

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
    key: 'note',
    type: 'text',
  },
]

export default useForm
