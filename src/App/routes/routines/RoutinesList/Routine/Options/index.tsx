import { FC, useState } from 'react'
import { useNavigate } from '../../../../../../hooks'
import { SingleRoutine } from '../../../../../../store/reducers/routines/types'

import { OptionsGeneric } from '../../../../../../components'
import { useStoreDispatch } from '../../../../../../store'
import RemoveModal from './RemoveModal'

type Props = Pick<SingleRoutine, 'id' | 'status'> & {}

const Options: FC<Props> = ({ id, status }) => {
  const [modalData, setModalData] = useState<ModalData>()
  const storeDispatch = useStoreDispatch()
  const navigate = useNavigate()

  let options = []
  if (status !== 'REMOVED') {
    options.push({
      children: 'Preview',
      onClick: () => navigate(id, false),
    })

    options.push({
      children: 'Edit',
      onClick: () => navigate('TODO'),
      disabled: true,
    })

    options.push({
      children: 'Delete',
      onClick: () =>
        setModalData({
          message: 'Are you sure you want to remove this routine?',
          confirmButtonLabel: 'Remove routine',
          onConfirm: () => storeDispatch.routines.remove(id),
        }),
    })
  }

  return (
    <OptionsGeneric options={options}>
      <RemoveModal modalData={modalData} setModalData={setModalData} />
    </OptionsGeneric>
  )
}

export type ModalData = {
  message: string
  confirmButtonLabel: string
  onConfirm: () => void
}

export default Options
