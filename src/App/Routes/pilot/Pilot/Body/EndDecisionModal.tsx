import { DialogTitle, Modal, ModalDialog } from '@mui/joy'
import ButtonElement from 'components/CommonElement/ButtonElement'
import { FC } from 'react'

type EndDecisionModalProps = {
  onEnd: () => void
  open: boolean
}

const EndDecisionModal: FC<EndDecisionModalProps> = ({ open, onEnd }) => (
  <Modal open={open}>
    <ModalDialog>
      <DialogTitle>What do you want to do now?</DialogTitle>

      <ButtonElement
        label="Come back to skipped"
        disabled
        variant="outlined"
        color="neutral"
        // TODO: implement
        onClick={() => null}
      />

      <ButtonElement onClick={onEnd} color="neutral" label="Go to summary" />
    </ModalDialog>
  </Modal>
)

export default EndDecisionModal
export type { EndDecisionModalProps }
