import WarningRoundedIcon from '@mui/icons-material/WarningRounded'
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Modal,
  ModalClose,
  ModalDialog,
} from '@mui/joy'
import { Dispatch, FC, SetStateAction } from 'react'

type Props = {
  isModalVisible: boolean
  setIsModalVisible: Dispatch<SetStateAction<Props['isModalVisible']>>
  message: string
  confirmButtonLabel: string
  cancelButtonLabel?: string
  onConfirm: () => void
}

const RemoveModalGeneric: FC<Props> = ({
  isModalVisible,
  setIsModalVisible,
  message,
  confirmButtonLabel,
  cancelButtonLabel = 'Cancel',
  onConfirm,
}) => {
  if (!isModalVisible) {
    return null
  }

  const closeModal = () => setIsModalVisible(false)

  return (
    <Modal open={!!isModalVisible} onClose={closeModal}>
      <ModalDialog variant="outlined" role="alertdialog">
        <DialogTitle>
          <WarningRoundedIcon />
          Confirmation
        </DialogTitle>

        <ModalClose variant="plain" sx={{ m: 1 }} />

        <Divider />

        <DialogContent>{message}</DialogContent>

        <DialogActions>
          <Button
            variant="solid"
            color="danger"
            onClick={() => {
              onConfirm()
              closeModal()
            }}
          >
            {confirmButtonLabel}
          </Button>

          <Button variant="plain" color="neutral" onClick={closeModal}>
            {cancelButtonLabel}
          </Button>
        </DialogActions>
      </ModalDialog>
    </Modal>
  )
}

export default RemoveModalGeneric
