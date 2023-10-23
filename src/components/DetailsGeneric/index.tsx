import { ColorPaletteProp } from '@mui/joy'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'
import { FC } from 'react'

type DetailsGenericProps = {
  rawData: Array<DetailsElem>
  generatedData?: Array<DetailsElem>
}

const DetailsGeneric: FC<DetailsGenericProps> = ({
  rawData,
  generatedData,
}) => {
  const hasAnyGeneratedData = !!generatedData?.length

  return (
    <Stack>
      {rawData.map((d) => (
        <Typography key={d.label} level="body-xs" color={d.color}>
          {d.label}: {d.value}
        </Typography>
      ))}

      {hasAnyGeneratedData && (
        <>
          <Typography level="body-xs">---</Typography>

          <>
            {generatedData.map((d) => (
              <Typography key={d.label} level="body-xs" color={d.color}>
                {d.label}: {d.value}
              </Typography>
            ))}
          </>
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
