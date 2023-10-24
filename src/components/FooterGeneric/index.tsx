import { Stack } from '@mui/joy'
import { IconButtonElementProps } from 'components/CommonElement'
import ButtonElement, {
  ButtonElementProps,
} from 'components/CommonElement/ButtonElement'
import IconButtonElement from 'components/CommonElement/IconButtonElement'
import { FC } from 'react'

type Props = {
  smallButton?: IconButtonElementProps
  largeButton?: ButtonElementProps
}

const FooterGeneric: FC<Props> = ({ smallButton, largeButton }) => {
  const hasAnyButton = smallButton || largeButton

  return (
    <Stack component="footer" spacing={1}>
      {hasAnyButton && (
        <Stack direction="row" alignItems="center" spacing={1}>
          {smallButton && <IconButtonElement {...smallButton} />}

          {largeButton && <ButtonElement {...largeButton} />}
        </Stack>
      )}
    </Stack>
  )
}

export default FooterGeneric
