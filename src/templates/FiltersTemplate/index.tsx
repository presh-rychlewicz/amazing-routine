import { Drawer, Stack, Typography } from '@mui/joy'
import { FC } from 'react'
import SingleFilter, { SingleFilterProps } from './SingleFilter'

type Props = {
  filters: Array<SingleFilterProps>
  onClose: () => void
  shouldShowFilters: boolean
}

const FiltersTemplate: FC<Props> = ({
  shouldShowFilters,
  filters,
  onClose,
}) => {
  const hasAnyFilters = filters.length
  if (!hasAnyFilters) {
    return null
  }

  console.log(filters)

  return (
    <Drawer
      anchor="bottom"
      size="lg"
      open={shouldShowFilters}
      onClose={onClose}
    >
      {filters.map(({ label, ...singleFilterProps }) => {
        const visibleLabel =
          singleFilterProps.type !== 'BOOLEAN' ? label : undefined

        return (
          <Stack
            key={label}
            spacing={1}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            {visibleLabel && (
              <Typography level="title-md">{visibleLabel}</Typography>
            )}

            <SingleFilter label={label} {...singleFilterProps} />
          </Stack>
        )
      })}
    </Drawer>
  )
}

type SingleFilter = SingleFilterProps & {
  label: string
}

export default FiltersTemplate
export type { SingleFilterProps }
