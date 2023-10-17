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
import { ModalData } from '.'
import { FC } from 'react'

type Props = {
  modalData: ModalData | undefined
  setModalData: React.Dispatch<React.SetStateAction<Props['modalData']>>
}

const RemoveModal: FC<Props> = ({ modalData, setModalData }) => {
  if (!modalData) {
    return null
  }

  return (
    <Modal open={!!modalData} onClose={() => setModalData(undefined)}>
      <ModalDialog variant="outlined" role="alertdialog">
        <DialogTitle>
          <WarningRoundedIcon />
          Confirmation
        </DialogTitle>

        <ModalClose variant="plain" sx={{ m: 1 }} />

        <Divider />

        <DialogContent>{modalData.message}</DialogContent>

        <DialogActions>
          <Button
            variant="solid"
            color="danger"
            onClick={() => {
              modalData.onConfirm()
              setModalData(undefined)
            }}
          >
            {modalData.confirmButtonLabel}
          </Button>

          <Button
            variant="plain"
            color="neutral"
            onClick={() => setModalData(undefined)}
          >
            Cancel
          </Button>
        </DialogActions>
      </ModalDialog>
    </Modal>
  )
}

export default RemoveModal
