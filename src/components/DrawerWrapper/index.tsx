import { Drawer, Stack } from '@mui/joy'
import { HeaderGeneric } from 'components'
import { FC, PropsWithChildren } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  title?: string
}

const DrawerWrapper: FC<PropsWithChildren<Props>> = ({
  onClose,
  title,
  children,
  open,
}) => (
  <Drawer anchor="bottom" size="lg" open={open} onClose={onClose}>
    <Stack padding={1} height="100%" spacing={1.5}>
      <HeaderGeneric
        {...(title && {
          topLeft: {
            content: 'Settings',
            level: 'title-md',
            type: 'TEXT',
          },
        })}
        topRight={[
          {
            onClick: onClose,
            type: 'X_BUTTON',
          },
        ]}
      />

      <Stack
        component="main"
        spacing={1}
        sx={{
          overflowY: 'scroll',
        }}
      >
        {children}
      </Stack>
    </Stack>
  </Drawer>
)

export default DrawerWrapper
