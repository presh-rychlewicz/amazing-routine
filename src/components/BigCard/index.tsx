import { Card, Typography } from '@mui/joy'
import { FC } from 'react'
import DetailsGeneric, {
  DetailsElem,
  DetailsGenericProps,
} from '../DetailsGeneric'
import { Header } from './components'
import { HeaderProps } from './components/Header'

type BigCardProps = HeaderProps &
  DetailsGenericProps & {
    rawData: Array<DetailsElem>
    note?: string
  }

const BigCard: FC<BigCardProps> = ({
  rawData,
  generatedData,
  onRemoveConfirm,
  entityName,
  optionsBase,
  note,
  name,
  canRemove,
  shouldDisplayDetails,
}) => (
  <Card>
    <Header
      onRemoveConfirm={onRemoveConfirm}
      entityName={entityName}
      optionsBase={optionsBase}
      name={name}
      canRemove={canRemove}
    />

    <DetailsGeneric
      shouldDisplayDetails={shouldDisplayDetails}
      generatedData={generatedData}
      rawData={rawData}
    />

    {note && <Typography level="body-xs">{note}</Typography>}
  </Card>
)

export default BigCard
export type { BigCardProps }
