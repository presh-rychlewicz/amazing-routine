import WarningRoundedIcon from '@mui/icons-material/WarningRounded'
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Modal,
  ModalClose,
  ModalDialog,
} from '@mui/joy'
import ButtonElement from 'components/CommonElement/ButtonElement'
import { Dispatch, FC, SetStateAction } from 'react'

type Props = {
  isModalVisible: boolean
  setIsModalVisible: Dispatch<SetStateAction<Props['isModalVisible']>>
  message?: string
  confirmButtonLabel?: string
  cancelButtonLabel?: string
  onConfirm: () => void
}

const DialogModalGeneric: FC<Props> = ({
  isModalVisible,
  setIsModalVisible,
  message = 'Are you sure?',
  confirmButtonLabel = 'Confirm',
  cancelButtonLabel = 'Cancel',
  onConfirm,
}) => {
  if (!isModalVisible) {
    return null
  }

  const closeModal = () => setIsModalVisible(false)

  return (
    <Modal open={!!isModalVisible} onClose={closeModal}>
      <ModalDialog size="lg" variant="outlined" role="alertdialog">
        <DialogTitle>
          <WarningRoundedIcon />
          Confirmation
        </DialogTitle>

        <ModalClose variant="plain" sx={{ m: 1 }} />

        <Divider />

        <DialogContent>{message}</DialogContent>

        <DialogActions>
          <ButtonElement
            variant="solid"
            color="danger"
            onClick={() => {
              onConfirm()
              closeModal()
            }}
            label={confirmButtonLabel}
          />

          <ButtonElement
            variant="plain"
            color="neutral"
            onClick={closeModal}
            label={cancelButtonLabel}
          />
        </DialogActions>
      </ModalDialog>
    </Modal>
  )
}

export default DialogModalGeneric
