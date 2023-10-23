import { PayloadAction } from '@reduxjs/toolkit'
import { SingleTask, TasksState, singleTaskStatusEnum } from 'schemas'

type Keys = 'id' | 'routineMeta' | 'order' | 'status' | 'score'

const add = (
  state: TasksState,
  { payload }: PayloadAction<Omit<SingleTask, Keys>>
) => {
  const missing: Pick<SingleTask, Keys> = {
    id: crypto.randomUUID(),
    order: 999,
    score: 0,
    status: singleTaskStatusEnum.enum.ACTIVE,
  }
  const newTaskBase: Omit<SingleTask, 'routineId' | 'routineMeta'> = {
    ...payload,
    ...missing,
  }
  const newTask: SingleTask = {
    ...newTaskBase,
    ...(payload.routineId
      ? { routineId: payload.routineId, routineMeta: { status: 'NEW' } }
      : { routineId: undefined, routineMeta: undefined }),
  }

  const newValue = [...state.value, newTask]
  state.value = newValue
}

export default add