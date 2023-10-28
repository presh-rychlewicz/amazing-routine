import { IconButton } from '@mui/joy'
import { DefaultVariantProp } from '@mui/joy/styles/types'
import { FC, ReactNode } from 'react'

type IconButtonElementProps = {
  disabled?: boolean
  icon: ReactNode
  variant?: DefaultVariantProp
  onClick: () => void
  fullWidth?: boolean
  fullHeight?: boolean
  gridArea?: string
}

const IconButtonElement: FC<IconButtonElementProps> = (props) => (
  <IconButton
    disabled={props.disabled}
    variant={props.variant}
    onClick={props.onClick}
    size="lg"
    sx={{
      gridArea: props.gridArea,
      height: props.fullHeight ? '100%' : undefined,
      width: props.fullWidth ? '100%' : undefined,
    }}
  >
    {props.icon}
  </IconButton>
)

export default IconButtonElement
export type { IconButtonElementProps }
