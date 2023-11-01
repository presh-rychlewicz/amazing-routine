import { paths } from 'config'
import { useAddOrEditForm, useStoreDispatch, useStoreState } from 'hooks'
import { useLocation } from 'react-router-dom'
import { Field, UseAddFormReturn } from 'schemas'

const useForm = (isEdit: boolean): UseAddFormReturn<Values> | null => {
  const storeDispatch = useStoreDispatch()
  const storeState = useStoreState()
  const { state } = useLocation()

  let initialValues: Values = {
    name: '',
  }

  const contextId = state?.contextId
  const context = storeState.getContextsById(contextId)

  if (isEdit) {
    if (!contextId || !context) {
      return null
    }

    initialValues = {
      name: context.name,
    }
  }

  const fields: Array<Field<Values>> = [
    {
      key: 'name',
      required: true,
      type: 'text',
    },
  ]

  const { getHandleSubmit, restValues } = useAddOrEditForm({
    fields,
    initialValues,
    isEdit,
    pathToGoAfterSubmitting: paths.contexts.children.index.absolute,
  })

  return {
    bodyProps: {
      ...restValues,
      handleSubmit: () =>
        getHandleSubmit((values) => {
          if (isEdit) {
            return storeDispatch.contexts.update({
              // @ts-expect-error
              id: context.id,
              update: {
                name: values.name,
              },
            })
          }

          return storeDispatch.contexts.add({
            name: values.name,
          })
        }),
    },
    headerProps: {
      entityType: 'context',
      isEdit,
    },
  }
}

type Values = {
  name: string
}

export default useForm
