import { TasksState } from './types'

const initialState: TasksState = {
  value: [
    {
      id: 'c697c28d-dfc5-43d4-914c-96fb5f98db6b',
      name: 'Task 1',
      note: undefined,
      routineId: undefined,
      routineMeta: undefined,
      duration: 8,
      order: 999,
    },
    {
      id: 'f1e1b779-8db2-45fb-b5b1-50d0c77b79f8',
      name: 'Task 2',
      note: 'Lorem ipsum tere fere',
      routineId: '4ab22046-829a-448f-9626-90a0495a4d88',
      routineMeta: { status: 'NEW' },
      duration: undefined,
      order: 999,
    },
    {
      id: '9e3bce7e-2b62-4e1a-a5e3-546f737c0ef5',
      name: 'Task 3',
      note: 'Lorem ipsum tere fere',
      routineId: '4ab22046-829a-448f-9626-90a0495a4d88',
      routineMeta: { status: 'NEW' },
      duration: 20,
      order: 999,
    },
    {
      id: 'b750ae65-1528-4f54-8a8d-d29705bac9b8',
      name: 'Task 4',
      note: 'Lorem ipsum tere fere',
      routineId: '4ab22046-829a-448f-9626-90a0495a4d88',
      routineMeta: { status: 'NEW' },
      duration: 1,
      order: 999,
    },
  ],
}

export default initialState
