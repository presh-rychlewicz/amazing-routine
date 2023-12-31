import { Button, ColorPaletteProp, VariantProp } from '@mui/joy'
import { FC } from 'react'

type ButtonElementProps = {
  label: string
  disabled?: boolean
  onClick: () => void
  color?: ColorPaletteProp
  fullWidth?: boolean
  variant?: VariantProp
  type?: string
}

const ButtonElement: FC<ButtonElementProps> = (props) => (
  <Button
    type={props.type}
    fullWidth={props.fullWidth}
    color={props.color}
    variant={props.variant}
    size="lg"
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.label}
  </Button>
)

export default ButtonElement
export type { ButtonElementProps }
