import { ElementList, Route } from 'components'
import { useListControls, useStoreState } from 'hooks'
import { TaskListFilters, singleTaskStatusEnum } from 'schemas'
import { EntityListHeaderTemplate } from 'templates'
import { getSingleFilterMultiTypeOption } from 'utils'
import Task from './Task'

const TaskList = () => {
  const storeState = useStoreState()
  const { listBodyProps, listHeaderProps, ...useListControlsReturn } =
    useListControls({
      disableAddButton: true,
      disableOptions: true,
      disableSorting: true,
      entityType: 'task',
      filtersConfigFn: (filters, setFilters) => [
        {
          label: 'Status',
          options: singleTaskStatusEnum.options.map((o) =>
            getSingleFilterMultiTypeOption(o, filters, 'status', setFilters)
          ),
          type: 'MULTI',
        },
      ],
      initialFiltersState,
    })

  const tasks = storeState.getTasksByStatus(
    useListControlsReturn.filters.status
  )

  let visibleTasks = tasks
  // TODO: create reducer
  if (useListControlsReturn.filters.shouldShowTasksWithoutRoutine) {
    visibleTasks = tasks.filter((t) => !t.routineId)
  }

  return (
    <Route>
      <EntityListHeaderTemplate {...listHeaderProps} />

      <ElementList
        elements={visibleTasks}
        {...listBodyProps}
        renderElement={(t) => <Task key={t.id} task={t} />}
      />
    </Route>
  )
}

const initialFiltersState: TaskListFilters = {
  shouldShowTasksWithoutRoutine: false,
  status: [singleTaskStatusEnum.enum.ACTIVE],
}

export default TaskList
