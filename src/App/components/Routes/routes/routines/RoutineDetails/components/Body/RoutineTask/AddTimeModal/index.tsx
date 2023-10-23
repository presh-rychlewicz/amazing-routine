import {
  DialogContent,
  DialogTitle,
  Modal,
  ModalClose,
  ModalDialog,
  Stack,
} from '@mui/joy'
import { FC, FormEvent } from 'react'
import { FormField, SubmitButton } from 'components'
import { SingleTask } from 'schemas'
import { getFormFieldProps } from 'utils'
import useForm, { fields } from './useForm'

type Props = {
  onClose: () => void
  taskId: SingleTask['id']
}

const AddTimeModal: FC<Props> = ({ onClose, taskId }) => {
  const { error, isSubmitting, values, setValues, handleSubmit } = useForm(
    taskId,
    onClose
  )

  return (
    <Modal open={true} onClose={onClose}>
      <ModalDialog>
        <DialogTitle>Add Time</DialogTitle>

        <ModalClose variant="plain" sx={{ m: 1 }} />

        <DialogContent>You can change it any time.</DialogContent>

        <Stack
          component="form"
          spacing={1}
          onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
        >
          {fields.map((field) => {
            const formFieldProps = getFormFieldProps(
              error,
              field,
              values,
              setValues,
              isSubmitting
            )

            return <FormField {...formFieldProps} key={formFieldProps.key} />
          })}

          <SubmitButton handleSubmit={handleSubmit} label="Add" />
        </Stack>
      </ModalDialog>
    </Modal>
  )
}

export default AddTimeModal
