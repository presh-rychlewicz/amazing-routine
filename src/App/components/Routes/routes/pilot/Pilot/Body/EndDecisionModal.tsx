import { Button, DialogTitle, Modal, ModalDialog } from '@mui/joy'
import { FC } from 'react'

type Props = {
  onEnd: () => void
}

const EndDecisionModal: FC<Props> = ({ onEnd }) => (
  <Modal open>
    <ModalDialog>
      <DialogTitle>What do you want to do now?</DialogTitle>

      {/* TODO: implement */}
      <Button disabled variant="outlined" color="neutral">
        Come back to skipped
      </Button>

      <Button onClick={onEnd} color="neutral">
        Go to summary
      </Button>
    </ModalDialog>
  </Modal>
)

export default EndDecisionModal
