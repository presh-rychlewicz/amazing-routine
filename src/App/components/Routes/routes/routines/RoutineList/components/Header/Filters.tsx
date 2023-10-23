import { FiltersGeneric } from 'components'
import { Dispatch, FC, SetStateAction } from 'react'
import { RoutineListFilters, singleRoutineStatusEnum } from 'schemas'
import { getSingleFilterMultiTypeOption } from 'utils/getSingleFilterMultiTypeOption'

type Props = {
  filters: RoutineListFilters
  setFilters: Dispatch<SetStateAction<Props['filters']>>
  toggleFilters: () => void
  shouldShowFilters: boolean
}

const Filters: FC<Props> = ({
  shouldShowFilters,
  filters,
  setFilters,
  toggleFilters,
}) => (
  <FiltersGeneric
    shouldShowFilters={shouldShowFilters}
    onClose={toggleFilters}
    filters={[
      {
        label: 'Status',
        options: singleRoutineStatusEnum.options.map((s) =>
          getSingleFilterMultiTypeOption(s, filters, 'status', setFilters)
        ),
        type: 'MULTI',
      },
    ]}
  />
)

export default Filters
