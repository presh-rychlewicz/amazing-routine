import {
  DialogContent,
  DialogTitle,
  Modal,
  ModalClose,
  ModalDialog,
} from '@mui/joy'
import { FC } from 'react'
import { SingleTask } from 'schemas'
import { AddFormBodyTemplate } from 'templates'
import { useForm } from './hooks'

type Props = {
  onClose: () => void
  taskId: SingleTask['id']
}

const AddTimeModal: FC<Props> = ({ onClose, taskId }) => {
  const useFormReturn = useForm(taskId, onClose)

  return (
    <Modal open={true} onClose={onClose}>
      <ModalDialog>
        <DialogTitle>Add Time</DialogTitle>

        <ModalClose variant="plain" sx={{ m: 1 }} />

        <DialogContent>You can change it any time.</DialogContent>

        <AddFormBodyTemplate useFormReturn={useFormReturn} />
      </ModalDialog>
    </Modal>
  )
}

export default AddTimeModal
