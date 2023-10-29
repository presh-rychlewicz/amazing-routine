import {
  DialogContent,
  DialogTitle,
  Modal,
  ModalClose,
  ModalDialog,
} from '@mui/joy'
import { FC } from 'react'
import { Id } from 'schemas'
import { AddFormBodyTemplate } from 'templates'
import { useForm } from './hooks'

type Props = {
  onClose: () => void
  taskId: Id
  isOpen: boolean
}

const AddTimeModal: FC<Props> = ({ isOpen, onClose, taskId }) => {
  const useFormReturn = useForm(taskId, onClose)

  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalDialog>
        <DialogTitle>Add Time</DialogTitle>

        <ModalClose variant="plain" sx={{ m: 1 }} />

        <DialogContent>You can change it any time.</DialogContent>

        <AddFormBodyTemplate {...useFormReturn.bodyProps} />
      </ModalDialog>
    </Modal>
  )
}

export default AddTimeModal
