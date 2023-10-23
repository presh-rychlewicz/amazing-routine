import { FiltersGeneric } from 'components'
import { Dispatch, FC, SetStateAction } from 'react'
import { TaskListFilters, singleTaskStatusEnum } from 'schemas'
import {
  getSingleFilterBooleanType,
  getSingleFilterMultiTypeOption,
} from 'utils'

type Props = {
  filters: TaskListFilters
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
        options: singleTaskStatusEnum.options.map((s) =>
          getSingleFilterMultiTypeOption(s, filters, 'status', setFilters)
        ),
        type: 'MULTI',
      },
      {
        label: 'Show task without routine',
        onChange: () =>
          getSingleFilterBooleanType(
            'shouldShowTasksWithoutRoutine',
            setFilters
          ),
        type: 'BOOLEAN',
        value: filters.shouldShowTasksWithoutRoutine,
      },
    ]}
  />
)

export default Filters
