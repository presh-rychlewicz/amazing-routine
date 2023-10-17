import {
  DialogContent,
  DialogTitle,
  Modal,
  ModalClose,
  ModalDialog,
  Stack,
} from '@mui/joy'
import { FC, FormEvent } from 'react'
import { FormField, SubmitButton } from '../../../../../../../components'
import { getFormFieldProps } from '../../../../../../../utils'
import useForm, { fields } from './useForm'
import { SingleTask } from '../../../../../../../store/reducers/tasks/types'

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
          onSubmit={(event: FormEvent<HTMLFormElement>) =>
            event.preventDefault()
          }
        >
          {fields.map((field) => {
            const formFieldProps = getFormFieldProps(
              error,
              field,
              values,
              setValues,
              isSubmitting
            )

            return <FormField {...formFieldProps} />
          })}

          <SubmitButton handleSubmit={handleSubmit} label="Add" />
        </Stack>
      </ModalDialog>
    </Modal>
  )
}

export default AddTimeModal
