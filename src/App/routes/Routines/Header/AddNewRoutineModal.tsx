import { FormLabel, Stack, Typography } from '@mui/joy'
import { ChangeEvent, Fragment, useState } from 'react'
import Input from '@mui/joy/Input'

const AddNewRoutineModal = () => {
  const [name, setName] = useState('')

  const fields = [
    {
      label: 'Name',
      value: name,
      type: 'text',
      onChange: (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    },
    {
      label: 'Note',
      value: name,
      type: 'text',
      onChange: (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    },
  ]

  return (
    <Stack spacing={1}>
      <Typography>AddNewRoutineModal</Typography>

      <Stack spacing={0.5}>
        {fields.map(({ label, ...field }, index) => (
          <Fragment key={index}>
            <FormLabel>{label}</FormLabel>
            <Input {...field} />
          </Fragment>
        ))}
      </Stack>
    </Stack>
  )
}

export default AddNewRoutineModal
