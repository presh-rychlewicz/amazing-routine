import { paths } from 'config'
import { useAddForm, useStoreDispatch } from 'hooks'
import { Field, UseAddFormReturn } from 'schemas'

const useForm = (): UseAddFormReturn<Values> => {
  const storeDispatch = useStoreDispatch()
  const { getHandleSubmit, restValues } = useAddForm({
    fields,
    initialValues,
    pathToGoAfterSubmitting: paths.contexts.children.index.absolute,
  })

  return {
    bodyProps: {
      ...restValues,
      handleSubmit: () =>
        getHandleSubmit((values) =>
          storeDispatch.contexts.add({
            name: values.name,
          })
        ),
    },
    headerProps: {
      entityType: 'context',
    },
  }
}

type Values = {
  name: string
}

const initialValues: Values = {
  name: '',
}

const fields: Array<Field<Values>> = [
  {
    key: 'name',
    required: true,
    type: 'text',
  },
]

export default useForm
export { fields }
