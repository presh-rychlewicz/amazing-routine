import CloseIcon from '@mui/icons-material/Close'
import { Typography, TypographySystem } from '@mui/joy'
import { FC } from 'react'
import ButtonElement, { ButtonElementProps } from './ButtonElement'
import IconButtonElement, { IconButtonElementProps } from './IconButtonElement'

type CommonElementProps = { isVisible?: boolean } & (
  | ({
      type: 'BUTTON'
    } & ButtonElementProps)
  | {
      type: 'TEXT'
      level: keyof TypographySystem
      content: string
    }
  | ({
      type: 'ICON_BUTTON'
    } & IconButtonElementProps)
  | {
      type: 'COMPONENT'
      content: JSX.Element
    }
  | {
      type: 'X_BUTTON'
      onClick: () => void
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
      return <ButtonElement {...props} />

    case 'TEXT':
      return <Typography level={props.level}>{props.content}</Typography>

    case 'ICON_BUTTON':
      return <IconButtonElement {...props} />

    case 'X_BUTTON':
      return <IconButtonElement onClick={props.onClick} icon={<CloseIcon />} />

    case 'COMPONENT':
      return props.content

    default:
      return <Typography>Unhandled case</Typography>
  }
}

export default CommonElement
export type { ButtonElementProps, CommonElementProps, IconButtonElementProps }
