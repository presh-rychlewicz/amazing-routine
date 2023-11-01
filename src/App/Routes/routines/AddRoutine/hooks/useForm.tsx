import { useAddOrEditForm } from 'hooks'
import { useStoreDispatch } from 'hooks'
import { DAYS, paths } from 'config'
import { Field, UseAddFormReturn } from 'schemas'
import { getUnixFromDateString } from 'utils'

const useForm = (): UseAddFormReturn<Values> => {
  const storeDispatch = useStoreDispatch()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const days = DAYS.map((day) => ({
    isChecked: false,
    label: day,
  }))

  const fields: Array<Field<Values>> = [
    {
      key: 'name',
      required: true,
      type: 'text',
    },
    {
      key: 'note',
      type: 'text',
    },
    {
      key: 'time',
      type: 'time',
    },
    {
      key: 'startDateInUnix',
      required: true,
      type: 'date',
    },
    {
      key: 'endDateInUnix',
      type: 'date',
    },
    {
      key: 'interval',
      required: true,
      type: 'number',
    },
    {
      key: 'days',
      options: DAYS,
      required: true,
      type: 'checkbox_group',
    },
  ]

  const { getHandleSubmit, restValues } = useAddOrEditForm<Values>({
    fields,
    initialValues,
    pathToGoAfterSubmitting: paths.routines.children.index.absolute,
  })

  return {
    bodyProps: {
      ...restValues,
      handleSubmit: () =>
        getHandleSubmit((values) =>
          storeDispatch.routines.add({
            days: values.days,
            endDateInUnix: values.endDateInUnix
              ? getUnixFromDateString(values.endDateInUnix)
              : undefined,
            interval: parseInt(values.interval),
            name: values.name,
            note: values.note || undefined,
            startDateInUnix: getUnixFromDateString(values.startDateInUnix),
            time: values.time || undefined,
          })
        ),
    },
    headerProps: {
      entityType: 'routine',
      isEdit: false,
    },
  }
}

type Values = {
  name: string
  note: string
  time: string
  startDateInUnix: string
  endDateInUnix: string | undefined
  days: [boolean, boolean, boolean, boolean, boolean, boolean, boolean]
  interval: string
}

const initialValues: Values = {
  days: [true, true, true, true, true, false, false],
  endDateInUnix: undefined,
  interval: '1',
  name: '',
  note: '',
  startDateInUnix: '',
  time: '',
}

export default useForm
