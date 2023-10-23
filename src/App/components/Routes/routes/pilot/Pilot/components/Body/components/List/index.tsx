import { Drawer } from '@mui/joy'
import { ElementList } from 'components'
import { Dispatch, FC, SetStateAction } from 'react'
import { ListTask } from './components'
import { getSections } from './utils'
import { TaskDataElem } from 'schemas'

type Props = {
  taskData: Array<TaskDataElem>
  isListVisible: boolean
  setIsListVisible: Dispatch<SetStateAction<Props['isListVisible']>>
}

const List: FC<Props> = ({ taskData, isListVisible, setIsListVisible }) => {
  const sections = getSections(taskData)

  return (
    <Drawer
      anchor="bottom"
      size="lg"
      open={isListVisible}
      onClose={() => setIsListVisible((prev) => !prev)}
    >
      <ElementList
        title="Tasks"
        spacingBetweenElements="medium"
        elements={sections}
        renderElement={({ name, tasks }) => (
          <ElementList
            shouldShowEmptyState={false}
            key={name}
            title={name}
            elements={tasks}
            renderElement={(task) => (
              <ListTask
                key={task.id}
                durationInSeconds={task.durationInSeconds}
                name={task.name}
                isDone={task.isDone}
              />
            )}
          />
        )}
      />
    </Drawer>
  )
}

export default List
