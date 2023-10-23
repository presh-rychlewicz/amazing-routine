import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Dropdown, IconButton, Menu, MenuButton, MenuItem } from '@mui/joy'
import { FC, Fragment, PropsWithChildren } from 'react'

type Props = {
  options: Array<OptionsGenericElement>
}

const OptionsGeneric: FC<PropsWithChildren<Props>> = ({
  children,
  options,
}) => {
  const hasOptions = !!options.length

  return (
    <Dropdown>
      <MenuButton
        disabled={!hasOptions}
        slots={{
          root: IconButton,
        }}
        slotProps={{
          root: {
            size: 'md',
            variant: 'soft',
          },
        }}
        startDecorator={<MoreHorizIcon />}
      />

      <Menu>
        {options.map((option, index) => (
          <Fragment key={index}>
            <MenuItem {...option} />
          </Fragment>
        ))}
      </Menu>

      {children}
    </Dropdown>
  )
}

type OptionsGenericElement = {
  onClick: () => void
  children: string
  disabled?: boolean
}

export default OptionsGeneric
export type { OptionsGenericElement }
