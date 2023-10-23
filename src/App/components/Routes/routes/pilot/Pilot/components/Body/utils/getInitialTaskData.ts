import { SingleTask, TaskDataElem } from 'schemas'

const getInitialTaskData = (tasks: Array<SingleTask>) =>
  tasks.map(
    (t, index, aray): TaskDataElem => ({
      completionSeconds: 0,
      durationInSeconds: t.durationInSeconds,
      id: t.id,
      index,
      isDone: false,
      isFailed: false,
      isFirst: index === 0,
      isLast: index === aray.length - 1,
      isSkipped: false,
      name: t.name,
    })
  )

export default getInitialTaskData
