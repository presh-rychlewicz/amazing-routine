import { IconButton } from '@mui/joy'
import { DefaultVariantProp } from '@mui/joy/styles/types'
import { FC, ReactNode } from 'react'

type IconButtonElementProps = {
  disabled?: boolean
  icon: ReactNode
  variant?: DefaultVariantProp
  onClick: () => void
  fullWidth?: boolean
}

const IconButtonElement: FC<IconButtonElementProps> = (props) => (
  <IconButton
    disabled={props.disabled}
    variant={props.variant}
    onClick={props.onClick}
    size="lg"
    sx={{
      width: props.fullWidth ? '100%' : undefined,
    }}
  >
    {props.icon}
  </IconButton>
)

export default IconButtonElement
export type { IconButtonElementProps }
