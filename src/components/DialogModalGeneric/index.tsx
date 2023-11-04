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
import { UseModalReturn } from 'hooks'
import { FC } from 'react'

type Props = UseModalReturn & {
  message?: string
  confirmButtonLabel?: string
  cancelButtonLabel?: string
  onConfirm: () => void
}

const DialogModalGeneric: FC<Props> = ({
  isOpen,
  hide,
  message = 'Are you sure?',
  confirmButtonLabel = 'Confirm',
  cancelButtonLabel = 'Cancel',
  onConfirm,
}) => {
  if (!isOpen) {
    return null
  }

  return (
    <Modal open={!!isOpen} onClose={hide}>
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
              hide()
            }}
            label={confirmButtonLabel}
          />

          <ButtonElement
            variant="plain"
            color="neutral"
            onClick={hide}
            label={cancelButtonLabel}
          />
        </DialogActions>
      </ModalDialog>
    </Modal>
  )
}

export default DialogModalGeneric
