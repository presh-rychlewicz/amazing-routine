import { SetStateAction } from 'react'
import { TaskDataElem } from 'schemas'

const modifyTaskDataElementById = (
  id: TaskDataElem['id'],
  setTaskData: (value: SetStateAction<Array<TaskDataElem>>) => void,
  modification: Partial<TaskDataElem>
) => {
  setTaskData((prev) => {
    const currentIndex = prev.findIndex((t) => t.id === id)
    const currentTask = prev[currentIndex]

    const newCurrentTask = {
      ...currentTask,
      ...modification,
    }

    const newTaskData = [...prev]
    newTaskData[currentIndex] = newCurrentTask

    return newTaskData
  })
}

export default modifyTaskDataElementById
