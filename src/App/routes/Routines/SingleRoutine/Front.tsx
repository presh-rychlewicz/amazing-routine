import { Typography } from '@mui/joy'
import { FC } from 'react'

type Props = {
  name: string
  note: string | undefined
  onMoreClick: () => void
}

const Front: FC<Props> = ({ name, note, onMoreClick }) => (
  <>
    <Typography level="body-xs">{note}</Typography>
  </>
)

export default Front
