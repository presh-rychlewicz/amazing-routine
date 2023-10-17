import { SingleRoutine } from '../store/reducers/routines/types'

const routes = {
  routines: {
    core: 'routines' as const,
    children: {
      index: {
        relative: '',
        absolute: 'routines/',
      },
      add: {
        relative: 'add',
        absolute: 'routines/add',
      },
      details: {
        relative: ':routineId',
        absolute: (routineId: SingleRoutine['id']) => `routines/${routineId}`,
      },
    },
  },
  pilot: {
    core: 'pilot' as const,
    children: {
      index: {
        relative: '',
        absolute: 'pilot/',
      },
    },
  },
  tasks: {
    core: 'tasks' as const,
    children: {
      index: {
        relative: '',
        absolute: 'tasks/',
      },
      add: {
        relative: 'add',
        absolute: 'tasks/add',
      },
    },
  },
}

type View = keyof typeof routes

type Field<ValuesT extends Record<string, any>> = {
  key: keyof ValuesT
  type: 'text' | 'number' | 'date' | 'time'
  required?: true
  autofocus?: true
}

type Id = string
export { routes }
export type { Field, Id, View }
