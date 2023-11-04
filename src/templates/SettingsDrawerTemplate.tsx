import { DrawerWrapper } from 'components'
import { UseModalReturn, useSettings } from 'hooks'
import { UseSettingsProps } from 'hooks/useSettings'
import { FC } from 'react'
import { SettingsTemplate } from 'templates'

type Props = UseModalReturn &
  UseSettingsProps & {
    title?: string
  }

const SettingsDrawerTemplate: FC<Props> = ({
  categories,
  isOpen,
  hide,
  title,
}) => (
  <DrawerWrapper title={title} open={isOpen} onClose={hide}>
    <SettingsTemplate settings={useSettings({ categories })} />
  </DrawerWrapper>
)

export default SettingsDrawerTemplate
