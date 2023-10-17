import { Button, IconButton, Typography, TypographySystem } from '@mui/joy'
import { ReactNode } from 'react'
import CloseIcon from '@mui/icons-material/Close'

const handleSingleElement = (elementVariant: ElementVariant) => {
  switch (elementVariant.type) {
    case 'BUTTON':
      return (
        <Button
          variant="soft"
          size="sm"
          onClick={elementVariant.onClick}
          children={elementVariant.label}
        />
      )

    case 'TEXT':
      return (
        <Typography level={elementVariant.level}>
          {elementVariant.content}
        </Typography>
      )

    case 'ICON_BUTTON':
      return (
        <IconButton
          disabled={elementVariant.disabled}
          variant={elementVariant.variant}
          onClick={elementVariant.onClick}
        >
          {elementVariant.icon}
        </IconButton>
      )

    case 'X_BUTTON':
      return (
        <IconButton size={elementVariant.size} onClick={elementVariant.onClick}>
          <CloseIcon />
        </IconButton>
      )

    case 'COMPONENT':
      return elementVariant.content

    default:
      return <Typography>Unhandled case</Typography>
  }
}

type ElementVariant =
  | {
      type: 'BUTTON'
      label: string
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
      variant: 'solid' | 'plain' | 'soft'
      onClick: () => void
    }
  | {
      type: 'COMPONENT'
      content: ReactNode
    }
  | {
      type: 'X_BUTTON'
      onClick: () => void
      size?: 'sm' | 'md' | 'lg'
    }

export default handleSingleElement
export type { ElementVariant }
