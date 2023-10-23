import CloseIcon from '@mui/icons-material/Close'
import { Button, IconButton, Typography, TypographySystem } from '@mui/joy'
import { DefaultVariantProp } from '@mui/joy/styles/types'
import { FC, ReactNode } from 'react'

type CommonElementProps = { isVisible?: boolean } & (
  | {
      type: 'BUTTON'
      label: string
      disabled?: boolean
      onClick: () => void
    }
  | {
      type: 'TEXT'
      level: keyof TypographySystem
      content: string
    }
  | {
      type: 'ICON_BUTTON'
      disabled?: boolean
      icon: ReactNode
      variant?: DefaultVariantProp
      onClick: () => void
    }
  | {
      type: 'COMPONENT'
      content: JSX.Element
    }
  | {
      type: 'X_BUTTON'
      onClick: () => void
      size?: 'sm' | 'md' | 'lg'
    }
)

const CommonElement: FC<CommonElementProps> = ({
  isVisible = true,
  ...props
}) => {
  if (!isVisible) {
    return null
  }

  switch (props.type) {
    case 'BUTTON':
      return (
        <Button
          variant="soft"
          size="sm"
          disabled={props.disabled}
          onClick={props.onClick}
        >
          {props.label}
        </Button>
      )

    case 'TEXT':
      return <Typography level={props.level}>{props.content}</Typography>

    case 'ICON_BUTTON':
      return (
        <IconButton
          disabled={props.disabled}
          variant={props.variant}
          onClick={props.onClick}
        >
          {props.icon}
        </IconButton>
      )

    case 'X_BUTTON':
      return (
        <IconButton size={props.size} onClick={props.onClick}>
          <CloseIcon />
        </IconButton>
      )

    case 'COMPONENT':
      return props.content

    default:
      return <Typography>Unhandled case</Typography>
  }
}

export default CommonElement
export type { CommonElementProps }
