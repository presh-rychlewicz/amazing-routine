import { Card, Typography } from '@mui/joy'
import { FC } from 'react'
import DetailsGeneric, { DetailsGenericProps } from '../DetailsGeneric'
import Header, { HeaderProps } from './Header'

type BigCardProps = {
  note?: string
  headerProps: HeaderProps
  detailsGenericProps: DetailsGenericProps
}

const BigCard: FC<BigCardProps> = ({
  detailsGenericProps,
  note,
  headerProps,
}) => (
  <Card>
    <Header {...headerProps} />

    <DetailsGeneric {...detailsGenericProps} />

    {note && <Typography level="body-xs">{note}</Typography>}
  </Card>
)

export default BigCard
export type { BigCardProps }
