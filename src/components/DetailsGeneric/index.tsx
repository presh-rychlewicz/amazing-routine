import { ColorPaletteProp } from '@mui/joy'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'
import { FC } from 'react'

type DetailsGenericProps = {
  rawData: Array<DetailsElem>
  generatedData?: Array<DetailsElem>
  shouldDisplayDetails?: boolean
}

const DetailsGeneric: FC<DetailsGenericProps> = ({
  rawData,
  generatedData,
  shouldDisplayDetails = true,
}) => {
  if (!shouldDisplayDetails) {
    return null
  }

  const hasAnyRawData = !!rawData.length
  const hasAnyGeneratedData = !!generatedData?.length
  const shouldDisplayDivider = hasAnyRawData && hasAnyGeneratedData

  return (
    <Stack>
      {hasAnyRawData &&
        rawData.map((d) => (
          <Typography key={d.label} level="body-xs" color={d.color}>
            {d.label}: {d.value}
          </Typography>
        ))}

      {shouldDisplayDivider && <Typography level="body-xs">---</Typography>}

      {hasAnyGeneratedData && (
        <>
          {generatedData.map((d) => (
            <Typography key={d.label} level="body-xs" color={d.color}>
              {d.label}: {d.value}
            </Typography>
          ))}
        </>
      )}
    </Stack>
  )
}

type DetailsElem = {
  label: string
  value: string | number | JSX.Element
  color?: ColorPaletteProp
}

export default DetailsGeneric
export type { DetailsElem, DetailsGenericProps }
