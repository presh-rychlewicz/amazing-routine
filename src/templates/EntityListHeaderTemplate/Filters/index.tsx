import { Stack, Typography } from '@mui/joy'
import { DrawerWrapper } from 'components'
import { FC } from 'react'
import SingleFilter, { SingleFilterProps } from './SingleFilter'
import { UseModalReturn } from 'hooks'

type Props = Pick<UseModalReturn, 'isOpen' | 'hide'> & {
  filters: Array<SingleFilterProps>
}

const Filters: FC<Props> = ({ isOpen, hide, filters }) => {
  const hasAnyFilters = filters.length
  if (!hasAnyFilters) {
    return null
  }

  return (
    <DrawerWrapper open={isOpen} onClose={hide}>
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
    </DrawerWrapper>
  )
}

type SingleFilter = SingleFilterProps & {
  label: string
}

export default Filters
export type { SingleFilterProps }
