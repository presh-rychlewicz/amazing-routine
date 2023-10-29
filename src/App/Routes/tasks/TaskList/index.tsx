import { ElementList, Route } from 'components'
import { useListControls, useStoreState } from 'hooks'
import { TaskListFilters, singleTaskStatusEnum } from 'schemas'
import { EntityListFooterTemplate, EntityListHeaderTemplate } from 'templates'
import { getSingleFilterMultiTypeOption } from 'utils'
import Task from './Task'

const TaskList = () => {
  const storeState = useStoreState()
  const { listBodyProps, listHeaderProps, listFooterProps, filters } =
    useListControls({
      category: 'TASK_LIST',
      disableAddButton: true,
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

  const tasks = storeState.getTasksByStatus(filters.status)

  let visibleTasks = tasks
  // TODO: create reducer
  if (filters.shouldShowTasksWithoutRoutine) {
    visibleTasks = tasks.filter((t) => !t.routineId)
  }

  return (
    <Route>
      <EntityListHeaderTemplate {...listHeaderProps} />

      <ElementList
        {...listBodyProps}
        elements={visibleTasks}
        renderElement={(t) => <Task key={t.id} element={t} />}
      />

      <EntityListFooterTemplate {...listFooterProps} />
    </Route>
  )
}

const initialFiltersState: TaskListFilters = {
  shouldShowTasksWithoutRoutine: false,
  status: [singleTaskStatusEnum.enum.ACTIVE],
}

export default TaskList
